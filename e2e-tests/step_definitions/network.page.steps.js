'use strict';

const {Given, When, Then} = cucumber;
const navBarProtocols = $('#navbarProtocols');
const menuVLAN = $('#menuVLAN');
const menuSTP = $('#menuSTP');
const menuIGMP = $('#menuIGMP');
const menuDHCP = $('#menuDHCP');
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
const dhcpRole = $('#dhcpRole');
const dhcpSubnet = $('#InputDhcpSubnet');
const dhcpLeaseTime = $('#InputDhcpLeaseTime');
const dhcpStaticLeaseMode = $('#dhcpStaticLeaseMode');
const addMacAddressButton = $('#openDhcpMacModal');
const macAddressField = $('#dhcpStaticMacAddr');
const assignmentOKButton = $('#addDhcpStaticMac');
const dhcpSubmitButton = $('#dhcpSubmit');
const dhcpSnoopingTab = $('#dhcpSnoopingTab');
const btnSnoopingSubmit = $('#btnSnoopingSubmit');
const dhcpOption82Checkbox = $('#InputDhcpOption82');

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
    IGMPV3: 'IGMP v3',
    Server: 'Sunucu',
    Relay: 'Relay'
};

Given(/^Click Network option of navigation bar$/, () => navBarProtocols.click());

When(/^Click VLAN option of the Network/, () => menuVLAN.click());

When(/^Click STP option of the Network/, () => menuSTP.click());

When(/^Click IGMP option of the Network/, () => menuIGMP.click());

When(/^Click DHCP option of the Network/, () => menuDHCP.click());

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
    return element(by.xpath(xpath)).isDisplayed().then(status => expect(status).to);
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

///////////////////////////////7

Then(/^Select DHCP Mode as "([^"]*)"$/, dhcpMode =>
    browser.wait(EC.visibilityOf(dhcpRole), WAIT_TIME, `${dhcpRole} taking too long to appear in the DOM`)
        .then(() => dhcpRole.click())
        .then(() => element(by.xpath(`//*[@id='dhcpMode']/option[text()='${textMap[dhcpMode]}']`)).click())
);

Then(/^Type DHCP Start Address as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpStartIp';
    return $(`#${idPrefix}1`).clear().sendKeys(addresses[0])
        .then(() => $(`#${idPrefix}2`).clear().sendKeys(addresses[1].toString()))
        .then(() => $(`#${idPrefix}3`).clear().sendKeys(addresses[2].toString()))
        .then(() => $(`#${idPrefix}4`).clear().sendKeys(addresses[3].toString()));
});

Then(/^Type DHCP End Address as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpEndIp';
    return $(`#${idPrefix}1`).clear().sendKeys(addresses[0])
        .then(() => $(`#${idPrefix}2`).clear().sendKeys(addresses[1].toString()))
        .then(() => $(`#${idPrefix}3`).clear().sendKeys(addresses[2].toString()))
        .then(() => $(`#${idPrefix}4`).clear().sendKeys(addresses[3].toString()));
});

Then(/^Type DHCP Default Gateway as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpDefGw';
    return $(`#${idPrefix}1`).clear().sendKeys(addresses[0])
        .then(() => $(`#${idPrefix}2`).clear().sendKeys(addresses[1].toString()))
        .then(() => $(`#${idPrefix}3`).clear().sendKeys(addresses[2].toString()))
        .then(() => $(`#${idPrefix}4`).clear().sendKeys(addresses[3].toString()));
});

Then(/^Type DHCP DNS Server as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpDnsv';
    return $(`#${idPrefix}1`).clear().sendKeys(addresses[0])
        .then(() => $(`#${idPrefix}2`).clear().sendKeys(addresses[1].toString()))
        .then(() => $(`#${idPrefix}3`).clear().sendKeys(addresses[2].toString()))
        .then(() => $(`#${idPrefix}4`).clear().sendKeys(addresses[3].toString()));
});

Then(/^Type DHCP Subnet Mask as "([^"]*)"$/, subnetMask => dhcpSubnet.clear().sendKeys(subnetMask));

Then(/^Type DHCP Lease Time as "([^"]*)"$/, leaseTime => dhcpLeaseTime.clear().sendKeys(leaseTime));

