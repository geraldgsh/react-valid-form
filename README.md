# react-valid-form
React

### Snapshot

![](https://github.com/geraldgsh/react-valid-form/blob/development/src/assets/images/screenshot.JPG?raw=true)

### Introduction.

A React sign up form that makes API calls with dynamic validator.

### Tools

* Node.js
* React
* React-DOM
* React-Create-App
* npm
* CSS
* ES6
* Webpack
* SweetAlert2

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Please do the following **steps in this order**:


#### Set-up ESlint in your local env - it will help you to find style errors

Go project folder using WSL environment and initiate NPM with following command

```sh
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (react-valid-form)
version: (1.0.0)
description: Bookstore Application
entry point: (webpack.config.js) src/index.js
test command:
git repository: (https://github.com/geraldgsh/react-valid-form.git)
keywords:
author: Gerald Goh
license: (ISC)
About to write to /package.json:

{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/geraldgsh/react-valid-form.git"
  },
  "author": "Gerald Goh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/geraldgsh/react-valid-form/issues"
  },
  "homepage": "https://github.com/geraldgsh/react-valid-form#readme"
}
```

Command above will generate a "package.json" file for ESlint work off from.

Install ESlint with following command

1. Run `npm install eslint eslint-config-airbnb --save-dev` (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

2. Run `npx eslint --init`.

3. Make sure you select the following options when prompted.

    `? How would you like to use ESLint?` To check syntax, find problems, and enforce code style

    `? What type of modules does your project use?` JavaScript modules (import/export)

    `? Which framework does your project use?`  React

    `? Does your project use Typescript`  No

    `? Where does your code run?`     Browser

    `? How would you like to define a style for your project?` Use a popular style guide

    `? Which style guide do you want to follow?`      Airbnb

    `? What format do you want your config file to be in?`       JSON

    `The config that you've selected requires the following dependencies: ? Would you like to install them now with npm?`       Yes

4. Copy the contents of [.eslintrc.json](./.eslintrc.json) to the newly generated `.eslintrc.json` overwritting the previous content.

5. **Do not make any changes in config files - they represent style guidelines that you share with your tem - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.

6. Double check your `./src` folder for any extra unnecesary `.eslint` config files that might have been generated as this might cause an issue with stickler when you create your Pull Request later on.

7. Run `npx eslint .`.

8. Fix linter errors.

9. **IMPORTANT NOTE**: feel free to research [auto-correct options for ESlint](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

## Troubleshooting

1. All config files are in my repo but Stickler does not work.

   - Make sure that Stickler app has permission to access your repository. Find Stickler here https://github.com/settings/installations and check its configuration.

   ![screenshot](https://github.com/microverseinc/linters-config/blob/master/assets/images/stickler_app_config.png)

   - Try to add a new commit to your Pull Request. Stickler should detect changes in your repo and start checking your code.

2. `while scanning for the next token found character '\t' that cannot start any token` error.
   - Please make sure that you used spaces not tabs for indentation.

3. Check if someone else has had similar problem before [here](https://questions.microverse.org/c/linters-stickler).
   Please make sure that you used spaces not tabs for indentation.

4. Stickler does not work and nothing helps 💥 - run eslint in your local env and correct all errors. **Remember to let your Code Reviewer know that you had problems with Stickler and you used linter in local env.**

### Future Features

* Channels

### To begin

1. Clone Repo
2. 'npm install' to install dependencies
3. `yarn start` or 'npm start' on terminal
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/react-valid-form/wiki) for more details. 

#### Live Demo
[Demo](https://react-valid-form.netlify.com)

#### Getting Started
Clone repo and open index.html with your favorite browser.

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source

[Link](https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/)
[Link](https://github.com/Dunebook/Firebase-auth-chat-app/)

### Github Repo
https://github.com/geraldgsh/react-valid-form

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://twitter.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/
react-valid-form/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.