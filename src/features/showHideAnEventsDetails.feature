Feature: Show/hide an events details

  Scenario: An event element is collapsed by default
    Given user hasnt clicked on a specific event
    When user doesn't click on a specific event
    Then the event details are collapsed

  Scenario: User can expand an event to see its details
    Given user wants to view details on an event
    When user clicks on a spefific event
    Then the event expands to show the event details

  Scenario: User can collapse an event to hide its details
    Given user is viewing the event details
    When user clicks a button to collapse details
    Then the event detail collapse to hide details