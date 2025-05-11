import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const contacts = await fs.readFile(PATH_DB, 'utf-8');
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts;
};

console.log(await getAllContacts());
