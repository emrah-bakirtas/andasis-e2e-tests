Technologies Covered in This Project
====================================

# Protractor
[Protractor](http://www.protractortest.org/#/) is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

#### Note
Not only Angular. Protractor gives extra advantages to test Angular apps but your app should not necessarily use it.

# Cucumber.js
[Cucumber](https://cucumber.io/) is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team.

[Cucumber.js](https://github.com/cucumber/cucumber-js) is the JavaScript implementation of Cucumber and runs on both Node.js (4 and above) and modern web browsers.

# Grunt.js
[Grunt.js](https://gruntjs.com/) is basically a build / task manager written on top of NodeJS.

# Protractor Multiple Cucumber HTML Reporter Plugin
[Protractor Multiple Cucumber HTML Reporter Plugin](https://github.com/wswebcreation/protractor-multiple-cucumber-html-reporter-plugin) will connect Protractor, CucumberJS and protractor-cucumber-framework to generate unique JSON files per feature with only a few lines of code.

Building and Running the Project
================================

## Prerequisites
There are a few things needed before you can work with Protractor. Make sure you have the latest versions of the following installed
* [Node.js](https://nodejs.org/en/download/)
* [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

#### Note
- Cucumber scenarios (in Gerkhin) are in e2e-tests/features/*.feature.
- With the 3.x or greater versions of Protractor, Cucumber is no longer included by default so you will use the custom framework option.

## Setup
1. Clone the repo
2. Install dependencies with `npm install`

## Run tests
1. Use `npm run test` to run all tests
2. Use `npm run test:smoke` to run just smoke test
