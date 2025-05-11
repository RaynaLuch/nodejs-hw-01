import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const randomGeneratedContacts = [];
  for (let i = 0; i <= number; i++) {
    const contact = createFakeContact();
    randomGeneratedContacts.push(contact);
  }
  await writeContacts(randomGeneratedContacts);
};

generateContacts(5);
