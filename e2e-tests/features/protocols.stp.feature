Feature: Protocols STP Feature

  #### STP Scenarios
  Scenario: Change STP settings
    Given Click Network option of navigation bar
    When Click STP option of the Protocols
    Then Choose STP Mode as "STP"
    Then Set Device Priority as "11"
    Then Set Maximum Age as "8"
    Then Set Package Interval as "3"
    Then Set Forwarding Delay as "5"
    And Click STP Apply button

  Scenario: Open STP Port Settings
    Then Click STP Port Settings tab

  Scenario Outline: Change STP Port settings
    When Click Edit button for port "<portNum>"
    Then Type Path Cost as "<pathCost>"
    Then Type Port Priority as "<portPriority>"
    Then Select Admin P2P as "<adminP2P>"
    Then Select Admin Edge as "<adminEdge>"
    Then Select Auto Edge as "<autoEdge>"
    Then Select BPDU Guard as "<bpduGuard>"
    Then Select BPDU Filter as "<bpduFilter>"
    Then Select Root Guard as "<rootGuard>"
    And Click STP Update OK button
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | Auto     | Close     | Close    | Close     | Close      | Close     |
      | 2       | 2        | 2            | Auto     | Open      | Open     | Close     | Close      | Open      |
      | 3       | 3        | 3            | Auto     | Close     | Close    | Open      | Open       | Open      |
      | 4       | 4        | 4            | Open     | Open      | Open     | Open      | Open       | Close     |
      | 5       | 5        | 5            | Open     | Open      | Close    | Open      | Close      | Close     |
      | 6       | 6        | 6            | Open     | Close     | Open     | Close     | Open       | Open      |
      | 7       | 7        | 7            | Open     | Open      | Close    | Close     | Open       | Open      |
      | 8       | 8        | 8            | Close    | Close     | Open     | Open      | Close      | Open      |
      | 9       | 9        | 9            | Close    | Open      | Close    | Open      | Close      | Close     |
      | 10      | 10       | 10           | Close    | Close     | Open     | Open      | Close      | Close     |

  Scenario Outline: Check STP Port settings in the table
    Then Should see Path Cost as "<pathCost>" for port "<portNum>"
    Then Should see Port Priority as "<portPriority>" for port "<portNum>"
    Then Should see Admin P2P as "<adminP2P>" for port "<portNum>"
    Then Should see Admin Edge as "<adminEdge>" for port "<portNum>"
    Then Should see Auto Edge as "<autoEdge>" for port "<portNum>"
    Then Should see BPDU Guard as "<bpduGuard>" for port "<portNum>"
    Then Should see BPDU Filter as "<bpduFilter>" for port "<portNum>"
    Then Should see Root Guard as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | Auto     | Close     | Close    | Close     | Close      | Close     |
      | 2       | 2        | 2            | Auto     | Open      | Open     | Close     | Close      | Open      |
      | 3       | 3        | 3            | Auto     | Close     | Close    | Open      | Open       | Open      |
      | 4       | 4        | 4            | Open     | Open      | Open     | Open      | Open       | Close     |
      | 5       | 5        | 5            | Open     | Open      | Close    | Open      | Close      | Close     |
      | 6       | 6        | 6            | Open     | Close     | Open     | Close     | Open       | Open      |
      | 7       | 7        | 7            | Open     | Open      | Close    | Close     | Open       | Open      |
      | 8       | 8        | 8            | Close    | Close     | Open     | Open      | Close      | Open      |
      | 9       | 9        | 9            | Close    | Open      | Close    | Open      | Close      | Close     |
      | 10      | 10       | 10           | Close    | Close     | Open     | Open      | Close      | Close     |

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check STP Settings from .cfg file
    Then Should see "stpSystemMode" value as "0"
    Then Should see "rstpBridgePriority" value as "45056"
    Then Should see "rstpBridgeMaxAge" value as "8"
    Then Should see "rstpBridgeHelloTime" value as "3"
    Then Should see "rstpBridgeForwardDelay" value as "5"

  Scenario Outline: Check STP Ports Settings from .cfg file
    Then Should see "rstpPortPathCost" value from file as "<pathCost>" for port "<portNum>"
    Then Should see "rstpPortPriority" value from file as "<portPriority>" for port "<portNum>"
    Then Should see "rstpPortP2P" value from file as "<adminP2P>" for port "<portNum>"
    Then Should see "rstpPortAdminEdge" value from file as "<adminEdge>" for port "<portNum>"
    Then Should see "rstpPortAutoEdge" value from file as "<autoEdge>" for port "<portNum>"
    Then Should see "rstpPortBPDUGuard" value from file as "<bpduGuard>" for port "<portNum>"
    Then Should see "rstpPortBPDUFilter" value from file as "<bpduFilter>" for port "<portNum>"
    Then Should see "rstpPortRootGuard" value from file as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | 2        | 1         | 1        | 1         | 1          | 1         |
      | 2       | 2        | 2            | 2        | 0         | 0        | 1         | 1          | 0         |
      | 3       | 3        | 3            | 2        | 1         | 1        | 0         | 0          | 0         |
      | 4       | 4        | 4            | 0        | 0         | 0        | 0         | 0          | 1         |
      | 5       | 5        | 5            | 0        | 0         | 1        | 0         | 1          | 1         |
      | 6       | 6        | 6            | 0        | 1         | 0        | 1         | 0          | 0         |
      | 7       | 7        | 7            | 0        | 0         | 1        | 1         | 0          | 0         |
      | 8       | 8        | 8            | 1        | 1         | 0        | 0         | 1          | 0         |
      | 9       | 9        | 9            | 1        | 0         | 1        | 0         | 1          | 1         |
      | 10      | 10       | 10           | 1        | 1         | 0        | 0         | 1          | 1         |

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check STP Settings from .cfg file
    Given Click Network option of navigation bar
    When Click STP option of the Protocols
    Then Should see "stpSystemMode" value as "0"
    Then Should see "rstpBridgePriority" value as "45056"
    Then Should see "rstpBridgeMaxAge" value as "8"
    Then Should see "rstpBridgeHelloTime" value as "3"
    Then Should see "rstpBridgeForwardDelay" value as "5"

  Scenario Outline: Check STP Port Settings from .cfg file
    Then Should see "rstpPortPathCost" value from file as "<pathCost>" for port "<portNum>"
    Then Should see "rstpPortPriority" value from file as "<portPriority>" for port "<portNum>"
    Then Should see "rstpPortP2P" value from file as "<adminP2P>" for port "<portNum>"
    Then Should see "rstpPortAdminEdge" value from file as "<adminEdge>" for port "<portNum>"
    Then Should see "rstpPortAutoEdge" value from file as "<autoEdge>" for port "<portNum>"
    Then Should see "rstpPortBPDUGuard" value from file as "<bpduGuard>" for port "<portNum>"
    Then Should see "rstpPortBPDUFilter" value from file as "<bpduFilter>" for port "<portNum>"
    Then Should see "rstpPortRootGuard" value from file as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | 2        | 1         | 1        | 1         | 1          | 1         |
      | 2       | 2        | 2            | 2        | 0         | 0        | 1         | 1          | 0         |
      | 3       | 3        | 3            | 2        | 1         | 1        | 0         | 0          | 0         |
      | 4       | 4        | 4            | 0        | 0         | 0        | 0         | 0          | 1         |
      | 5       | 5        | 5            | 0        | 0         | 1        | 0         | 1          | 1         |
      | 6       | 6        | 6            | 0        | 1         | 0        | 1         | 0          | 0         |
      | 7       | 7        | 7            | 0        | 0         | 1        | 1         | 0          | 0         |
      | 8       | 8        | 8            | 1        | 1         | 0        | 0         | 1          | 0         |
      | 9       | 9        | 9            | 1        | 0         | 1        | 0         | 1          | 1         |
      | 10      | 10       | 10           | 1        | 1         | 0        | 0         | 1          | 1         |

  Scenario: Open STP Port Settings
    Then Click STP Port Settings tab

  Scenario Outline: Check STP Port settings in the table
    Then Should see Path Cost as "<pathCost>" for port "<portNum>"
    Then Should see Port Priority as "<portPriority>" for port "<portNum>"
    Then Should see Admin P2P as "<adminP2P>" for port "<portNum>"
    Then Should see Admin Edge as "<adminEdge>" for port "<portNum>"
    Then Should see Auto Edge as "<autoEdge>" for port "<portNum>"
    Then Should see BPDU Guard as "<bpduGuard>" for port "<portNum>"
    Then Should see BPDU Filter as "<bpduFilter>" for port "<portNum>"
    Then Should see Root Guard as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | Auto     | Close     | Close    | Close     | Close      | Close     |
      | 2       | 2        | 2            | Auto     | Open      | Open     | Close     | Close      | Open      |
      | 3       | 3        | 3            | Auto     | Close     | Close    | Open      | Open       | Open      |
      | 4       | 4        | 4            | Open     | Open      | Open     | Open      | Open       | Close     |
      | 5       | 5        | 5            | Open     | Open      | Close    | Open      | Close      | Close     |
      | 6       | 6        | 6            | Open     | Close     | Open     | Close     | Open       | Open      |
      | 7       | 7        | 7            | Open     | Open      | Close    | Close     | Open       | Open      |
      | 8       | 8        | 8            | Close    | Close     | Open     | Open      | Close      | Open      |
      | 9       | 9        | 9            | Close    | Open      | Close    | Open      | Close      | Close     |
      | 10      | 10       | 10           | Close    | Close     | Open     | Open      | Close      | Close     |

  #### RSTP Scenarios
  Scenario: Change RSTP settings
    Given Go to the app
    When Click STP option of the Protocols
    Then Choose STP Mode as "RSTP"
    Then Set Device Priority as "12"
    Then Set Maximum Age as "8"
    Then Set Package Interval as "4"
    Then Set Forwarding Delay as "6"
    And Click STP Apply button

  Scenario: Open RSTP Port Settings
    Then Click STP Port Settings tab

  Scenario Outline: Change RSTP Port settings
    When Click Edit button for port "<portNum>"
    Then Type Path Cost as "<pathCost>"
    Then Type Port Priority as "<portPriority>"
    Then Select Admin P2P as "<adminP2P>"
    Then Select Admin Edge as "<adminEdge>"
    Then Select Auto Edge as "<autoEdge>"
    Then Select BPDU Guard as "<bpduGuard>"
    Then Select BPDU Filter as "<bpduFilter>"
    Then Select Root Guard as "<rootGuard>"
    And Click STP Update OK button
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | Auto     | Close     | Close    | Close     | Close      | Open      |
      | 2       | 2        | 2            | Auto     | Open      | Open     | Close     | Close      | Open      |
      | 3       | 3        | 3            | Auto     | Close     | Close    | Open      | Open       | Open      |
      | 4       | 4        | 4            | Open     | Open      | Open     | Open      | Open       | Close     |
      | 5       | 5        | 5            | Open     | Open      | Close    | Open      | Close      | Close     |
      | 6       | 6        | 6            | Open     | Close     | Open     | Close     | Open       | Open      |
      | 7       | 7        | 7            | Open     | Open      | Close    | Close     | Open       | Open      |
      | 8       | 8        | 8            | Close    | Close     | Open     | Open      | Close      | Close     |
      | 9       | 9        | 9            | Close    | Open      | Close    | Open      | Close      | Close     |
      | 10      | 10       | 10           | Close    | Close     | Open     | Open      | Close      | Close     |

  Scenario Outline: Check RSTP Port settings in the table
    Then Should see Path Cost as "<pathCost>" for port "<portNum>"
    Then Should see Port Priority as "<portPriority>" for port "<portNum>"
    Then Should see Admin P2P as "<adminP2P>" for port "<portNum>"
    Then Should see Admin Edge as "<adminEdge>" for port "<portNum>"
    Then Should see Auto Edge as "<autoEdge>" for port "<portNum>"
    Then Should see BPDU Guard as "<bpduGuard>" for port "<portNum>"
    Then Should see BPDU Filter as "<bpduFilter>" for port "<portNum>"
    Then Should see Root Guard as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | Auto     | Close     | Close    | Close     | Close      | Open      |
      | 2       | 2        | 2            | Auto     | Open      | Open     | Close     | Close      | Open      |
      | 3       | 3        | 3            | Auto     | Close     | Close    | Open      | Open       | Open      |
      | 4       | 4        | 4            | Open     | Open      | Open     | Open      | Open       | Close     |
      | 5       | 5        | 5            | Open     | Open      | Close    | Open      | Close      | Close     |
      | 6       | 6        | 6            | Open     | Close     | Open     | Close     | Open       | Open      |
      | 7       | 7        | 7            | Open     | Open      | Close    | Close     | Open       | Open      |
      | 8       | 8        | 8            | Close    | Close     | Open     | Open      | Close      | Close     |
      | 9       | 9        | 9            | Close    | Open      | Close    | Open      | Close      | Close     |
      | 10      | 10       | 10           | Close    | Close     | Open     | Open      | Close      | Close     |

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check RSTP Settings from .cfg file
    Then Should see "stpSystemMode" value as "1"
    Then Should see "rstpBridgePriority" value as "49152"
    Then Should see "rstpBridgeMaxAge" value as "8"
    Then Should see "rstpBridgeHelloTime" value as "4"
    Then Should see "rstpBridgeForwardDelay" value as "6"

  Scenario Outline: Check RSTP Port Settings from .cfg file
    Then Should see "rstpPortPathCost" value from file as "<pathCost>" for port "<portNum>"
    Then Should see "rstpPortPriority" value from file as "<portPriority>" for port "<portNum>"
    Then Should see "rstpPortP2P" value from file as "<adminP2P>" for port "<portNum>"
    Then Should see "rstpPortAdminEdge" value from file as "<adminEdge>" for port "<portNum>"
    Then Should see "rstpPortAutoEdge" value from file as "<autoEdge>" for port "<portNum>"
    Then Should see "rstpPortBPDUGuard" value from file as "<bpduGuard>" for port "<portNum>"
    Then Should see "rstpPortBPDUFilter" value from file as "<bpduFilter>" for port "<portNum>"
    Then Should see "rstpPortRootGuard" value from file as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | 2        | 1         | 1        | 1         | 1          | 0         |
      | 2       | 2        | 2            | 2        | 0         | 0        | 1         | 1          | 0         |
      | 3       | 3        | 3            | 2        | 1         | 1        | 0         | 0          | 0         |
      | 4       | 4        | 4            | 0        | 0         | 0        | 0         | 0          | 1         |
      | 5       | 5        | 5            | 0        | 0         | 1        | 0         | 1          | 1         |
      | 6       | 6        | 6            | 0        | 1         | 0        | 1         | 0          | 0         |
      | 7       | 7        | 7            | 0        | 0         | 1        | 1         | 0          | 0         |
      | 8       | 8        | 8            | 1        | 1         | 0        | 0         | 1          | 1         |
      | 9       | 9        | 9            | 1        | 0         | 1        | 0         | 1          | 1         |
      | 10      | 10       | 10           | 1        | 1         | 0        | 0         | 1          | 1         |

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check RSTP Settings from .cfg file
    Given Click Network option of navigation bar
    When Click STP option of the Protocols
    Then Should see "stpSystemMode" value as "1"
    Then Should see "rstpBridgePriority" value as "49152"
    Then Should see "rstpBridgeMaxAge" value as "8"
    Then Should see "rstpBridgeHelloTime" value as "4"
    Then Should see "rstpBridgeForwardDelay" value as "6"

  Scenario Outline: Check RSTP Port Settings from .cfg file
    Then Should see "rstpPortPathCost" value from file as "<pathCost>" for port "<portNum>"
    Then Should see "rstpPortPriority" value from file as "<portPriority>" for port "<portNum>"
    Then Should see "rstpPortP2P" value from file as "<adminP2P>" for port "<portNum>"
    Then Should see "rstpPortAdminEdge" value from file as "<adminEdge>" for port "<portNum>"
    Then Should see "rstpPortAutoEdge" value from file as "<autoEdge>" for port "<portNum>"
    Then Should see "rstpPortBPDUGuard" value from file as "<bpduGuard>" for port "<portNum>"
    Then Should see "rstpPortBPDUFilter" value from file as "<bpduFilter>" for port "<portNum>"
    Then Should see "rstpPortRootGuard" value from file as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | 2        | 1         | 1        | 1         | 1          | 0         |
      | 2       | 2        | 2            | 2        | 0         | 0        | 1         | 1          | 0         |
      | 3       | 3        | 3            | 2        | 1         | 1        | 0         | 0          | 0         |
      | 4       | 4        | 4            | 0        | 0         | 0        | 0         | 0          | 1         |
      | 5       | 5        | 5            | 0        | 0         | 1        | 0         | 1          | 1         |
      | 6       | 6        | 6            | 0        | 1         | 0        | 1         | 0          | 0         |
      | 7       | 7        | 7            | 0        | 0         | 1        | 1         | 0          | 0         |
      | 8       | 8        | 8            | 1        | 1         | 0        | 0         | 1          | 1         |
      | 9       | 9        | 9            | 1        | 0         | 1        | 0         | 1          | 1         |
      | 10      | 10       | 10           | 1        | 1         | 0        | 0         | 1          | 1         |

  #### MSTP Scenarios
  Scenario: Open VLAN
    Given Go to the app
    When Click VLAN option of the Protocols
    Then Click disabled button to enable
    Then Click Apply button
    And Click alert OK Button

  Scenario: Change STP settings
    When Click STP option of the Protocols
    Then Choose STP Mode as "MSTP"
    Then Set Maximum Age as "10"
    Then Set Package Interval as "5"
    Then Set Forwarding Delay as "7"
    Then Set MSTP Area Name as "area"
    Then Set MSTP Revision No as "1"
    Then Set MSTP Max Hops as "7"
    And Click STP Apply button

  Scenario: Open MSTP Port Settings
    Then Click STP Port Settings tab

  Scenario Outline: Change MSTP Port settings
    When Click Edit button for port "<portNum>"
    Then Type Path Cost as "<pathCost>"
    Then Type Port Priority as "<portPriority>"
    Then Select Admin P2P as "<adminP2P>"
    Then Select Admin Edge as "<adminEdge>"
    Then Select Auto Edge as "<autoEdge>"
    Then Select BPDU Guard as "<bpduGuard>"
    Then Select BPDU Filter as "<bpduFilter>"
    Then Select Root Guard as "<rootGuard>"
    And Click STP Update OK button
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | Auto     | Close     | Close    | Close     | Close      | Open      |
      | 2       | 2        | 2            | Auto     | Open      | Open     | Close     | Close      | Open      |
      | 3       | 3        | 3            | Auto     | Close     | Close    | Open      | Open       | Open      |
      | 4       | 4        | 4            | Open     | Open      | Open     | Open      | Open       | Close     |
      | 5       | 5        | 5            | Open     | Open      | Close    | Open      | Close      | Open      |
      | 6       | 6        | 6            | Open     | Close     | Open     | Close     | Open       | Close     |
      | 7       | 7        | 7            | Open     | Open      | Close    | Close     | Open       | Open      |
      | 8       | 8        | 8            | Close    | Close     | Open     | Open      | Close      | Close     |
      | 9       | 9        | 9            | Close    | Open      | Close    | Open      | Close      | Close     |
      | 10      | 10       | 10           | Close    | Close     | Open     | Open      | Close      | Close     |

  Scenario Outline: Check MSTP Port settings in the table
    Then Should see Path Cost as "<pathCost>" for port "<portNum>"
    Then Should see Port Priority as "<portPriority>" for port "<portNum>"
    Then Should see Admin P2P as "<adminP2P>" for port "<portNum>"
    Then Should see Admin Edge as "<adminEdge>" for port "<portNum>"
    Then Should see Auto Edge as "<autoEdge>" for port "<portNum>"
    Then Should see BPDU Guard as "<bpduGuard>" for port "<portNum>"
    Then Should see BPDU Filter as "<bpduFilter>" for port "<portNum>"
    Then Should see Root Guard as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | Auto     | Close     | Close    | Close     | Close      | Open      |
      | 2       | 2        | 2            | Auto     | Open      | Open     | Close     | Close      | Open      |
      | 3       | 3        | 3            | Auto     | Close     | Close    | Open      | Open       | Open      |
      | 4       | 4        | 4            | Open     | Open      | Open     | Open      | Open       | Close     |
      | 5       | 5        | 5            | Open     | Open      | Close    | Open      | Close      | Open      |
      | 6       | 6        | 6            | Open     | Close     | Open     | Close     | Open       | Close     |
      | 7       | 7        | 7            | Open     | Open      | Close    | Close     | Open       | Open      |
      | 8       | 8        | 8            | Close    | Close     | Open     | Open      | Close      | Close     |
      | 9       | 9        | 9            | Close    | Open      | Close    | Open      | Close      | Close     |
      | 10      | 10       | 10           | Close    | Close     | Open     | Open      | Close      | Close     |

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check MSTP Settings from .cfg file
    Then Should see "stpSystemMode" value as "2"
    Then Should see "rstpBridgeMaxAge" value as "10"
    Then Should see "rstpBridgeHelloTime" value as "5"
    Then Should see "rstpBridgeForwardDelay" value as "7"
    Then Should see "mstpRegionName" value as "area"
    Then Should see "mstpRevisionNumber" value as "1"
    Then Should see "mstpMaxHops" value as "7"

  Scenario Outline: Check MSTP Port Settings from .cfg file
    Then Should see "rstpPortPathCost" value from file as "<pathCost>" for port "<portNum>"
    Then Should see "rstpPortPriority" value from file as "<portPriority>" for port "<portNum>"
    Then Should see "rstpPortP2P" value from file as "<adminP2P>" for port "<portNum>"
    Then Should see "rstpPortAdminEdge" value from file as "<adminEdge>" for port "<portNum>"
    Then Should see "rstpPortAutoEdge" value from file as "<autoEdge>" for port "<portNum>"
    Then Should see "rstpPortBPDUGuard" value from file as "<bpduGuard>" for port "<portNum>"
    Then Should see "rstpPortBPDUFilter" value from file as "<bpduFilter>" for port "<portNum>"
    Then Should see "rstpPortRootGuard" value from file as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | 2        | 1         | 1        | 1         | 1          | 0         |
      | 2       | 2        | 2            | 2        | 0         | 0        | 1         | 1          | 0         |
      | 3       | 3        | 3            | 2        | 1         | 1        | 0         | 0          | 0         |
      | 4       | 4        | 4            | 0        | 0         | 0        | 0         | 0          | 1         |
      | 5       | 5        | 5            | 0        | 0         | 1        | 0         | 1          | 0         |
      | 6       | 6        | 6            | 0        | 1         | 0        | 1         | 0          | 1         |
      | 7       | 7        | 7            | 0        | 0         | 1        | 1         | 0          | 0         |
      | 8       | 8        | 8            | 1        | 1         | 0        | 0         | 1          | 1         |
      | 9       | 9        | 9            | 1        | 0         | 1        | 0         | 1          | 1         |
      | 10      | 10       | 10           | 1        | 1         | 0        | 0         | 1          | 1         |

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check MSTP Settings from .cfg file
    Given Click Network option of navigation bar
    When Click STP option of the Protocols
    Then Should see "stpSystemMode" value as "2"
    Then Should see "rstpBridgeMaxAge" value as "10"
    Then Should see "rstpBridgeHelloTime" value as "5"
    Then Should see "rstpBridgeForwardDelay" value as "7"
    Then Should see "mstpRegionName" value as "area"
    Then Should see "mstpRevisionNumber" value as "1"
    Then Should see "mstpMaxHops" value as "7"

  Scenario Outline: Check MSTP Port Settings from .cfg file
    Then Should see "rstpPortPathCost" value from file as "<pathCost>" for port "<portNum>"
    Then Should see "rstpPortPriority" value from file as "<portPriority>" for port "<portNum>"
    Then Should see "rstpPortP2P" value from file as "<adminP2P>" for port "<portNum>"
    Then Should see "rstpPortAdminEdge" value from file as "<adminEdge>" for port "<portNum>"
    Then Should see "rstpPortAutoEdge" value from file as "<autoEdge>" for port "<portNum>"
    Then Should see "rstpPortBPDUGuard" value from file as "<bpduGuard>" for port "<portNum>"
    Then Should see "rstpPortBPDUFilter" value from file as "<bpduFilter>" for port "<portNum>"
    Then Should see "rstpPortRootGuard" value from file as "<rootGuard>" for port "<portNum>"
    Examples:
      | portNum | pathCost | portPriority | adminP2P | adminEdge | autoEdge | bpduGuard | bpduFilter | rootGuard |
      | 1       | 1        | 1            | 2        | 1         | 1        | 1         | 1          | 0         |
      | 2       | 2        | 2            | 2        | 0         | 0        | 1         | 1          | 0         |
      | 3       | 3        | 3            | 2        | 1         | 1        | 0         | 0          | 0         |
      | 4       | 4        | 4            | 0        | 0         | 0        | 0         | 0          | 1         |
      | 5       | 5        | 5            | 0        | 0         | 1        | 0         | 1          | 0         |
      | 6       | 6        | 6            | 0        | 1         | 0        | 1         | 0          | 1         |
      | 7       | 7        | 7            | 0        | 0         | 1        | 1         | 0          | 0         |
      | 8       | 8        | 8            | 1        | 1         | 0        | 0         | 1          | 1         |
      | 9       | 9        | 9            | 1        | 0         | 1        | 0         | 1          | 1         |
      | 10      | 10       | 10           | 1        | 1         | 0        | 0         | 1          | 1         |

  #### Close Scenarios
  Scenario: Change STP settings
    Given Go to the app
    When Click STP option of the Protocols
    Then Choose STP Mode as "Close"
    Then Click STP Apply button
    Then Click confirm OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check Close Settings from .cfg file
    Then Should see "stpSystemMode" value as "3"

  Scenario: Restart the device
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check Close Settings from .cfg file
    Then Should see "stpSystemMode" value as "3"

  Scenario: Restore
    Given Go to the app
    When Should see the aselsan logo
    Then Click Restore option of the System Tools
    And Click confirm OK Button
