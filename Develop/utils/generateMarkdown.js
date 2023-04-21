// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return;
  }
  return `https://img.shields.io/badge/License-${license}-lightgrey`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ${renderLicenseBadge(data.License)}

  ## Description
  ${data.Description};

  ## Table of Contents
  1. [Contributors](#contributors)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Tests](#tests)
  5. [Contact Info](#contact)

  ## Contributors
  ${data.Contributions};

  ## Installation
  ${data.Installation};

  ## Usage
  ${data.Usage};

  ## Tests
  ${data.Tests};

  ## Contact Info
  ${data.Email} ${data.GitHub};
`;
}

module.exports = generateMarkdown;
