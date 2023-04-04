// file "contacts.js":

const path = require("path");
const crypto = require('crypto');
const { read, write } = require("./fs");

// Файл з контактами
const directory = "db";
const filename = "contacts.json";
const contactsPath = path.resolve(__dirname, directory, filename);

// TODO: повертаю весь список контактів (запит за масивом)
async function listContacts() {
    const data = await read(contactsPath);
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }
    return data;
  }
  
  // TODO: повертаю контакт за id (запит за масивом)
  async function getContactById(contactId) {
    const data = await read(contactsPath);
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }
    const dataId = data.find((el) => el.id === contactId);
    return dataId;
  }
  
  // TODO: видаляю контакт за id (запит за масивом)
  async function removeContact(contactId) {
    const data = await read(contactsPath);
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }
    const newData = data.filter((el) => el.id !== contactId);
    const returnData = await write(contactsPath, newData);
    return returnData;
  }

// TODO: додаю контакт
async function addContact(name, email, phone) {
    const data = await read(contactsPath);
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }

    const randomString = crypto.randomBytes(10).toString('hex');
    const newContact = {
        "id": randomString,
        "name": name,
        "email": email,
        "phone": phone
      }

    const newData = [...data, newContact];
    const returnData = await write(contactsPath, newData);
    return returnData;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

