/*
  This is a custom action that uses OpenAI's GPT-4 model to analyze an email and determine the priority level of the case based on the given criteria.

  Secret input fields:
  - OPENAI_API_KEY: Your OpenAI API key.

  Action input fields:
  - companyName: The name of the company.
  - companyEmployeeCount: The number of employees in the company.
  - companyFollowerCount: The number of followers of the company.
  - companySpecialties: The specialties of the company.
  - personFirstName: The first name of the person.
  - personLastName: The last name of the person.
  - personFollowerCount: The number of followers of the person.
  - personSummary: The summary of the person's information.
  - personLocation: The location of the person.
  - message: The email content.

  Action output fields:
  - priority: The priority of the email (High or Low).
  - reason: The reason for the priority.
  - email_summary: A one-sentence email summary of the email content and sender's information.

  Example output:
  {
    "priority": "High",
    "reason": "The sender is a well-known influencer and the email contains a request for a new HubSpot design and development project.",
    "email_summary": "Email from John Doe at Example Company regarding a new project."
  }
*/

const axios = require("axios");

const AI_INSTRUCTIONS = `
        You are given an email to analyze. This is a new incoming email to a HubSpot design and development agency - Kohorta.
        The given email contains email content, subject, and the sender's information.

        **Your Task:**
        Analyze the provided data to determine the priority level of the case based on the given criteria.
        The priority value can be either "High" or "Low". Write the priority value in the response along with the reason for your decision and one sentence email summary.
        Summary should be a one-sentence description of the email content and sender's information.
        Answer has to be in the JSON format.

        **Criteria for High priority:**
        - Sender works at a company with more than 1000 employees.
        - Sender works at a well-known company.
        - Sender has more than 8000 followers.
        - Sender holds a high position in the company.
        - Sender is a startup founder from a well-known accelerator.
        - Sender is a well-known influencer, investor, or entrepreneur.
        - Sender is referred by a high-value contact or previous client
        - Email contains a request for a new HubSpot design and development project.
        - Email can be considered as a potential partnership or collaboration.
        - Email mention our HubSpot marketplace listed themes(Absolut, Adamant, Apelsyn).
        - Email mentions potential for long-term work, retainer opportunities, or an ongoing partnership.
        - Email details a large-scale project (e.g., multi-page website, enterprise-level integration) or a project targeting a large audience.

        **Criteria for Low priority:**
        - All other cases that do not meet the criteria for High priority.
        `;

const RESPONSE_SCHEMA = {
  name: "priority_response",
  strict: true,
  schema: {
    type: "object",
    properties: {
      priority: {
        type: "string",
        description: "Priority of an email",
        enum: ["High", "Low"]
      },
      reason: {
        type: "string",
        description: "Reason for the priority"
      },
      email_summary: {
        type: "string",
        description:
          "One sentence email summary of the email content and sender's information"
      }
    },
    required: ["priority", "reason", "email_summary"],
    additionalProperties: false
  }
};

exports.main = async (event, callback) => {
  const companyName =
    event?.inputFields?.companyName || event?.inputFields?.company || "Unknown";
  const companyEmployeeCount =
    event?.inputFields?.companyEmployeeCount ||
    event?.inputFields?.company_size ||
    "Unknown";
  const companyFollowerCount =
    event?.inputFields?.companyFollowerCount || "Unknown";
  const companySpecialties =
    event?.inputFields?.companySpecialties || "Unknown";
  const personFirstName =
    event?.inputFields?.personFirstName ||
    event?.inputFields?.firstname ||
    "Unknown";
  const personLastName =
    event?.inputFields?.personLastName ||
    event?.inputFields?.lastname ||
    "Unknown";
  const personFollowerCount =
    event?.inputFields?.personFollowerCount || "Unknown";
  const personSummary =
    event?.inputFields?.personSummary ||
    event?.inputFields?.jobtitle ||
    "Unknown";

  let personLocation = event?.inputFields?.personLocation;

  if (!personLocation) {
    const country = event?.inputFields?.country;
    const city = event?.inputFields?.city;
    const state = event?.inputFields?.state;

    personLocation = `${city || ""} ${state || ""} ${country || ""}`;

    personLocation = personLocation.trim();

    if (personLocation === "") {
      personLocation = "Unknown";
    }
  }

  const email = event?.inputFields?.message;

  const senderInfo = `
    Company Name: ${companyName}
    Company Employee Count: ${companyEmployeeCount}
    Company Follower Count: ${companyFollowerCount}
    Company Specialties: ${companySpecialties}
    Person First Name: ${personFirstName}
    Person Last Name: ${personLastName}
    Person Follower Count: ${personFollowerCount}
    Person Summary: ${personSummary}
    Person Location: ${personLocation}
    `;

  const emailInfo = `
    Email: ${email}
    `;

  const dataToAnalyze = `
    ${senderInfo}
    ${emailInfo}
    `;

  let response = await callOpenAI(dataToAnalyze);

  if (!response) {
    callback({
      outputFields: {}
    });
    return;
  }

  try {
    response = JSON.parse(response);
  } catch (error) {
    console.error("Failed to parse the response from OpenAI");
    console.error(response);
    callback({
      outputFields: {}
    });
    return;
  }

  const { priority, reason, email_summary } = response;

  callback({
    outputFields: {
      priority,
      reason,
      email_summary
    }
  });
};

async function callOpenAI(userInput) {
  const url = `https://api.openai.com/v1/chat/completions`;

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      accept: "application/json",
      "content-type": "application/json"
    }
  };

  const payload = {
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system",
        content: AI_INSTRUCTIONS
      },
      {
        role: "user",
        content: userInput
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: RESPONSE_SCHEMA
    }
  };

  try {
    const response = await axios.post(url, payload, options);
    return response.data.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.headers);
      console.error(error.response.data);
    } else {
      console.error(error);
    }
    return null;
  }
}
