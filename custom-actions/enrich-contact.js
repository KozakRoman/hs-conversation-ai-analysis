/*
  This HubSpot custom action enriches the contact information of a person and a company based on the email address.
  It uses the ReverseContact API to get the information.

  Secret input fields:
  - REVERSE_CONTACT_API_KEY: Your ReverseContact API key.

  Action input fields:
  - senderEmail: The email address of the sender.
  - senderName: The name of the sender. For better results, provide the full name.

  Action output fields:
  - isPerson: A boolean indicating if there is successful enrichment for a person.
  - isCompany: A boolean indicating if there is successful enrichment for a company.
  - personSummary: A summary of the person's information.
  - personFirstName: The first name of the person.
  - personLastName: The last name of the person.
  - personFollowerCount: The number of LinkedIn followers of the person.
  - personLocation: The location of the person.
  - personLinkedInUrl: The LinkedIn URL of the person.
  - companyName: The name of the company.
  - companyEmployeeCount: The number of employees in the company.
  - companyFollowerCount: The number of LinkedIn followers of the company.
  - companySpecialties: The specialties of the company.

  Example output:
  {
    "isPerson": true,
    "isCompany": true,
    "personSummary": "Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.",
    "personFirstName": "Bill",
    "personLastName": "Gates",
    "personFollowerCount": 35415,
    "personLocation": "Seattle, Washington, United States of America",
    "personLinkedInUrl": "https://www.linkedin.com/in/williamhgates",
    "companyName": "Microsoft",
    "companyEmployeeCount": 1000,
    "companyFollowerCount": 10000,
    "companySpecialties": "Software, Technology, Cloud Computing"
  }

  For more information, refer to the ReverseContact API documentation: https://docs.reversecontact.com/introduction


*/

const axios = require("axios");

exports.main = async (event, callback) => {
  const email = event?.inputFields?.senderEmail;
  const name = event?.inputFields?.senderName;

  if (!email) {
    console.error("There is no email in the input fields");
    callback({
      outputFields: {}
    });
    return;
  }

  const { person, company } = await getEmailOwner(email, name);

  callback({
    outputFields: {
      isPerson: !!person,
      isCompany: !!company,
      personSummary: person?.summary || "",
      personFirstName: person?.firstName || "",
      personLastName: person?.lastName || "",
      personFollowerCount: person?.followerCount || 0,
      personLocation: person?.location || "",
      personLinkedInUrl: person?.linkedInUrl || "",
      companyName: company?.name || "",
      companyEmployeeCount: company?.employeeCount || 0,
      companyFollowerCount: company?.followerCount || 0,
      companySpecialties: company?.specialities?.length
        ? company?.specialities.join(", ")
        : ""
    }
  });
};

async function getEmailOwner(email, name) {
  const apiKey = process.env.REVERSE_CONTACT_API_KEY;

  const { firstName, lastName } = getFirstNameLastNameFromName(name);

  const firstNameStr = firstName ? `&firstName=${firstName}` : "";
  const lastNameStr = lastName ? `&lastName=${lastName}` : "";

  const url = `https://api.reversecontact.com/enrichment?apikey=${apiKey}&email=${email}${firstNameStr}${lastNameStr}`;

  try {
    const response = await axios.get(url);

    console.log(response.data);

    return response.data;
  } catch (e) {
    if (e.response) {
      console.error(e.response.status, e.response.headers, e.response.data);
    } else {
      console.error(e);
    }
    return null;
  }
}

function getFirstNameLastNameFromName(name) {
  name = name.trim();

  if (name === "") {
    return {
      firstName: "",
      lastName: ""
    };
  }

  // Split the name on one or more whitespace characters
  const names = name.split(/\s+/);

  const firstName = names[0];
  let lastName = "";

  if (names.length > 1) {
    lastName = names[names.length - 1];
  }

  return {
    firstName,
    lastName
  };
}
