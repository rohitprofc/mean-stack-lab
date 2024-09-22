// Experiment 4
const fs = require("fs");

// Read users.json, add new user, and write back to the file
fs.readFile("users.json", (err, data) => {
  if (err) throw err;
  const users = JSON.parse(data);

  // Defining new user
  const user = {
    name: "Rohit",
    age: 20,
    language: ["PHP", "Python", "JavaScript"]
  };

  users.push(user);

  fs.writeFile("users.json", JSON.stringify(users), err => {
    if (err) throw err;
    console.log("Done writing"); // Success
  });
});