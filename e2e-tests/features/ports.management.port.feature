Feature: Ports Management Feature

  Scenario: Change IP Settings
    Given Click Ports option of navigation bar
    When Click Management Port option of the Ports
    Then Type IP address as "192.168.5.10"
    Then Type Mask as "25"
    Then Type Default Gateway as "192.168.5.3"
    Then Click IP Settings Apply button
    Then Should see "ipAddrLbl" as "192.168.5.10" on the opened pop-up
    Then Should see "sbnMaskLbl" as "25" on the opened pop-up
    Then Should see "gateWayLbl" as "192.168.5.3" on the opened pop-up
    Then Click IP Settings OK Button on the opened pop-up
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IP Settings from .cfg file
    Then Should see "switchIP" value as "192.168.5.10"
    Then Should see "switchIfMask" value as "25"
    Then Should see "switchIfDefGw" value as "192.168.5.3"
    Then Should see "vlMangVidValue" value as "1"

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IP Settings from .cfg file after restart
    Then Should see "switchIP" value as "192.168.5.10"
    Then Should see "switchIfMask" value as "25"
    Then Should see "switchIfDefGw" value as "192.168.5.3"
    Then Should see "vlMangVidValue" value as "1"

  Scenario: Check IP Settings on the page after restart
    Given Click Ports option of navigation bar
    When Click Management Port option of the Ports
    Then Should see IP Address as "192.168.5.10"
    Then Should see Subnet Mask as "25"
    Then Should see Default Gateway as "192.168.5.3"

  Scenario: Restore
    Given Go to the app
    When Should see the aselsan logo
    Then Click Restore option of the System Tools
    And Click confirm OK Button
