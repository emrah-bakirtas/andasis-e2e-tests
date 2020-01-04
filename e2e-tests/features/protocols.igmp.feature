Feature: Protocols IGMP/MLD Feature

  ### IGMP V2 Scenarios
  Scenario: Change IGMP settings
    Given Click Network option of navigation bar
    When Click IGMP option of the Protocols
    Then Choose Snooping Version as "IGMPV2"
    Then Choose Querier State as "Disabled"
    Then Set Query Interval as "120"
    Then Click MLD checkbox
    Then Set MLD Query Interval as "10"
    Then Click IGMP Apply button
    And Click alert OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IGMP settings from .cfg file
    Then Should see "igmpVersion" value as "0"
    Then Should see "igmpQueryState" value as "0"
    Then Should see "igmpQueryInterval" value as "12000"
    Then Should see "mldQueryInterval" value as "1000"

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IGMP settings from .cfg file
    Then Should see "igmpVersion" value as "0"
    Then Should see "igmpQueryState" value as "0"
    Then Should see "igmpQueryInterval" value as "12000"
    Then Should see "mldQueryInterval" value as "1000"

  ### IGMP V3 Scenarios
  Scenario: Change IGMP settings
    Given Click Network option of navigation bar
    When Click IGMP option of the Protocols
    Then Choose Snooping Version as "IGMPV3"
    Then Choose Querier State as "Enabled"
    Then Set Query Interval as "110"
    Then Click MLD checkbox
    Then Click IGMP Apply button
    And Click alert OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IGMP settings from .cfg file
    Then Should see "igmpVersion" value as "1"
    Then Should see "igmpQueryState" value as "1"
    Then Should see "igmpQueryInterval" value as "11000"

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IGMP settings from .cfg file
    Then Should see "igmpVersion" value as "1"
    Then Should see "igmpQueryState" value as "1"
    Then Should see "igmpQueryInterval" value as "11000"

  ### Disabled Scenarios
  Scenario: Change IGMP settings
    Given Click Network option of navigation bar
    When Click IGMP option of the Protocols
    Then Choose Snooping Version as "Disabled"
    Then Click IGMP Apply button
    And Click alert OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IGMP settings from .cfg file
    Then Should see "igmpVersion" value as "3"

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check IGMP settings from .cfg file
    Then Should see "igmpVersion" value as "3"

  Scenario: Restore
    Given Go to the app
    When Should see the aselsan logo
    Then Click Restore option of the System Tools
    And Click confirm OK Button
