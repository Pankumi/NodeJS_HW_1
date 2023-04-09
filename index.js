// const yargs = require("yargs"); // для зручного парса аргументів командного рядка
const { Command } = require("commander");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const program = new Command(); // commander_1: створюємо новий екземпляр об'єкта Command:
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone"); // commander_2: викликаємо метод option() для додавання опцій командного рядка.

program.parse(process.argv); // commander_3: викликаємо метод parse() з об'єктом process.argv Цей метод отримує масив аргументів командного рядка, які були передані при запуску програми, та парсить їх за допомогою визначених нами опцій.

const argv = program.opts(); // commander_4: викликаючи метод opts() отримуємо об'єкт, який містить значення всіх опцій.
// const argv = yargs.argv; // для використання yargs

// TODO: викликаєю відповідний метод з файлу contacts.js передаючи йому необхідні аргументи.
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((data) =>
        console.log("index.js  listContacts >>", data)
      );
      break;

    case "get":
      getContactById(id).then((data) =>
        console.log("index.js getContactById >>", data)
      );
      break;

    case "add":
      addContact(name, email, phone).then((data) =>
        console.log("index.js addContact >>", data)
      );
      break;

    case "remove":
      removeContact(id).then((data) =>
        console.log("index.js removeContact >>", data)
      );
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
