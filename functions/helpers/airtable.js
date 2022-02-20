const Airtable = require("airtable");
/** THIS IS YOUR SERVERLESS FUNCTION */
exports.handler = function(event, context, callback) {
  //pull the required information from your environment variables, which can be set in the Netlify UI
  const {API_URL, API_CLIENT_ID, API_KEY } = process.env;

  // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  }

  // CONFIGURE YOUR AIRTABLE BASE CONNECTION
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  const base = Airtable.base(API_CLIENT_ID);

  /**
   AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
   REFERENCE YOUR BASE-SPECIFIC API
   */
  const data = JSON.parse(event.body);

  base('Recruiters').create({
    "Name": data.name,
    "Phone": data.Phone,
    "Email": data.email,
    "Message": data.message,
    "Question": data.select
  }, function(err, record) {
    if (err) {
      console.error(err);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(err)
      })
    }
    console.log(record.getId());
    send(record.getId());
  });

}
// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);

// To get minified records array
const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, minifyItems, getMinifiedItem };