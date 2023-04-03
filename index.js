// file "index.js":
// const fs = require("fs").promises;
// const path = require('path');
const { listContacts, getContactById, removeContact } = require("./contacts");

listContacts()
.then( data => console.log('listContacts >>', data) )

removeContact('Z5sbDlS7pCzNsnAHLtDJd')
.then( data => console.log('getContactById >>', data) )




