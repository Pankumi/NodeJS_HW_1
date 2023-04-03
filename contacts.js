// file "contacts.js":

const path = require("path");
const { read, write } = require("./fs");

// Файл з контактами
const directory = "db";
const filename = "contacts.json";
const contactsPath = path.resolve(__dirname, directory, filename);

// TODO: повертаю весь список контактів (приймає масив)
async function listContacts() {
  const data = await read(contactsPath);
  if (!Array.isArray(data)) {
    throw new Error("Data is not an array");
  }
  return data;
}

// TODO: повертаю контакт за id (приймає масив)
async function getContactById(contactId) {
  const data = await read(contactsPath);
  if (!Array.isArray(data)) {
    throw new Error("Data is not an array");
  }
  const dataId = data.find((el) => el.id === contactId);
  return dataId;
}

// TODO: видаляю контакт за id (приймає масив)
async function removeContact(contactId) {
    const data = await read(contactsPath);
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }
    const dataId = data.find((el) => el.id === contactId);
}

// TODO: додаю контакт
async function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

//Крок 3
// Зроби імпорт модуля contacts.js в файлі index.js та перевір працездатність функції для роботи з контактами.
