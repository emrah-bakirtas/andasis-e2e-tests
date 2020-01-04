'use strict';

const {Given, When, Then} = cucumber;
const navbarSystemTools = $('#navbarSystemTools');
const menuReboot = $('#rebootButton');
const submitModal = $('#submitModal');
const navbarSystemToolsDown = $('#systemToolsi.fa-angle-down');
const menuRestore = element(by.xpath('//*[@id="systemTools"]/li[9]/a'));

Given(/^Click System Tools option of navigation bar$/, () =>
    browser.wait(EC.invisibilityOf(submitModal), WAIT_TIME, `${submitModal} taking too long to disappear in the DOM`)
        .then(() => navbarSystemToolsDown.isPresent())
        .then(status => status ? navbarSystemTools.click() : null)
);

When(/^Click Restore option of the System Tools$/, () => browser.executeScript('arguments[0].click()', menuRestore));

When(/^Click Reboot option of the System Tools$/, () => browser.executeScript('arguments[0].click()', menuReboot));
