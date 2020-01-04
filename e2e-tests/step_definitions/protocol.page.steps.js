'use strict';

const {Given, When, Then} = cucumber;
const navBarProtocols = $('#navbarProtocols');
const menuVLAN = $('#menuVLAN');
const menuSTP = $('#menuSTP');
const menuIGMP = $('#menuIGMP');
const addButton = $('#myTitleBtn > button');
const disabledButton = element(by.xpath('//input[@id="vlanModeChcBox"]/following-sibling::div/label[2]'));
const updateButton = $('#edit1qTable');
const updateOkButton = $('#vlan8021qEdit');
const applyButton = $('#submitVlan8021q');
const gvrpCheckBox = $('#gvrpCB');
const mangVlanId = $('#mangVid');
const vlan8021QArea = $('#Vlan8021Q');
const enabledButton = element(by.xpath('//input[@id="vlanModeChcBox"]/following-sibling::div/label[1]'));
const stpModeSelectBox = $('#stpMode');
const devicePriorityField = $('#stpBridgePriority');
const maxAgeField = $('#stpBridgeMaxAge');
const packageIntervalField = $('#stpBridgeHelloTime');
const forwardingDelayField = $('#stpBridgeFDelay');
const mstpRegionNameField = $('#mstpRegionName');
const mstpRevisionNumberField = $('#mstpRevisionNumber');
const mstpMaxHopsField = $('#mstpMaxHops');
const stpApplyButton = $('#stpSubmitAll');
const stpPortSettingsTab = $('#btnStpPortSettings');
const stpPortInfoTab = $('#btnStpPortStatus');
const stpModal = $('#stpModal');
const pathCostField = $('#pathCost');
const portPriorityField = $('#portPriority');
const adminP2PSelectBox = $('#adminP2P');
const adminEdgeSelectBox = $('#adminEdge');
const autoEdgeSelectBox = $('#autoEdge');
const bpduGuardSelectBox = $('#bpduGuard');
const bpduFilterSelectBox = $('#bpduFilter');
const rootGuardSelectBox = $('#rootGuard');
const stpUpdateOKButton = $('#stpPortConfigAdd');
const snoopingVersionSelectBox = $('#igmpSnoopingMode');
const querierStateSelectBox = $('#igmpQuerierState');
const mldQuerierStateSelectBox = $('#mldQuerierState');
const queryIntervalField = $('#igmpQueryInterval');
const mldQueryIntervalField = $('#mldIntervalRow > input#mldQueryInterval');
const mldCheckbox = $('input#mldSnoopingMode');
const igmpApplyButton = $('#igmpSubmit');
const value = {
    Open: '1',
    Close: '2',
    Auto: '3'
};

const textMap = {
    Open: 'Açık',
    Close: 'Kapalı',
    Enabled: 'Açık',
    Disabled: 'Kapalı',
    Auto: 'Otomatik',
    STP: 'STP',
    RSTP: 'RSTP',
    MSTP: 'MSTP',
    IGMPV2: 'IGMP v2',
    IGMPV3: 'IGMP v3'
};

Given(/^Click Network option of navigation bar$/, () => navBarProtocols.click());

When(/^Click VLAN option of the Protocols$/, () => menuVLAN.click());

When(/^Click STP option of the Protocols$/, () => menuSTP.click());

When(/^Click IGMP option of the Protocols$/, () => menuIGMP.click());

Then(/^Click add button to add port based$/, () => addButton.click());

Then(/^Click disabled button to enable$/, () => disabledButton.click());

Then(/^Click update button$/, () => updateButton.click());

Then(/^Select Connection Type "([^"]*)" for Port "([^"]*)"$/, (connType, portNum) => {

    const linkTypeEdit = $(`#linkTypeEdit${portNum}`);
    return browser.wait(EC.visibilityOf(linkTypeEdit), WAIT_TIME, `${linkTypeEdit} taking too long to appear in the DOM`)
        .then(() => {
            linkTypeEdit.click();
            return element(by.xpath(`//select[@id='linkTypeEdit${portNum}']/option[text()='${connType}']`)).click();
        });
});

Then(/^Type Untagged Vid "([^"]*)" for Port "([^"]*)"$/, (untaggedVid, portNum) =>
    $(`#untaggedVid${portNum}`).clear().sendKeys(untaggedVid)
);

Then(/^Check Discard Tagged for Port "([^"]*)"$/, portNum => $(`#discardTagged${portNum}`).click());

