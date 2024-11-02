const { main } = require("./get-conversation-api.js");
const axios = require("axios");

const messageResponse = {
  data: {
    results: [
      {
        id: "c6f5237b-ca83-47ed-9e3c-bced347064a3",
        conversationsThreadId: "8243595013",
        createdAt: "2024-10-21T11:09:16Z",
        updatedAt: "2024-10-21T11:09:22.095Z",
        createdBy: "V-101",
        client: {
          clientType: "HUBSPOT"
        },
        senders: [
          {
            actorId: "V-101",
            name: "Roman Kozak",
            senderField: "FROM",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rk@kohorta.com"
            }
          }
        ],
        recipients: [
          {
            name: "Roman Kozak",
            recipientField: "TO",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rg@gmail.com"
            }
          }
        ],
        archived: false,
        text: "Hubspot",
        richText: '<div dir="ltr">\n Hubspot \n</div>',
        attachments: [],
        subject: "Test",
        truncationStatus: "NOT_TRUNCATED",
        status: {
          statusType: "RECEIVED"
        },
        direction: "INCOMING",
        channelId: "1002",
        channelAccountId: "779894945",
        type: "MESSAGE"
      },
      {
        id: "5a7cb7bd-810d-44b8-b79c-45e6a6c44861",
        conversationsThreadId: "8243595013",
        createdAt: "2024-10-21T11:09:22.587Z",
        createdBy: "S-hubspot",
        client: {
          clientType: "SYSTEM"
        },
        senders: [
          {
            actorId: "S-hubspot"
          }
        ],
        recipients: [],
        archived: false,
        newStatus: "OPEN",
        type: "THREAD_STATUS_CHANGE"
      },
      {
        id: "f511eb3892ba4e948b1e7ad806bde1c8",
        conversationsThreadId: "8243595013",
        createdAt: "2024-10-21T11:15:11.699Z",
        updatedAt: "2024-10-21T11:15:11.799Z",
        createdBy: "A-8835724",
        client: {
          clientType: "HUBSPOT"
        },
        senders: [
          {
            actorId: "A-8835724",
            name: "Roman Kozak from App test account 10",
            senderField: "FROM",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rg@gmail.com"
            }
          }
        ],
        recipients: [
          {
            recipientField: "TO",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rk@kohorta.com"
            }
          }
        ],
        archived: false,
        text: "fthldklh",
        richText:
          '<html><head></head><body><div style="font-family: sans-serif;color: #444444;" dir="auto" data-top-level="true"><p style="margin:0;"><span style="font-size: 11pt;">fthldklh</span></p></div></body></html>',
        attachments: [],
        subject: "Re: Test",
        truncationStatus: "TRUNCATED_TO_MOST_RECENT_REPLY",
        status: {
          statusType: "SENT"
        },
        direction: "OUTGOING",
        channelId: "1002",
        channelAccountId: "779894945",
        type: "MESSAGE"
      },
      {
        id: "b2ebf776-723b-4523-bed5-6e304c865a01",
        conversationsThreadId: "8243595013",
        createdAt: "2024-10-21T11:15:12.063Z",
        createdBy: "A-8835724",
        client: {
          clientType: "SYSTEM"
        },
        senders: [
          {
            actorId: "S-hubspot"
          }
        ],
        recipients: [],
        archived: false,
        assignedTo: "A-8835724",
        type: "ASSIGNMENT"
      },
      {
        id: "be066bfd-d0f2-43b1-8f5d-5de8a905f834",
        conversationsThreadId: "8243595013",
        createdAt: "2024-10-21T11:20:28Z",
        updatedAt: "2024-10-21T11:20:31.650Z",
        createdBy: "V-101",
        client: {
          clientType: "HUBSPOT"
        },
        senders: [
          {
            actorId: "V-101",
            name: "Roman Kozak",
            senderField: "FROM",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rk@kohorta.com"
            }
          }
        ],
        recipients: [
          {
            name: "Roman Kozak",
            recipientField: "TO",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rg@gmail.com"
            }
          }
        ],
        archived: false,
        text: "Reply\n\n",
        richText: '<div dir="ltr">\n Reply \n</div> \n<br>',
        attachments: [],
        subject: "Re: Test",
        truncationStatus: "TRUNCATED_TO_MOST_RECENT_REPLY",
        status: {
          statusType: "RECEIVED"
        },
        direction: "INCOMING",
        channelId: "1002",
        channelAccountId: "779894945",
        type: "MESSAGE"
      },
      {
        id: "dc358e41-8155-4beb-8be1-25006c4130ad",
        conversationsThreadId: "8243595013",
        createdAt: "2024-10-21T11:38:33Z",
        updatedAt: "2024-10-21T11:38:38.847Z",
        createdBy: "V-101",
        client: {
          clientType: "HUBSPOT"
        },
        senders: [
          {
            actorId: "V-101",
            name: "Roman Kozak",
            senderField: "FROM",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rk@kohorta.com"
            }
          }
        ],
        recipients: [
          {
            name: "Roman Kozak",
            recipientField: "TO",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rg@gmail.com"
            }
          }
        ],
        archived: false,
        text: "Fhbvv\n\nRoman Kozak\n\nManaging Partner\n\nKohorta Studio\nrk@kohorta.com\nhttps://kohorta.co/\n[image: twitter] <https://twitter.com/romangruit>\n[image: linkedin] <https://www.linkedin.com/in/roman-kozak-25710046/>\nCheck Absolut — our latest HubSpot theme <https://absolut.kohorta.co/>\n\n\n",
        richText:
          '<div dir="auto">\n Fhbvv \n<br clear="all"> \n<br clear="all"> \n<div> \n<div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"> \n<div dir="ltr"> \n<table cellpadding="0" cellspacing="0" style="font-size:medium;vertical-align:-webkit-baseline-middle;font-family:Arial;color:rgba(0,0,0,0.87)"> \n<tbody style="font-family:Arial"> \n<tr style="font-family:Arial"> \n<td style="font-family:Arial"> \n<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial"> \n<tbody style="font-family:Arial"> \n<tr style="font-family:Arial"> \n<td style="vertical-align:top;font-family:Arial"><h3 color="#222226" style="margin:0px;font-size:18px;font-family:Arial;color:rgb(34,34,38)">Roman&nbsp;Kozak</h3><p color="#222226" style="margin:0px;font-size:14px;line-height:22px;font-family:Arial;color:rgb(34,34,38)">Managing Partner</p><p color="#222226" style="margin:0px;font-size:14px;line-height:22px;font-family:Arial;color:rgb(34,34,38)">Kohorta Studio</p> \n<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial;width:132.234px"> \n<tbody style="font-family:Arial"> \n<tr style="font-family:Arial"> \n<td height="30" style="font-family:Arial"></td> \n</tr> \n<tr style="font-family:Arial"> \n<td color="#222226" height="1" style="width:132.234px;border-bottom-width:1px;border-bottom-style:solid;border-left-width:medium;border-left-style:none;display:block;font-family:Arial;border-bottom-color:rgb(34,34,38);border-left-color:currentcolor"></td> \n</tr> \n<tr style="font-family:Arial"> \n<td height="30" style="font-family:Arial"></td> \n</tr> \n</tbody> \n</table> \n<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial"> \n<tbody style="font-family:Arial"> \n<tr height="25" style="vertical-align:middle;font-family:Arial"> \n<td width="30" style="vertical-align:middle;font-family:Arial"> \n<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial"> \n<tbody style="font-family:Arial"> \n<tr style="font-family:Arial"> \n<td style="vertical-align:bottom;font-family:Arial"><span color="#222226" width="11" style="display:block;font-family:Arial;background-color:rgb(34,34,38)"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#222226" width="13" style="display: block; font-family: Arial;"></span></td> \n</tr> \n</tbody> \n</table></td> \n<td style="padding:0px;font-family:Arial"><a href="mailto:rk@kohorta.com" color="#222226" style="font-size:12px;font-family:Arial;color:rgb(34,34,38)" target="_blank">rk@kohorta.com</a></td> \n</tr> \n<tr height="25" style="vertical-align:middle;font-family:Arial"> \n<td width="30" style="vertical-align:middle;font-family:Arial"> \n<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial"> \n<tbody style="font-family:Arial"> \n<tr style="font-family:Arial"> \n<td style="vertical-align:bottom;font-family:Arial"><span color="#222226" width="11" style="display:block;font-family:Arial;background-color:rgb(34,34,38)"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#222226" width="13" style="display: block; font-family: Arial;"></span></td> \n</tr> \n</tbody> \n</table></td> \n<td style="padding:0px;font-family:Arial"><a href="https://kohorta.co/" color="#222226" style="font-size:12px;font-family:Arial;color:rgb(34,34,38)" target="_blank">https://kohorta.co/</a></td> \n</tr> \n</tbody> \n</table></td> \n<td width="45" style="font-family:Arial"> \n<div style="font-family:Arial"></div></td> \n<td style="vertical-align:top;font-family:Arial"> \n<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial"> \n<tbody style="font-family:Arial"> \n<tr style="font-family:Arial"> \n<td style="font-family:Arial"><img width="130" style="max-width: 130px; display: block; font-family: Arial;" src="https://ci3.googleusercontent.com/mail-sig/AIorK4wnvBNdpBimY5MkdO6IkvJlpCxxOBO3rx5LxrOPF0fA9UhI5KkCZm0RDKoq1lRMnN_XRKrMW1Nzg2BQ"></td> \n</tr> \n<tr style="font-family:Arial"> \n<td height="30" style="font-family:Arial"></td> \n</tr> \n<tr style="font-family:Arial"> \n<td style="text-align:center;font-family:Arial"> \n<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial;display:inline-block"> \n<tbody style="font-family:Arial"> \n<tr style="font-family:Arial"> \n<td style="font-family:Arial"><a href="https://twitter.com/romangruit" color="#222226" style="display:inline-block;padding:0px;font-family:Arial;background-color:rgb(34,34,38)" target="_blank"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#222226" height="24" style="max-width: 135px; display: block; font-family: Arial;"></a></td> \n<td width="5" style="font-family:Arial"> \n<div style="font-family:Arial"></div></td> \n<td style="font-family:Arial"><a href="https://www.linkedin.com/in/roman-kozak-25710046/" color="#222226" style="display:inline-block;padding:0px;font-family:Arial;background-color:rgb(34,34,38)" target="_blank"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#222226" height="24" style="max-width: 135px; display: block; font-family: Arial;"></a></td> \n<td width="5" style="font-family:Arial"> \n<div style="font-family:Arial"></div></td> \n</tr> \n</tbody> \n</table></td> \n</tr> \n</tbody> \n</table></td> \n</tr> \n</tbody> \n</table></td> \n</tr> \n<tr style="font-family:Arial"> \n<td height="30" style="font-family:Arial"></td> \n</tr> \n<tr style="font-family:Arial"> \n<td style="font-family:Arial"><span style="display:block;font-family:Arial"><a rel="noopener noreferrer" href="https://absolut.kohorta.co/" color="#278761" style="border-width:6px 12px;border-style:solid;display:inline-block;font-weight:700;text-align:center;line-height:40px;font-size:12px;border-radius:3px;font-family:Arial;background-color:rgb(39,135,97);border-color:rgb(39,135,97);color:rgb(255,255,255)" target="_blank">Check Absolut — our latest HubSpot theme</a></span></td> \n</tr> \n</tbody> \n</table> \n</div> \n</div> \n</div> \n</div> \n<div> \n<br> \n</div> \n<div> \n<br> \n</div>',
        attachments: [],
        subject: "Re: Test",
        truncationStatus: "TRUNCATED_TO_MOST_RECENT_REPLY",
        status: {
          statusType: "RECEIVED"
        },
        direction: "INCOMING",
        channelId: "1002",
        channelAccountId: "779894945",
        type: "MESSAGE"
      },
      {
        id: "66a8e3e68ba746ed8aeb0efa3c129683",
        conversationsThreadId: "8243595013",
        createdAt: "2024-10-21T11:39:29.389Z",
        updatedAt: "2024-10-21T11:39:29.505Z",
        createdBy: "A-8835724",
        client: {
          clientType: "HUBSPOT"
        },
        senders: [
          {
            actorId: "A-8835724",
            name: "Roman Kozak from App test account 10",
            senderField: "FROM",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rg@gmail.com"
            }
          }
        ],
        recipients: [
          {
            recipientField: "TO",
            deliveryIdentifier: {
              type: "HS_EMAIL_ADDRESS",
              value: "rk@kohorta.com"
            }
          }
        ],
        archived: false,
        text: "ygugyggkkgugkgkj",
        richText:
          '<html><head></head><body><div style="font-family: sans-serif;color: #444444;" dir="auto" data-top-level="true"><p style="margin:0;"><span style="font-size: 11pt;">ygugyggkkgugkgkj</span></p><br></div></body></html>',
        attachments: [],
        subject: "Re: Test",
        truncationStatus: "TRUNCATED_TO_MOST_RECENT_REPLY",
        status: {
          statusType: "SENT"
        },
        direction: "OUTGOING",
        channelId: "1002",
        channelAccountId: "779894945",
        type: "MESSAGE"
      }
    ]
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

describe("Tread retrieval", () => {
  it("should throw an error if threadId is not provided", async () => {
    const callback = jest.fn();

    await main({}, callback);

    expect(callback).toHaveBeenCalledWith({
      outputFields: {
        isMessage: false
      }
    });
  });

  it("should throw an error if no messages are found", async () => {
    const callback = jest.fn();

    axios.get.mockResolvedValue({
      data: {
        results: []
      }
    });

    await main({ fields: { hs_thread_id: "123" } }, callback);

    expect(callback).toHaveBeenCalledWith({
      outputFields: {
        isMessage: false
      }
    });
  });

  it("should return the first incoming message", async () => {
    const callback = jest.fn();

    axios.get.mockResolvedValue(messageResponse);

    await main({ fields: { hs_thread_id: "123" } }, callback);

    expect(callback).toHaveBeenCalledWith({
      outputFields: {
        isMessage: true,
        message: messageResponse.data.results[0].text,
        emailSubject: "Test",
        isSenderName: true,
        senderName: messageResponse.data.results[0].senders[0].name,
        isSenderEmail: true,
        senderEmail:
          messageResponse.data.results[0].senders[0].deliveryIdentifier.value
      }
    });
  });
});
