// file "index.js":
// const fs = require("fs").promises;
// const path = require('path');
const { listContacts, getContactById } = require("./contacts");

listContacts()
.then( data => console.log('listContacts >>', data) )

getContactById('Z5sbDlS7pCzNsnAHLtDJd')
.then( data => console.log('getContactById >>', data) )