Then(/^Type Tagged Vid "([^"]*)" for Port "([^"]*)"$/, (untaggedVid, portNum) =>
    $(`#taggedVid${portNum}`).clear().sendKeys(untaggedVid)
);

Then(/^Check Discard Untagged for Port "([^"]*)"$/, portNum => $(`#discardUntagged${portNum}`).click());

Then(/^Click Update OK button$/, async () => {

    await updateOkButton.click();
    return browser.wait(EC.invisibilityOf(updateOkButton), WAIT_TIME, `${updateOkButton} taking too long to disappear in the DOM`);
});

Then(/^Should see Connection Type as "([^"]*)" for Port "([^"]*)"$/, (connType, portNum) => {

    const xpath = `//table[@id='vlanInfoTable1q']/tbody/tr[2]/td[1]/following-sibling::td[${portNum}]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(connType));
});

Then(/^Should see Untagged Vid as "([^"]*)" for Port "([^"]*)"$/, (untaggedVid, portNum) => {

    const xpath = `//table[@id='vlanInfoTable1q']/tbody/tr[3]/td[1]/following-sibling::td[${portNum}]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(untaggedVid));
});

Then(/Should see Discard Tagged is checked for Port "([^"]*)"$/, portNum => {

    const xpath = `//table[@id='vlanInfoTable1q']/tbody/tr[5]/td[1]/following-sibling::td[${portNum}]/span`;
    return element(by.xpath(xpath)).isDisplayed().then(status => expect(status).to.true);
});

Then(/^Should see tagged Vid as "([^"]*)" for Port "([^"]*)"$/, (taggedVid, portNum) => {

    const xpath = `//table[@id='vlanInfoTable1q']/tbody/tr[4]/td[1]/following-sibling::td[${portNum}]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(taggedVid));
});

Then(/Should see Discard Untagged is checked for Port "([^"]*)"$/, portNum => {

    const xpath = `//table[@id='vlanInfoTable1q']/tbody/tr[6]/td[1]/following-sibling::td[${portNum}]/span`;
    return element(by.xpath(xpath)).isDisplayed().then(status => expect(status).to.true);
});

Then(/^Click Apply button$/, () => applyButton.click().then(() => browser.sleep(5000)));

Then(/^Check GVRP field$/, () =>
    browser.wait(EC.visibilityOf(mangVlanId), WAIT_TIME, `${mangVlanId} taking too long to appear in the DOM`)
        .then(() => gvrpCheckBox.click())
);

Then(/^Type Management VLAN ID as "([^"]*)"$/, value =>
    browser.wait(EC.visibilityOf(mangVlanId), WAIT_TIME, `${mangVlanId} taking too long to appear in the DOM`)
        .then(() => mangVlanId.clear().sendKeys(value))
);

Then(/^Click enabled button to disable$/, () => enabledButton.click());

Then(/Should not see VLAN 802.1q area$/, () =>
    browser.wait(EC.invisibilityOf(vlan8021QArea), WAIT_TIME, `${vlan8021QArea} taking too long to appear in the DOM`)
        .then(() => vlan8021QArea.isDisplayed())
        .then(status => expect(status).to.false)
);

Then(/^Choose STP Mode as "([^"]*)"$/, mode =>
    browser.wait(EC.visibilityOf(stpModeSelectBox), WAIT_TIME, `${stpModeSelectBox} taking too long to appear in the DOM`)
        .then(() => stpModeSelectBox.click())
        .then(() => element(by.xpath(`//*[@id='stpMode']/option[text()='${textMap[mode]}']`)).click())
);

Then(/^Set Device Priority as "([^"]*)"$/, priority => devicePriorityField.clear().sendKeys(priority));

Then(/^Set Maximum Age as "([^"]*)"$/, age => maxAgeField.clear().sendKeys(age));

Then(/^Set Package Interval as "([^"]*)"$/, interval => packageIntervalField.clear().sendKeys(interval));

Then(/^Set Forwarding Delay as "([^"]*)"$/, delay => forwardingDelayField.clear().sendKeys(delay));

Then(/^Set MSTP Area Name as "([^"]*)"$/, areaName => mstpRegionNameField.clear().sendKeys(areaName));

Then(/^Set MSTP Revision No as "([^"]*)"$/, revisionNo => mstpRevisionNumberField.clear().sendKeys(revisionNo));

Then(/^Set MSTP Max Hops as "([^"]*)"$/, maxHops => mstpMaxHopsField.clear().sendKeys(maxHops));

Then(/^Click STP Apply button$/, () => stpApplyButton.click().then(() => browser.sleep(3000)));

Then(/^Click STP Port Settings tab$/, () => stpPortSettingsTab.click());

