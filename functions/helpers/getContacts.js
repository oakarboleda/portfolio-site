const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async (event) => {
  try {
    const contacts = await table.select().firstPage();
    const formattedContacts = contacts.map((contacts) => ({
      id: contacts.id,
      ...contacts.fields,
    }));
    return formattedReturn(200, formattedContacts);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {msg: 'Something went wrong'});
  }
};