Feature: Protocols VLAN Feature

  Scenario: Open Update 802.1q Table
    Given Click Network option of navigation bar
    When Click VLAN option of the Network
    Then Click disabled button to enable
    Then Click update button

  Scenario Outline: Select connection types
    Then Select Connection Type "<connType>" for Port "<portNum>"
    Examples:
      | connType | portNum |
      | Access   | 1       |
      | Trunk    | 2       |
      | Access   | 3       |
      | Trunk    | 4       |
      | Access   | 5       |
      | Trunk    | 6       |
      | Access   | 7       |
      | Trunk    | 8       |

  Scenario Outline: Set Untagged Vid
    Then Type Untagged Vid "<untaggedVid>" for Port "<portNum>"
    Examples:
      | untaggedVid | portNum |
      | 1           | 1       |
      | 3           | 3       |
      | 41          | 4       |
      | 5           | 5       |
      | 7           | 7       |
      | 81          | 8       |

  Scenario Outline: Check Discard Tagged
    Then Check Discard Tagged for Port "<portNum>"
    Examples:
      | portNum |
      | 1       |
      | 5       |

  Scenario Outline: Set Tagged Vid
    Then Type Tagged Vid "<taggedVid>" for Port "<portNum>"
    Examples:
      | taggedVid | portNum |
      | 2         | 2       |
      | 42        | 4       |
      | 6         | 6       |
      | 82        | 8       |

  Scenario Outline: Check Discard Untagged
    Then Check Discard Untagged for Port "<portNum>"
    Examples:
      | portNum |
      | 2       |
      | 6       |

  Scenario: Update the table
    Then Click Update OK button

  Scenario: Change VLAN fields
    Then Check GVRP field
    #Then Type Management VLAN ID as "10"

  Scenario: Apply to the changes
    Then Click Apply button
    Then Click alert OK Button

  Scenario: Save configuration
    Then Click Save Configuration button
    Then Click confirm OK Button
    Then Click alert OK Button

  Scenario Outline: Check the updated Connection Type fields on page
    Then Should see Connection Type as "<connType>" for Port "<portNum>"
    Examples:
      | connType | portNum |
      | Access   | 1       |
      | Trunk    | 2       |
      | Access   | 3       |
      | Trunk    | 4       |
      | Access   | 5       |
      | Trunk    | 6       |
      | Access   | 7       |
      | Trunk    | 8       |
      | Access   | 9       |
      | Access   | 10      |

  Scenario Outline: Check the updated Untagged Vid fields on page
    Then Should see Untagged Vid as "<untaggedVid>" for Port "<portNum>"
    Examples:
      | untaggedVid | portNum |
      | 1           | 1       |
      | 3           | 3       |
      | 41          | 4       |
      | 5           | 5       |
      | 7           | 7       |
      | 81          | 8       |

  Scenario Outline: Check the updated Discard Tagged fields on page
    Then Should see Discard Tagged is checked for Port "<portNum>"
    Examples:
      | portNum |
      | 1       |
      | 5       |

  Scenario Outline: Check the updated Tagged Vid fields on page
    Then Should see tagged Vid as "<taggedVid>" for Port "<portNum>"
    Examples:
      | taggedVid | portNum |
      | 2         | 2       |
      | 42        | 4       |
      | 6         | 6       |
      | 82        | 8       |

  Scenario Outline: Check the updated Discard Untagged fields on page
    Then Should see Discard Untagged is checked for Port "<portNum>"
    Examples:
      | portNum |
      | 2       |
      | 6       |

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check VLAN values from .cfg file
    Then Should see "vlGvrpState" value as "1"
    #Then Should see "vlMangVidValue" value as "10"
    Then Should see "vl8021qStatus" value as "1"

  Scenario Outline: Check 802.1q values from .cfg file
    Then Should see "vlLinkType" value from file as "<connType>" for port "<portNum>"
    Then Should see "vlEgrUntaggedVid" value from file as "<untaggedVid>" for port "<portNum>"
    Then Should see "vlIngDefaultVid" value from file as "<defaultVid>" for port "<portNum>"
    Then Should see "vlEgrTaggedVid" value from file as "<taggedVid>" for port "<portNum>"
    Then Should see "vlIngDiscardTagged" value from file as "<discardTagged>" for port "<portNum>"
    Then Should see "vlIngDiscardUntagged" value from file as "<discardUntagged>" for port "<portNum>"
    Examples:
      | connType | portNum | untaggedVid | defaultVid | taggedVid | discardTagged | discardUntagged |
      | 1        | 1       | 1           | 1          | 0         | 1             | 0               |
      | 2        | 2       | 0           | 1          | 2         | 0             | 1               |
      | 1        | 3       | 3           | 3          | 0         | 2             | 0               |
      | 2        | 4       | 41          | 1          | 42        | 0             | 2               |
      | 1        | 5       | 5           | 5          | 0         | 1             | 0               |
      | 2        | 6       | 0           | 1          | 6         | 0             | 1               |
      | 1        | 7       | 7           | 7          | 0         | 2             | 0               |
      | 2        | 8       | 81          | 1          | 82        | 0             | 2               |
      | 1        | 9       | 1           | 1          | 0         | 2             | 0               |
      | 1        | 10      | 1           | 1          | 0         | 2             | 0               |

  Scenario: Restart the device
    Then Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check VLAN values from .cfg file after restart
    Then Should see "vlGvrpState" value as "1"
    #Then Should see "vlMangVidValue" value as "10"
    Then Should see "vl8021qStatus" value as "1"

  Scenario Outline: Check 802.1q values from .cfg file after restart
    Then Should see "vlLinkType" value from file as "<connType>" for port "<portNum>"
    Then Should see "vlEgrUntaggedVid" value from file as "<untaggedVid>" for port "<portNum>"
    Then Should see "vlIngDefaultVid" value from file as "<defaultVid>" for port "<portNum>"
    Then Should see "vlEgrTaggedVid" value from file as "<taggedVid>" for port "<portNum>"
    Then Should see "vlIngDiscardTagged" value from file as "<discardTagged>" for port "<portNum>"
    Then Should see "vlIngDiscardUntagged" value from file as "<discardUntagged>" for port "<portNum>"
    Examples:
      | connType | portNum | untaggedVid | defaultVid | taggedVid | discardTagged | discardUntagged |
      | 1        | 1       | 1           | 1          | 0         | 1             | 0               |
      | 2        | 2       | 0           | 1          | 2         | 0             | 1               |
      | 1        | 3       | 3           | 3          | 0         | 2             | 0               |
      | 2        | 4       | 41          | 1          | 42        | 0             | 2               |
      | 1        | 5       | 5           | 5          | 0         | 1             | 0               |
      | 2        | 6       | 0           | 1          | 6         | 0             | 1               |
      | 1        | 7       | 7           | 7          | 0         | 2             | 0               |
      | 2        | 8       | 81          | 1          | 82        | 0             | 2               |
      | 1        | 9       | 1           | 1          | 0         | 2             | 0               |
      | 1        | 10      | 1           | 1          | 0         | 2             | 0               |

  Scenario: Disable VLAN
    Given Click Network option of navigation bar
    When Click VLAN option of the Network
    Then Click enabled button to disable
    Then Click confirm OK Button
    Then Should not see VLAN 802.1q area

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check VLAN values from .cfg file after disabling VLAN
    Then Should see "vlGvrpState" value as "1"
    #Then Should see "vlMangVidValue" value as "10"
    Then Should see "vl8021qStatus" value as "1"

  Scenario Outline: Check 802.1q values from .cfg file after restart
    Then Should see "vlLinkType" value from file as "<connType>" for port "<portNum>"
    Then Should see "vlEgrUntaggedVid" value from file as "<untaggedVid>" for port "<portNum>"
    Then Should see "vlIngDefaultVid" value from file as "<defaultVid>" for port "<portNum>"
    Then Should see "vlEgrTaggedVid" value from file as "<taggedVid>" for port "<portNum>"
    Then Should see "vlIngDiscardTagged" value from file as "<discardTagged>" for port "<portNum>"
    Then Should see "vlIngDiscardUntagged" value from file as "<discardUntagged>" for port "<portNum>"
    Examples:
      | connType | portNum | untaggedVid | defaultVid | taggedVid | discardTagged | discardUntagged |
      | 1        | 1       | 1           | 1          | 0         | 1             | 0               |
      | 2        | 2       | 0           | 1          | 2         | 0             | 1               |
      | 1        | 3       | 3           | 3          | 0         | 2             | 0               |
      | 2        | 4       | 41          | 1          | 42        | 0             | 2               |
      | 1        | 5       | 5           | 5          | 0         | 1             | 0               |
      | 2        | 6       | 0           | 1          | 6         | 0             | 1               |
      | 1        | 7       | 7           | 7          | 0         | 2             | 0               |
      | 2        | 8       | 81          | 1          | 82        | 0             | 2               |
      | 1        | 9       | 1           | 1          | 0         | 2             | 0               |
      | 1        | 10      | 1           | 1          | 0         | 2             | 0               |

  Scenario: Restart the device after disabling VLAN
    When Click Reboot option of the System Tools
    Then Click confirm OK Button
    Then Wait "120" seconds
    Then Go to the app
    And Should see the aselsan logo

  Scenario: Export Configuration File
    Then Export configuration file

  Scenario: Check VLAN values from .cfg file after [disabling VLAN] restart
    Then Should see "vlGvrpState" value as "1"
    #Then Should see "vlMangVidValue" value as "10"
    Then Should see "vl8021qStatus" value as "1"

  Scenario Outline: Check 802.1q values from .cfg file after [disabling VLAN] restart
    Then Should see "vlLinkType" value from file as "<connType>" for port "<portNum>"
    Then Should see "vlEgrUntaggedVid" value from file as "<untaggedVid>" for port "<portNum>"
    Then Should see "vlIngDefaultVid" value from file as "<defaultVid>" for port "<portNum>"
    Then Should see "vlEgrTaggedVid" value from file as "<taggedVid>" for port "<portNum>"
    Then Should see "vlIngDiscardTagged" value from file as "<discardTagged>" for port "<portNum>"
    Then Should see "vlIngDiscardUntagged" value from file as "<discardUntagged>" for port "<portNum>"
    Examples:
      | connType | portNum | untaggedVid | defaultVid | taggedVid | discardTagged | discardUntagged |
      | 1        | 1       | 1           | 1          | 0         | 1             | 0               |
      | 2        | 2       | 0           | 1          | 2         | 0             | 1               |
      | 1        | 3       | 3           | 3          | 0         | 2             | 0               |
      | 2        | 4       | 41          | 1          | 42        | 0             | 2               |
      | 1        | 5       | 5           | 5          | 0         | 1             | 0               |
      | 2        | 6       | 0           | 1          | 6         | 0             | 1               |
      | 1        | 7       | 7           | 7          | 0         | 2             | 0               |
      | 2        | 8       | 81          | 1          | 82        | 0             | 2               |
      | 1        | 9       | 1           | 1          | 0         | 2             | 0               |
      | 1        | 10      | 1           | 1          | 0         | 2             | 0               |

  Scenario: Restore
    Given Go to the app
    When Should see the aselsan logo
    Then Click Restore option of the System Tools
    And Click confirm OK Button
