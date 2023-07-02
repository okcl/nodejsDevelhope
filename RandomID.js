const crypto = require('crypto');
const id = crypto.randomBytes(16).toString("hex");
console.log(`Your random generated id: ${id}`);