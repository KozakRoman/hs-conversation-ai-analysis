const axios = require("axios");

exports.main = async (event, callback) => {
  const companyName = event?.inputFields?.companyName || "Unknown";
  const companyEmployeeCount =
    event?.inputFields?.companyEmployeeCount || "Unknown";
  const companyFollowerCount =
    event?.inputFields?.companyFollowerCount || "Unknown";
  const companySpecialties =
    event?.inputFields?.companySpecialties || "Unknown";
  const personFirstName = event?.inputFields?.personFirstName || "Unknown";
  const personLastName = event?.inputFields?.personLastName || "Unknown";
  const personFollowerCount =
    event?.inputFields?.personFollowerCount || "Unknown";
  const personSummary = event?.inputFields?.personSummary || "Unknown";
  const personLocation = event?.inputFields?.personLocation || "Unknown";

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
};
