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
  const emailSubject = message.subject;
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
