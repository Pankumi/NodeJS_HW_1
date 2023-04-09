// file "index.js":

const argv = require("yargs").argv; // для зручного парса аргументів командного рядка

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

console.log("process.argv >>", process.argv); // містить масив з аргументів які були передані при запуску процесу
console.log("argv >>", argv);

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((data) =>
        console.log("index.js  listContacts >>", data)
      ); // cli: node index.js --action list
      break;

    case "get":
      getContactById(id).then((data) =>
        console.log("index.js getContactById >>", data)
      ); // cli: node index.js --action get --id rsKkOQUi80UsgVPCcLZZW
      break;

    case "add":
      addContact(name, email, phone).then((data) =>
        console.log("index.js addContact >>", data)
      ); // cli: node index.js --action add --name Vasil --email Vasil@gmail.com --phone 0123456789
      break;

    case "remove":
      removeContact(id).then((data) =>
        console.log("index.js removeContact >>", data)
      ); // cli: node index.js --action remove --id 0511e36e7ee6fe1362fd
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
