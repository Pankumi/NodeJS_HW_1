// const fs = require("fs").promises;
const path = require('path');
const { read, write } = require("./export");

const directory ="db";
const filename = "contacts.json";
const contactsPath = path.resolve(__dirname, directory, filename);

// console.log("index >>");

// readFile() і writeFile()
const data = read(contactsPath)
.then( (data)=>{
    console.log(data);
});
