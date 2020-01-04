'use strict';

const {Given} = cucumber;

Given(/^Go to the app$/, () => browser.get(global.baseUrl));
