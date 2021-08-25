// bring in required libraries
const fs = require("fs");
//used to create HTML content based on user input

function writeToFile(data) {
  fs.writeFile("./dist/index.html", data, (err) => {
    err ? console.log(err) : console.log("HTML file created");
  });
}

function generateHTML(data) {}

module.exports = generateHTML;
