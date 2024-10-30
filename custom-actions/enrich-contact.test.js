const { main } = require("./enrich-contact.js");
const axios = require("axios");

const messageResponse = {
  data: {
    success: true,
    email: "bill.gates@microsoft.com",
    emailType: "professional",
    credits_left: 90000,
    rate_limit_left: 19000,
    person: {
      publicIdentifier: "williamhgates",
      memberIdentifier: "251749025",
      linkedInIdentifier: "ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc",
      linkedInUrl: "https://www.linkedin.com/in/williamhgates",
      firstName: "Bill",
      lastName: "Gates",
      headline: "Co-chair, Bill & Melinda Gates Foundation",
      location: "Seattle, Washington, United States of America",
      summary:
        "Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.",
      photoUrl:
        "https://media.licdn.com/dms/image/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_800_800/0/1695167344576?e=1723680000&v=beta&t=NcEpysYwCpQ_NBg0QTz_a265pEOhfGICFJUX92-KNpw",
      backgroundUrl:
        "https://media.licdn.com/dms/image/v2/D5616AQHy2R5tyt2YUA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1672782785474?e=1731542400&v=beta&t=0HWY04xeK0kEQngJOje3yNudJ6eTvNz2Q2HrTRB4hO8",
      openToWork: false,
      premium: false,
      creationDate: {
        month: 5,
        year: 2013
      },
      followerCount: 35415,
      positions: {
        positionsCount: 3,
        positionHistory: [
          {
            title: "Co-chair",
            companyName: "Bill & Melinda Gates Foundation",
            description: "",
            startEndDate: {
              start: {
                month: 1,
                year: 2000
              },
              end: null
            },
            companyLogo:
              "https://media.licdn.com/dms/image/C4E0BAQE7Na_mKQhIJg/company-logo_400_400/0/1633731811337/bill__melinda_gates_foundation_logo?e=1726099200&v=beta&t=LIgstVg1oR5LmBl9u1kolb_xeOqs5kX1ZTcUpaEtsE4",
            linkedInUrl: "https://www.linkedin.com/company/8736/",
            linkedInId: "8736"
          },
          {
            title: "Founder",
            companyName: "Breakthrough Energy",
            description: "",
            startEndDate: {
              start: {
                month: 1,
                year: 2015
              },
              end: null
            },
            companyLogo:
              "https://media.licdn.com/dms/image/C4D0BAQGwD9vNu044FA/company-logo_400_400/0/1630531940051/breakthrough_energy_ventures_logo?e=1726099200&v=beta&t=DIU32ElAkeY4aqcq_9uJTAhiZI-v0GoOX77409cLZRE",
            linkedInUrl: "https://www.linkedin.com/company/19141006/",
            linkedInId: "19141006"
          },
          {
            title: "Co-founder",
            companyName: "Microsoft",
            description: "",
            startEndDate: {
              start: {
                month: 1,
                year: 1975
              },
              end: null
            },
            companyLogo:
              "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_400_400/0/1630652622688/microsoft_logo?e=1726099200&v=beta&t=zueWlWXcJ4WjwGSzlUWgPOnjoAm8C2KfSIcWWHxWrGg",
            linkedInUrl: "https://www.linkedin.com/company/1035/",
            linkedInId: "1035"
          }
        ]
      },
      schools: {
        educationsCount: 2,
        educationHistory: [
          {
            degreeName: "",
            fieldOfStudy: "",
            description: null,
            linkedInUrl: "https://www.linkedin.com/company/1646/",
            schoolLogo:
              "https://media.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_400_400/0/1631318058235?e=1726099200&v=beta&t=tSGQKfAlig70DD9n2_xkYR54yBTf7K3aKsau8PMQSVM",
            schoolName: "Harvard University",
            startEndDate: {
              start: {
                month: 1,
                year: 1973
              },
              end: {
                month: 1,
                year: 1975
              }
            }
          },
          {
            degreeName: "",
            fieldOfStudy: "",
            description: null,
            linkedInUrl: "https://www.linkedin.com/company/30288/",
            schoolLogo:
              "https://media.licdn.com/dms/image/D560BAQGFmOQmzpxg9A/company-logo_400_400/0/1683732883164/lakeside_school_logo?e=1726099200&v=beta&t=cylwvrQe7Q4N8oU1hotzPfrae8yxPuzdtG1ocBSuEmA",
            schoolName: "Lakeside School",
            startEndDate: {
              start: {
                month: null,
                year: null
              },
              end: {
                month: null,
                year: null
              }
            }
          }
        ]
      },
      skills: [],
      languages: []
    },
    company: {
      linkedInId: "1035",
      name: "Microsoft",
      universalName: "microsoft",
      linkedInUrl: "https://www.linkedin.com/company/1035",
      employeeCount: 228581,
      employeeCountRange: {
        start: 10001,
        end: 1
      },
      websiteUrl: "https://news.microsoft.com/",
      tagline: null,
      description:
        "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn’t just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters.\n\nMicrosoft operates in 190 countries and is made up of more than 220,000 passionate employees worldwide.\n",
      industry: "Software Development",
      phone: null,
      specialities: [
        "Business Software",
        "Developer Tools",
        "Home & Educational Software",
        "Tablets",
        "Search",
        "Advertising",
        "Servers",
        "Windows Operating System",
        "Windows Applications & Platforms",
        "Smartphones",
        "Cloud Computing",
        "Quantum Computing",
        "Future of Work",
        "Productivity",
        "AI",
        "Artificial Intelligence",
        "Machine Learning",
        "Laptops",
        "Mixed Reality",
        "Virtual Reality",
        "Gaming",
        "Developers",
        "IT Professional"
      ],
      followerCount: 22736947,
      headquarter: {
        city: "Redmond",
        country: "US",
        postalCode: "98052",
        geographicArea: "Washington",
        street1: "1 Microsoft Way",
        street2: null
      },
      logo: "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_400_400/0/1630652622688/microsoft_logo?e=1725494400&v=beta&t=joSXHhDAEare7f9gk8MwXr2sOr84zX7HDx2h5znXEYI"
    }
  }
};

jest.mock("axios", () => ({
  get: jest.fn(
    () =>
      new Promise(resolve => {
        resolve(messageResponse);
      })
  )
}));

describe("Email enrichment", () => {
  it("should return email owner", async () => {
    const callback = jest.fn();

    await main(
      {
        fields: {
          senderEmail: "bill.gates@microsoft.com",
          senderName: "Bill Gates"
        }
      },
      callback
    );
  });

  it("should throw an error if email is not provided", async () => {
    const callback = jest.fn();

    await main({}, callback);

    expect(callback).toHaveBeenCalledWith({
      outputFields: {}
    });
  });
});
