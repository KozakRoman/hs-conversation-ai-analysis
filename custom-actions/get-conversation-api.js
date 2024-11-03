/*
    This is a HubSpot custom code action. It returns the first incoming message from a given thread ID.

    Secret input fields:
    - PRIVATE_APP_API_KEY: Your HubSpot Private App API key.
    
    Action input fields:
    - hs_thread_id: The thread ID of the conversation.

    Action output fields:
    - isMessage: A boolean indicating if the message exists.
    - message: The text content of the message.
    - emailSubject: The subject of the email. It is optional and may not be available.
    - isSenderName: A boolean indicating if the sender's name exists.
    - senderName: The sender's name. It is optional and may not be available.
    - isSenderEmail: A boolean indicating if the sender's email exists.
    - senderEmail: The sender's email. It is optional and may not be available.

    Example output:
    {
      "isMessage": true,
      "message": "Hello, I have a question about your services.",
      "emailSubject": "Question about services",
      "isSenderName": true,
      "senderName": "John Doe",
      "isSenderEmail": true,
      "senderEmail": "
    }

    For more information, refer to the HubSpot API documentation: https://developers.hubspot.com/beta-docs/guides/api/conversations/inbox-and-messages
*/

const axios = require("axios");

exports.main = async (event, callback) => {
  const threadId = event?.fields?.hs_thread_id;

  if (!threadId) {
    console.error("There is no Thread ID in the input fields");
    callback({
      outputFields: {
        isMessage: false
      }
    });
    return;
  }

  const message = await getFirstIncomingMessage(threadId);

  if (!message) {
    console.log("No incoming messages found");
    callback({
      outputFields: {
        isMessage: false
      }
    });
    return;
  }

  const messageText = message.text;
  const emailSubject = message.subject || "";
  let senderName = "";
  let senderEmail = "";
  if (message.senders && message.senders.length > 0) {
    senderName = message.senders[0].name;
    senderEmail =
      message.senders[0]?.deliveryIdentifier.type == "HS_EMAIL_ADDRESS"
        ? message.senders[0]?.deliveryIdentifier.value
        : "";
  }

  console.log({ senderName, senderEmail, messageText });

  callback({
    outputFields: {
      isMessage: !!messageText,
      message: messageText,
      emailSubject,
      isSenderName: !!senderName,
      senderName,
      isSenderEmail: !!senderEmail,
      senderEmail
    }
  });
};

function filterMessages(messages) {
  return messages?.filter(
    message =>
      message.direction &&
      message.direction == "INCOMING" &&
      message.type &&
      message.type === "MESSAGE"
  );
}

async function getFirstIncomingMessage(threadId) {
  const messages = await getMessagesFromThread(threadId);

  if (!messages) {
    return null;
  }

  const incomingMessages = filterMessages(messages);

  return incomingMessages?.[0];
}

async function getMessagesFromThread(threadId) {
  const accessToken = process.env.PRIVATE_APP_API_KEY;

  try {
    const response = await axios.get(
      `https://api.hubapi.com/conversations/v3/conversations/threads/${threadId}/messages?limit=100&sort=createdAt`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json"
        }
      }
    );

    return response.data?.results;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status, error.response.data);
    } else {
      console.error(error);
    }

    return null;
  }
}
