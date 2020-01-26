Feature: Protocols VLAN Feature

  ## DHCP Mode Server and DHCP Snooping Open
  Scenario: Set DHCP Mode as Server
    Given Click Network option of navigation bar
    When Click DHCP option of the Network
    Then Select DHCP Mode as "Server"
    Then Type DHCP Start Address as "192.168.5.1"
    Then Type DHCP End Address as "192.168.5.254"
    Then Type DHCP Default Gateway as "192.168.5.1"
    Then Type DHCP DNS Server as "192.168.5.1"
    Then Type DHCP Subnet Mask as "24"
    Then Type DHCP Lease Time as "2400"
    Then Select DHCP Static IP Assignment as "Enabled"
    Then Click add button to assign DHCP static IP
    Then Type MAC Address as "a0:B1:c2:D3:e4:f5"
    Then Type DHCP Assignment IP Address as "192.168.5.61"
    Then Click assignment OK button
    Then Click DHCP Apply button
    And Click confirm OK Button

  Scenario: Check MAC Address and Static IP
    Then Should see MAC Address as "A0B1C2D3E4F5"
    Then Should see Static IP Address as "192.168.5.61"

  Scenario: Open DHCP Snooping tab
    Then Click button to open DHCP Snooping

  Scenario Outline: Open DHCP Snooping
    Then Click button to enable DHCP Snooping
    Then Click Trust checkbox for port "<portNum>"
    Examples:
      | portNum |
      | 1       |
      | 3       |
      | 5       |
      | 7       |
      | 9       |

  Scenario: Save changes
    Then Click DHCP Snooping Apply button
    Then Click alert OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  ###############
  # Check values in conf file
  ###############

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Check DHCP Values in the page
    Given Click Network option of navigation bar
    When Click STP option of the Network
    Then Should see DHCP Mode as "Server"
    Then Should see Start Address as "192.168.5.1"
    Then Should see End Address as "192.168.5.254"
    Then Should see DHCP Default Gateway as "192.168.5.1"
    Then Should see DHCP DNS Server as "192.168.5.1"
    Then Should see DHCP Subnet Mask as "24"
    Then Should see DHCP Lease Time as "2400"
    Then Should see DHCP Static IP Assignment as "Enabled"
    Then Should see MAC Address as "a0:B1:c2:D3:e4:f5"

  ###############
  # Check values in conf file
  ###############

  ## DHCP Mode Relay
  Scenario: Set DHCP Mode as Server
    Given Click Network option of navigation bar
    When Click DHCP option of the Network
    Then Select DHCP Mode as "Relay"
    Then Should see DHCP Start Address is disabled
    Then Should see DHCP End Address is disabled
    Then Should see DHCP Default Gateway is disabled
    Then Should see DHCP DNS Server is disabled
    Then Should see DHCP Subnet Mask is disabled
    Then Should see DHCP Lease Time is disabled
    Then Check Option 82
    Then Type Server 1 as "192.168.5.1"
    Then Type Server 2 as "192.168.5.2"
    Then Click DHCP Apply button
    And Click confirm OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  ###############
  # Check values in conf file
  ###############

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Check DHCP Values in the page
    Given Click Network option of navigation bar
    When Click STP option of the Network
    Then Should see DHCP Mode as "Relay"
    Then Should see DHCP Start Address is disabled
    Then Should see DHCP End Address is disabled
    Then Should see DHCP Default Gateway is disabled
    Then Should see DHCP DNS Server is disabled
    Then Should see DHCP Subnet Mask is disabled
    Then Should see DHCP Lease Time is disabled
    Then Should see Server 1 as "192.168.5.1"
    Then Should see Server 2 as "192.168.5.2"

  ###############
  # Check values in conf file
  ###############

  ## DHCP Mode Disabled
  Scenario: Set DHCP Mode as Server
    Given Click Network option of navigation bar
    When Click DHCP option of the Network
    Then Select DHCP Mode as "Disabled"
    Then Should see DHCP Start Address is disabled
    Then Should see DHCP End Address is disabled
    Then Should see DHCP Default Gateway is disabled
    Then Should see DHCP DNS Server is disabled
    Then Should see DHCP Subnet Mask is disabled
    Then Should see DHCP Lease Time is disabled
    Then Click DHCP Apply button
    And Click confirm OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  ###############
  # Check values in conf file
  ###############

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Check DHCP Values in the page
    Given Click Network option of navigation bar
    When Click STP option of the Network
    Then Should see DHCP Mode as "Relay"
    Then Should see DHCP Start Address is disabled
    Then Should see DHCP End Address is disabled
    Then Should see DHCP Default Gateway is disabled
    Then Should see DHCP DNS Server is disabled
    Then Should see DHCP Subnet Mask is disabled
    Then Should see DHCP Lease Time is disabled

  ###############
  # Check values in conf file
  ###############
