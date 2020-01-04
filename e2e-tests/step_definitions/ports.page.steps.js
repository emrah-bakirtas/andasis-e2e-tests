'use strict';

const {Given, When, Then} = cucumber;
const navBarPorts = $('#navbarPorts');
const menuManagement = $('#menuMNG');
const ipAddressFirstField = $('#InputIp1');
const ipAddressSecondField = $('#InputIp2');
const ipAddressThirdField = $('#InputIp3');
const ipAddressFourthField = $('#InputIp4');
const subnetMask = $('#InputSubnet');
const gateWayFirstField = $('#InputGateway1');
const gateWaySecondField = $('#InputGateway2');
const gateWayThirdField = $('#InputGateway3');
const gateWayFourthField = $('#InputGateway4');
const ipApplyButton = $('#ipApplyButton');
const submitIpButton = $('#submitIp');
const changeIpModal = $('#changeIpModal');

Given(/^Click Ports option of navigation bar$/, () => navBarPorts.click());

When(/^Click Management Port option of the Ports/, () =>
    browser.wait(EC.visibilityOf(menuManagement), WAIT_TIME, `${menuManagement} taking too long to appear in the DOM`)
        .then(() => menuManagement.click()));

Then(/^Type IP address as "([^"]*)"/, async ipAddress => {

    const addresses = await ipAddress.split('.');
    await ipAddressFirstField.clear().sendKeys(addresses[0])
        .then(() => ipAddressSecondField.clear().sendKeys(addresses[1].toString()))
        .then(() => ipAddressThirdField.clear().sendKeys(addresses[2].toString()))
        .then(() => ipAddressFourthField.clear().sendKeys(addresses[3].toString()));

    return global.baseUrl = `http://${ipAddress}/`;
});

Then(/^Type Mask as "([^"]*)"/, subnetMaskValue => subnetMask.clear().sendKeys(subnetMaskValue));

Then(/^Type Default Gateway as "([^"]*)"/, async defaultGateway => {

    const addresses = await defaultGateway.split('.');
    return gateWayFirstField.clear().sendKeys(addresses[0])
        .then(() => gateWaySecondField.clear().sendKeys(addresses[1].toString()))
        .then(() => gateWayThirdField.clear().sendKeys(addresses[2].toString()))
        .then(() => gateWayFourthField.clear().sendKeys(addresses[3].toString()));
});

Then(/^Click IP Settings Apply button/, () => ipApplyButton.click());

Then(/^Should see "([^"]*)" as "([^"]*)" on the opened pop-up/, (label, value) => {

    const element = $(`#${label}`);
    return browser.wait(EC.visibilityOf(element), WAIT_TIME, `${element} taking too long to appear in the DOM`)
        .then(() => element.getText().then(text => expect(text).to.equal(value)));
});

Then(/^Click IP Settings OK Button on the opened pop-up/, () =>
    submitIpButton.click()
        .then(() => browser.wait(EC.invisibilityOf(submitIpButton), WAIT_TIME, `${submitIpButton} taking too long to disappear in the DOM`))
        .then(() => browser.wait(EC.invisibilityOf(changeIpModal), WAIT_TIME, `${changeIpModal} taking too long to disappear in the DOM`))
);

Then(/^Should see IP Address as "([^"]*)"/, async ipAddress => {

    const addresses = await ipAddress.split('.');
    return browser.wait(EC.visibilityOf(ipAddressFirstField), WAIT_TIME, `${ipAddressFirstField} taking too long to appear in the DOM`)
        .then(() => ipAddressFirstField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[0]))
        .then(() => ipAddressSecondField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[1]))
        .then(() => ipAddressThirdField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[2]))
        .then(() => ipAddressFourthField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[3]));
});

Then(/^Should see Subnet Mask as "([^"]*)"/, subnetMaskValue =>
    subnetMask.getAttribute('value').then(value => expect(value).to.equal(subnetMaskValue))
);

Then(/^Should see Default Gateway as "([^"]*)"/, async ipAddress => {

    const addresses = await ipAddress.split('.');
    return browser.wait(EC.visibilityOf(gateWayFirstField), WAIT_TIME, `${gateWayFirstField} taking too long to appear in the DOM`)
        .then(() => gateWayFirstField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[0]))
        .then(() => gateWaySecondField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[1]))
        .then(() => gateWayThirdField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[2]))
        .then(() => gateWayFourthField.getAttribute('value'))
        .then(value => expect(value).to.equal(addresses[3]));
});
