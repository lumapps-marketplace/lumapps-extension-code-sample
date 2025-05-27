# Google Calendar Find Meeting Time And Room Template

## Description
This template helps you schedule meetings with other users by finding available time slots and room, and creating calendar events.

## Features
- Search and select a meeting participant from provided LumApps users
- Choose meeting duration
- Find available time slots based on participants' calendars
- Find available rooms based on chosen time slots
- Create calendar events with automatic invitations
- Customizable meeting title and description
- Automatic time zone handling (Europe/Paris)

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Google Connector Documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l6007003038797828extensions)
- [Google Calendar API Documentation](https://developers.google.com/calendar/api/)
- [Google Admin SDK Documentation](https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.calendars/list)

## Inputs / Variables to Set
None

## Necessary API Scopes
- https://www.googleapis.com/auth/calendar - This scope provides full access to the user's Google Calendar, allowing the micro-app to create, read, update, and delete events, including out-of-office events
- https://www.googleapis.com/auth/admin.directory.resource.calendar - This scope allows access to calendar resources in the Google Workspace directory, enabling the micro-app to properly handle resource calendars and meeting rooms when setting out-of-office responses

## Comments on Functioning
1. **searchuser**: Search for a user in LumApps API
2. **getuser**: Retrieves user information in LumApps API depending on the provided query
3. **selectuser**: Selects a user from the list of users, select slots and duration
4. **parseSlot**: Formats the selected time slot
5. **findtimeslots**: Returns busy times for current and selected users
6. **findsAvailability**: Returns available times for current and selected users
7. **chooseSlot**: Displays all available slots
8. **parseData**: Formats the selected meeting start time and adds duration to get meeting end time
9. **getRooms**: Retrieves all rooms from the Google Calendar API
10. **parseRoom**: Formats the retrieved room information for API call
11. **getRoomSlot**: Retrieves the rooms availability for the selected time slot
12. *getAvailableRoom**: Returns available rooms for the selected time slot
13. **chooseRoom**: Select room to book
14. - A. postMeetWithRoom**: Creates a calendar event with the selected user and room
    - B. **postMeet**: Creates a calendar event with the selected user
15. - A. **resultok**: Displays a success message with a link to the created event. 
    - B. **resultnok**: Displays a failure message   

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
