'use strict';

const rp = require('request-promise');
const {Then} = cucumber;
const logo = $('#logo');
const saveConfButton = $('#saveConfButton');
const confirmOkButton = $('#confirmOKButton');
const confirmMsgModal = $('#confirmMsgModal');
const alertOKButton = $('#alertOKButton');
const submitModal = $('#submitModal');

Then(/^Should see the aselsan logo$/, () =>
    browser.wait(EC.visibilityOf(logo), WAIT_TIME, `${logo} taking too long to disappear in the DOM`)
);

Then(/^Click Save Configuration button$/, () =>
    browser.wait(EC.elementToBeClickable(saveConfButton), WAIT_TIME, `${saveConfButton} taking too long to appear in the DOM`)
        .then(() => saveConfButton.click())
        .then(() => browser.sleep(1000))
);

Then(/^Click confirm OK Button$/, () =>
    browser.wait(EC.visibilityOf(confirmMsgModal), WAIT_TIME, `${confirmMsgModal} taking too long to appear in the DOM`)
        .then(() => browser.executeScript("document.getElementById('confirmOKButton').click()"))
        .then(() => browser.wait(EC.invisibilityOf(confirmOkButton), WAIT_TIME, `${confirmOkButton} taking too long to disappear in the DOM`))
        .then(() => browser.sleep(1000))
);

Then(/^Click alert OK Button$/, () =>
    browser.wait(EC.visibilityOf(alertOKButton), WAIT_TIME, `${alertOKButton} taking too long to appear in the DOM`)
        .then(() => alertOKButton.click())
        .then(() => browser.wait(EC.invisibilityOf(submitModal), WAIT_TIME, `${submitModal} taking too long to disappear in the DOM`))
        .then(() => browser.sleep(1000))
);


Then(/^Should see "([^"]*)" value as "([^"]*)"/, (tableName, value) => {

    const foundLine = global.cfgFile
        .split('\n')
        .filter(line => line)
        .filter(line => line.split(' ')[0].toString().trim() === tableName)[0];

    return expect(foundLine.split(' ')[2].toString().trim()).to.equal(value);
});

Then(/^Should see "([^"]*)" value from file as "([^"]*)" for port "([^"]*)"/, async (tableName, value, portNum) => {

    const foundLines = global.cfgFile
        .split('\n')
        .filter(line => line)
        .filter(line => line.split(' ')[0].toString().trim() === tableName);

    return expect(foundLines[portNum-1].split(' ')[2].toString().trim()).to.equal(value);
});

Then(/^Wait "([^"]*)" seconds/, sec => browser.sleep(1000 * Number(sec)));

Then(/^Export configuration file$/, () => {

    const options = {
        method: 'POST',
        uri: `${global.baseUrl}management/confUpload_settings/do_copy`,
        headers: {
            'Authorization': 'Basic ZWFhYWRtaW46ZWFhYWRtaW4='
        }
    };

    return rp(options)
        .then( body => global.cfgFile = body)
        .catch(err => console.log(err));
});
