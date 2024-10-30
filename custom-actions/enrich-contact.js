const axios = require("axios");

exports.main = async (event, callback) => {
  const email = event?.fields?.senderEmail;
  const name = event?.fields?.senderName;

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
      companySpecialities: company?.specialities?.length
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

    console.log(response);
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
