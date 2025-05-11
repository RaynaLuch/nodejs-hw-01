import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const records = JSON.parse(data.toString());

    const newRecords = records.concat(updatedContacts);
    fs.writeFile(PATH_DB, JSON.stringify(newRecords));
  } catch (err) {
    console.log(err.message);
  }
};
