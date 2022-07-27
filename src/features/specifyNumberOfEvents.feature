Feature: Specify number of events

  Scenario: When user hasnt specified a number, 32 is the default number
    Given user hasnt specified a preferred number of events
    When user views list of events
    Then 32 events will be displayed

  Scenario: User can change the number of events they want to see
    Given user desires to view a specific number of events
    When user chooses how many events they want to view
    Then the number of events displayed reflects the request of the user