Then(/^Select DHCP Static IP Assignment as "([^"]*)"$/, assignment =>
    dhcpStaticLeaseMode.click()
        .then(() => element(by.xpath(`//*[@id='dhcpStaticLeaseMode']/option[text()='${textMap[assignment]}']`)).click())
);

Then(/^Click add button to assign DHCP static IP$/, () => addMacAddressButton.click());

Then(/^Type MAC Address as "([^"]*)"$/, address => macAddressField.clear().sendKeys(address));

Then(/^Type DHCP Assignment IP Address as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpStaticIp';
    return $(`#${idPrefix}1`).clear().sendKeys(addresses[0])
        .then(() => $(`#${idPrefix}2`).clear().sendKeys(addresses[1].toString()))
        .then(() => $(`#${idPrefix}3`).clear().sendKeys(addresses[2].toString()))
        .then(() => $(`#${idPrefix}4`).clear().sendKeys(addresses[3].toString()));
});

Then(/^Click assignment OK button$/, () => assignmentOKButton.click());

Then(/^Click DHCP Apply button$/, () => dhcpSubmitButton.click());

Then(/^Should see MAC Address as "([^"]*)"$/, address => {

    const xpath = `//tr[@id='dhcpStaticMacTableRow1']/td[1]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(address));
});

Then(/^Should see Static IP Address as "([^"]*)"$/, address => {

    const xpath = `//tr[@id='dhcpStaticMacTableRow1']/td[2]`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(address));
});

Then(/^Click button to open DHCP Snooping$/, () => dhcpSnoopingTab.click());

Then(/^Click button to enable DHCP Snooping$/, () => {
    const xpath = `//*[@id="dhcpSnoopingDiv"]/div[1]/div/div/label[2]`;
    return element(by.xpath(xpath)).click()
});

Then(/^Click Trust checkbox for port "([^"]*)"$/, portNum => $(`#trust${portNum}`).click());

Then(/^Click DHCP Snooping Apply button$/, () => btnSnoopingSubmit.click());

Then(/^Should see DHCP Mode as "([^"]*)"$/, mode => {

    const xpath = `//select[@id='dhcpRole']/option[@selected='selected']`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(mode));
});

Then(/^Should see Start Address as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpStartIp';
    return $(`#${idPrefix}1`).getText()
        .then(text => expect(text).to.equal(addresses[0]))
        .then(() => $(`#${idPrefix}2`).getText())
        .then(text => expect(text).to.equal(addresses[1]))
        .then(() => $(`#${idPrefix}3`).getText())
        .then(text => expect(text).to.equal(addresses[2]))
        .then(() => $(`#${idPrefix}4`).getText())
        .then(text => expect(text).to.equal(addresses[3]));
});

Then(/^Should see End Address as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpEndIp';
    return $(`#${idPrefix}1`).getText()
        .then(text => expect(text).to.equal(addresses[0]))
        .then(() => $(`#${idPrefix}2`).getText())
        .then(text => expect(text).to.equal(addresses[1]))
        .then(() => $(`#${idPrefix}3`).getText())
        .then(text => expect(text).to.equal(addresses[2]))
        .then(() => $(`#${idPrefix}4`).getText())
        .then(text => expect(text).to.equal(addresses[3]));
});

Then(/^Should see DHCP Default Gateway as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpDefGw';
    return $(`#${idPrefix}1`).getText()
        .then(text => expect(text).to.equal(addresses[0]))
        .then(() => $(`#${idPrefix}2`).getText())
        .then(text => expect(text).to.equal(addresses[1]))
        .then(() => $(`#${idPrefix}3`).getText())
        .then(text => expect(text).to.equal(addresses[2]))
        .then(() => $(`#${idPrefix}4`).getText())
        .then(text => expect(text).to.equal(addresses[3]));
});

Then(/^Should see DHCP DNS Server as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpDnsv';
    return $(`#${idPrefix}1`).getText()
        .then(text => expect(text).to.equal(addresses[0]))
        .then(() => $(`#${idPrefix}2`).getText())
        .then(text => expect(text).to.equal(addresses[1]))
        .then(() => $(`#${idPrefix}3`).getText())
        .then(text => expect(text).to.equal(addresses[2]))
        .then(() => $(`#${idPrefix}4`).getText())
        .then(text => expect(text).to.equal(addresses[3]));
});

Then(/^Should see DHCP Subnet Mask as "([^"]*)"$/, subnetMask => dhcpSubnet.getText().then(text => expect(text).to.equal(subnetMask)));

