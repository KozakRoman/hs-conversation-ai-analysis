const axios = require("axios");

const AI_INSTRUCTIONS = `
        This is a conversation of a professional legal assistant experienced in employment law.
        Assistant analyzes phone call notes between a law firm receptionist (agent) and a
        prospective client (caller). The client has contacted the law firm for legal advice regarding an
        employment matter, and the receptionist conducted an initial interview to note the case's details.
       
        The objective of this conversation is to analyze notes to set the case priority. The priority value can be either "High" or "Low".
        The law firm has a policy to prioritize cases based on certain criteria. The criteria are as follows:
        - High priority: Cases where the caller was terminated from their job as a result of a drug
        test;
        - High priority: Cases where the caller was sexually harassed;
        - High priority: Cases where the caller makes more than $175,000 per year or $85 per hour;
        - Low priority: All other cases. `;

const RESPONSE_SCHEMA = {
  name: "priority_response",
  strict: true,
  schema: {
    type: "object",
    properties: {
      priority: {
        type: "string",
        description: "The priority of the contact",
        enum: ["High", "Low"]
      }
    },
    required: ["priority"],
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

  const response = await callOpenAI(dataToAnalyze);
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