Then(/^Click Edit button for port "([^"]*)"$/,
    portNum => $(`#editSTPButton${portNum}`).click()
        .then(() => browser.wait(EC.visibilityOf(stpModal), WAIT_TIME, `${stpModal} taking too long to appear in the DOM`))
);

Then(/^Type Path Cost as "([^"]*)"$/, cost => pathCostField.clear().sendKeys(cost));

Then(/^Type Port Priority as "([^"]*)"$/, priority => portPriorityField.clear().sendKeys(priority));

Then(/^Select Admin P2P as "([^"]*)"$/, adminP2P =>
    adminP2PSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='adminP2P']/option[${value[adminP2P]}]`)).click())
);

Then(/^Select Admin Edge as "([^"]*)"$/, adminEdge =>
    adminEdgeSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='adminEdge']/option[${value[adminEdge]}]`)).click())
);

Then(/^Select Auto Edge as "([^"]*)"$/, autoEdge =>
    autoEdgeSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='autoEdge']/option[${value[autoEdge]}]`)).click())
);

Then(/^Select BPDU Guard as "([^"]*)"$/, bpduGuard =>
    bpduGuardSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='bpduGuard']/option[${value[bpduGuard]}]`)).click())
);

Then(/^Select BPDU Filter as "([^"]*)"$/, bpduFilter =>
    bpduFilterSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='bpduFilter']/option[${value[bpduFilter]}]`)).click())
);

Then(/^Select Root Guard as "([^"]*)"$/, rootGuard =>
    rootGuardSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='rootGuard']/option[${value[rootGuard]}]`)).click())
);

Then(/^Click STP Update OK button$/, () =>
    stpUpdateOKButton.click()
        .then(() => browser.wait(EC.invisibilityOf(stpUpdateOKButton), WAIT_TIME, `${stpUpdateOKButton} taking too long to disappear in the DOM`))
        .then(() => browser.sleep(1000))
);

Then(/^Should see Path Cost as "([^"]*)" for port "([^"]*)"$/, (cost, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[2]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(cost));
});

Then(/^Should see Port Priority as "([^"]*)" for port "([^"]*)"$/, (priority, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[3]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(priority));
});

Then(/^Should see Admin P2P as "([^"]*)" for port "([^"]*)"$/, (p2p, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[4]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(textMap[p2p]));
});

Then(/^Should see Admin Edge as "([^"]*)" for port "([^"]*)"$/, (adminEdge, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[5]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(textMap[adminEdge]));
});

Then(/^Should see Auto Edge as "([^"]*)" for port "([^"]*)"$/, (autoEdge, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[6]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(textMap[autoEdge]));
});

Then(/^Should see BPDU Guard as "([^"]*)" for port "([^"]*)"$/, (bpduGuard, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[7]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(textMap[bpduGuard]));
});

Then(/^Should see BPDU Filter as "([^"]*)" for port "([^"]*)"$/, (bpduFilter, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[8]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(textMap[bpduFilter]));
});

Then(/^Should see Root Guard as "([^"]*)" for port "([^"]*)"$/, (rootGuard, portNum) => {

    const xpath = `//*[@id="stpPortTable"]/tbody/tr[${portNum}]/following-sibling::tr[1]/td[9]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(textMap[rootGuard]));
});

Then(/^Should not see STP Port Settings$/, () =>
    stpPortSettingsTab.isPresent().then(status => expect(status).to.false)
);

Then(/^Should not see STP Port Info$/, () =>
    stpPortInfoTab.isPresent().then(status => expect(status).to.false)
);

Then(/^Choose Snooping Version as "([^"]*)"$/, snoopingVersion =>
    snoopingVersionSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='igmpSnoopingMode']/option[text()='${textMap[snoopingVersion]}']`)).click())
);

Then(/^Choose Querier State as "([^"]*)"$/, querierState =>
    querierStateSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='igmpQuerierState']/option[text()='${textMap[querierState]}']`)).click())
);

Then(/^Set Query Interval as "([^"]*)"$/, interval => queryIntervalField.clear().sendKeys(interval));

Then(/^Click MLD checkbox$/, () => mldCheckbox.click());

Then(/^Choose MLD Querier State as "Enabled"$/, mldQuerierState =>
    mldQuerierStateSelectBox.click()
        .then(() => element(by.xpath(`//*[@id='mldQuerierState']/option[text()='${mldQuerierState}']`)))
);

Then(/^Set MLD Query Interval as "([^"]*)"$/, interval => mldQueryIntervalField.clear().sendKeys(interval));

Then(/^Click IGMP Apply button$/, () => igmpApplyButton.click());
