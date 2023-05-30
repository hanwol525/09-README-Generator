// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.toUpperCase()}
## Description:
  <span id="description">${data.description}</span>
## Table of Contents:
  <ol>
    <li><a href="#description">Description</a>
    <li><a href="#installation">Installation Instructions</a>
    <li><a href="#usage">Usage</a>
    <li><a href="#license">License</a>
    <li><a href="#contributing">Contribution Guidelines</a>
    <li><a href="#tests">Tests</a>
    <li><a href="#contact">Contact Me</a>
    </ol>

## <span id="installation">Installation Guidelines:</span>
  ${data.installation}
## <span id="usage">Usage:</span>
  ${data.usage}
## <span id="license">License:</span>
  ${data.license}
## <span id="contributing">Contributing:</span>
  ${data.contributing}
## <span id="tests">Tests:</span>
  ${data.tests}
## <span id="contact">Questions:</span>
  For any additional questions, please contact me! You can reach me via:
  <ul>
    <li> Github: <a href="https://github.com/${data.github}">${data.github}</a>
    <li> Email: <a href="mailto:${data.email}">${data.email}</a>
  </ul>
`;
}

module.exports = generateMarkdown;
