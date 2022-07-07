# meet
#### meet is a React application that allows users to discover events based on their location and personal search criteria.
##### Built using TDD.

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user, I should be able to show/hide an event’s details, so that I can view details for one specific event at a given time.

•	Scenario 1: An event element is collapsed by default
o	Given – The user hasn’t clicked on a specific events
o	When – The user hasn’t clicked on a specific event
o	Then – The event details are collapsed
•	Scenario 2: User can expand an event to see its details
o	Given – The user wants to view details on an event
o	When – The user clicks on an event
o	Then – The event expands to show the event details 
•	Scenario 3: User can collapse an event to hide its details
o	Given – The user is viewing an events details
o	When – The user clicks a button to collapse
o	Then – The event details collapse to hide details

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I should be able to specify the number of events, so that I can control the amount of events I can see.

•	Scenario 1: When user hasn’t specified a number, 32 is the default number
o	Given – The user hasn’t specified a number of events
o	When – The user views the list of events
o	Then – 32 events will be displayed
•	Scenario 2: User can change the number of events they want to see
o	Given – The user desires to view a specific number of events
o	When – The user chooses how many events they want to view
o	Then – The number of events displayed reflects the request of the user

FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I should be able to use the app when offline, so that I do not require wifi to utilize the app.

•	Scenario 1: Show cached data when there’s no internet connection
o	Given – The user has no active internet connection
o	When – The user requests app data
o	Then – The data will be available to the user offline
•	Scenario 2: Show error when user changes the settings (city, time range)
o	Given – The user desires to change information while offline
o	When –The user attempts changes the settings (city, time range)
o	Then – An error message will be displayed

FEATURE 5: DATA VISUALIZATION
As a user, I should be able to view the app event data, so that I can view upcoming events in each city.

•	Scenario 1: Show a chart with the number of upcoming events in each city
o	Given – The user wants to view upcoming events
o	When – The user navigates to the chart with upcoming events
o	Then – A chart displaying the number of upcoming events will be displayed
