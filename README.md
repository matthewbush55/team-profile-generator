# Team Generator

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description

This command-line application allows users to dynamically create an HTML page containing employee cards with information about their role, id, email, github account, and school. It uses `node.js`, `JavaScript`, and various node modules to prompt the user for answers to questions and create/save the content. It also runs a suite of tests against the functions using `Jest` to ensure that the application will do as it is intended.

![Walkthrough](assets/images/walkthrough.gif)

[Link to walkthrough video](https://drive.google.com/file/d/1OCKAFaRqlBljFv3ILkwn5b6qZ1NP6GKC/view)

## Installation

To install necessary dependencies, run the following command:

    npm install

## Usage

First, run `node index.js` in the shell window to start the application. It will then prompt you to provide answers to questions that will be used to generate the HTML file. The application takes the user's input and dynamically generates an HTML page based on the number of employees the user creates. The page is styled and mobile-responsive for a visually appealing webite. After the final question is answered, a file named "index.html" is generated using the `fs` library and saved into the project's `/dist` directory.

## Tests

To perform tests, run the following command:

    npm test

## Contributing

To contribute to this project (or any others), please contact me using the information in the Questions section below or by submitting a pull request.

> For more information on project contribution guidelines, please reference [Contributor Covenant](https://www.contributor-covenant.org/)

## Questions?

If you have any questions, please feel free to reach out. Thanks!

GitHub: https://github.com/matthewbush55

Email: matthewbush55@gmail.com
