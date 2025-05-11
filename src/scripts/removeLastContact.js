import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const contacts = await fs.readFile(PATH_DB, 'utf-8');
  const parsedContacts = JSON.parse(contacts);
  parsedContacts.pop();
  fs.writeFile(PATH_DB, JSON.stringify(parsedContacts));
};

removeLastContact();
