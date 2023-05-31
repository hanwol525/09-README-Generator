function generateMarkdown(data) {
  return `# ${data.title.toUpperCase()}
  ![License](https://img.shields.io/static/v1.svg?label=License&message=${encodeURIComponent(data.license)}&color=blue)
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
