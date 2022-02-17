const formattedReturn = require('./helpers/formattedReturn');
const createContact = require('./helpers/createContact');
const getContacts = require('./helpers/getContacts');

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await getContacts(event);
  } else if (event.httpMethod === 'POST') {
    return await createContact(event);
  } else {
    return formattedReturn(405, {});
  }
};