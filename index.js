
// file "index.js":

const yargs = require('yargs/yargs'); // для зручного парса аргументів командного рядка

const { listContacts, getContactById, removeContact, addContact } = require("./contacts");

// listContacts()
// .then( data => console.log('index.js  listContacts >>', data) )

// getContactById('Z5sbDlS7pCzNsnAHLtDJd7')
// .then( data => console.log('index.js getContactById >>', data) )

// removeContact('Z5sbDlS7pCzNsnAHLtDJd7')
// .then( data => console.log('index.js removeContact >>', data) )

addContact('name', 'email', 'phone')
.then( data => console.log('index.js addContact >>', data) )