Then(/^Should see DHCP Lease Time as "([^"]*)"$/, leaseTime => dhcpLeaseTime.getText().then(text => expect(text).to.equal(leaseTime)));

Then(/^Should see DHCP Static IP Assignment as "([^"]*)"$/, ipAssignment => {

    const xpath = `//select[@id='dhcpStaticLeaseMode']/option[@selected='selected']`;
    return element(by.xpath(xpath)).getText().then(text => expect(text).to.equal(ipAssignment));
});

Then(/^Should see DHCP Start Address is disabled$/, () => {

    const idPrefix = 'InputDhcpStartIp';
    return element(by.xpath(`//input[@id='${idPrefix}1'][@disabled]`)).isPresent()
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}2'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}3'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}4'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true);
});

Then(/^Should see DHCP End Address is disabled$/, () => {

    const idPrefix = 'InputDhcpEndIp';
    return element(by.xpath(`//input[@id='${idPrefix}1'][@disabled]`)).isPresent()
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}2'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}3'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}4'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true);
});

Then(/^Should see DHCP Default Gateway is disabled$/, () => {

    const idPrefix = 'InputDhcpDefGw';
    return element(by.xpath(`//input[@id='${idPrefix}1'][@disabled]`)).isPresent()
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}2'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}3'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}4'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true);
});

Then(/^Should see DHCP DNS Server is disabled$/, () => {

    const idPrefix = 'InputDhcpDnsv';
    return element(by.xpath(`//input[@id='${idPrefix}1'][@disabled]`)).isPresent()
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}2'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}3'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true)
        .then(() => element(by.xpath(`//input[@id='${idPrefix}4'][@disabled]`)).isPresent())
        .then(status => expect(status).to.true);
});

Then(/^Should see DHCP Subnet Mask is disabled$/, () =>
    element(by.xpath(`//input[@id='InputDhcpSubnet'][@disabled]`)).isPresent().then(status => expect(status).to.true)
);

Then(/^Should see DHCP Lease Time is disabled$/, () =>
    element(by.xpath(`//input[@id='InputDhcpLeaseTime'][@disabled]`)).isPresent().then(status => expect(status).to.true)
);

Then(/^Check Option 82$/, () => dhcpOption82Checkbox.click());

Then(/^Type Server 1 as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpServerOne';
    return $(`#${idPrefix}1`).clear().sendKeys(addresses[0])
        .then(() => $(`#${idPrefix}2`).clear().sendKeys(addresses[1].toString()))
        .then(() => $(`#${idPrefix}3`).clear().sendKeys(addresses[2].toString()))
        .then(() => $(`#${idPrefix}4`).clear().sendKeys(addresses[3].toString()));
});


Then(/^Type Server 2 as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpServerTwo';
    return $(`#${idPrefix}1`).clear().sendKeys(addresses[0])
        .then(() => $(`#${idPrefix}2`).clear().sendKeys(addresses[1].toString()))
        .then(() => $(`#${idPrefix}3`).clear().sendKeys(addresses[2].toString()))
        .then(() => $(`#${idPrefix}4`).clear().sendKeys(addresses[3].toString()));
});

Then(/^Should see Server 1 as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpServerTwo';
    return $(`#${idPrefix}1`).getText()
        .then(text => expect(text).to.equal(addresses[0]))
        .then(() => $(`#${idPrefix}2`).getText())
        .then(text => expect(text).to.equal(addresses[1]))
        .then(() => $(`#${idPrefix}3`).getText())
        .then(text => expect(text).to.equal(addresses[2]))
        .then(() => $(`#${idPrefix}4`).getText())
        .then(text => expect(text).to.equal(addresses[3]));
});

Then(/^Should see Server 2 as "([^"]*)"$/, async address => {

    const addresses = await address.split('.');
    const idPrefix = 'InputDhcpServerTwo';
    return $(`#${idPrefix}1`).getText()
        .then(text => expect(text).to.equal(addresses[0]))
        .then(() => $(`#${idPrefix}2`).getText())
        .then(text => expect(text).to.equal(addresses[1]))
        .then(() => $(`#${idPrefix}3`).getText())
        .then(text => expect(text).to.equal(addresses[2]))
        .then(() => $(`#${idPrefix}4`).getText())
        .then(text => expect(text).to.equal(addresses[3]));
});
