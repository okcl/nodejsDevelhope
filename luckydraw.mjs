import * as fs from "node:fs"

const filename = 'example.txt';
const content = 'Hello, world!';

fs.writeFile(filename, content, (err) => {
  if (err) {
    console.error('An error occurred:', err);
  } else {
    console.log(`Successfully wrote to ${filename}`);
  }
});