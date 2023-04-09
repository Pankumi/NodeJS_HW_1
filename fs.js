const fs = require("fs").promises;

const read = async (way) => {
  try {
    const fileData = await fs.readFile(way, "utf-8");
    return JSON.parse(fileData);
  } catch (err) {
    console.error(err);
    return null;
  }
};

const write = async (way, content) => {
  contentJson = JSON.stringify(content);
  try {
    const fileData = await fs.writeFile(way, contentJson, "utf-8");
    return content;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = {
  read,
  write,
};
