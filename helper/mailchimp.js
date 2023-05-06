import fetch from "isomorphic-unfetch";

export default async function mailchimp({ email }) {
  try {
    const AUDIENCE_ID = "2ab14b7ef1";
    const API_KEY = "c1ef491c372d4616e80e29a95623e240-us21";
    const DATACENTER = "us21";
    // const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    // const API_KEY = process.env.MAILCHIMP_API_KEY;
    // const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `/mailchimp/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.
        Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
      });
    }

    // return res.status(201).json({ error: "" });
  } catch (error) {
    // return res.status(500).json({ error: error.message || error.toString() });
  }
}
