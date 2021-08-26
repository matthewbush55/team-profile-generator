// bring in required libraries
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");

// main function that will generate the dynamic HTML page
// bring in teamMembers array created from asking the questions
function generateHTML(teamMembers) {
  //iterate through each of the objects in the teamMembers array and create new filtered arrays based on the role
  const filterManager = teamMembers.filter((emp) => emp.getRole() === "Manager");
  const filterEngineer = teamMembers.filter((emp) => emp.getRole() === "Engineer");
  const filterIntern = teamMembers.filter((emp) => emp.getRole() === "Intern");

  // chunk HTML for EACH manager object in the filtered array from above
  const managerCard = filterManager.map((item) => {
    return `      
    <div class="col-4 employee-card mb-4">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">${item.name}</h2>
          <h3 class="card-title">
            <i class="fas fa-mug-hot mr-2"></i>
            ${item.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${item.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${item.email}">${item.email}</a></li>
            <li class="list-group-item">Office: ${item.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  });

  // chunk HTML for EACH engineer object in the filtered array from above
  const engineerCard = filterEngineer.map((item) => {
    return `        
    <div class="col-4 employee-card mb-4">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">${item.name}</h2>
          <h3 class="card-title">
            <i class="fas fa-glasses mr-2"></i>
            ${item.getRole()}
          </h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: <a href="mailto:${item.email}">${item.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${item.github} "target="_blank">${
      item.github
    }</a>
          </ul>
        </div>
      </div>
    </div>
    `;
  });

  // chunk HTML for EACH intern object in the filtered array from above
  const internCard = filterIntern.map((item) => {
    return ` 
    <div class="col-4 employee-card mb-4">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">${item.name}</h2>
          <h3 class="card-title">
             <i class="fas fa-user-graduate mr-2"></i>
             ${item.getRole()}
          </h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: <a href="mailto:${item.email}">${item.email}</a></li>
            <li class="list-group-item">School: ${item.school}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  });

  let html = "";

  // concatinate all constructed HTML objects for EACH HTML chunk from above
  const htmlManager = managerCard.forEach((element) => {
    html += element;
  });

  const htmlEngineer = engineerCard.forEach((element) => {
    html += element;
  });

  const htmlIntern = internCard.forEach((element) => {
    html += element;
  });

  // build boilerplate HTML and required links, scripts, etc
  const renderHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Site</title>
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="style.css" />
      </head>

      <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>

        <main class="container d-flex flex-wrap justify-content-center">
            ${html}
        </main>
      </body>`;

  // write the rendered HTML to a file
  fs.writeFile("./dist/index.html", renderHTML, (err) => {
    err ? console.log(err) : console.log("HTML file created");
  });
}
module.exports = generateHTML;
