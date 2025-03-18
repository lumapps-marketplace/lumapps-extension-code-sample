# Google Calendar Template

## Description
This template helps you schedule meetings with other users by finding available time slots and creating calendar events.

## Features
- Select a meeting participant from provided LumApps users
- Choose meeting duration
- Find available time slots based on participants' calendars
- Create calendar events with automatic invitations
- Customizable meeting title and description
- Automatic time zone handling (Europe/Paris)

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Google Connector Documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l6007003038797828extensions)
- [Google Calendar API Documentation](https://developers.google.com/calendar/api/)

## Inputs / Variables to Set
None

## Comments on Functioning
1. **getuser**: Retrieves user information in LumApps API
2. **selectuser**: Selects a user from the list of users, select slots and duration
3. **parseSlot**: Formats the selected time slot
4. **findtimeslots**: Returns busy times for current and selected users
5. **findsAvailability**: Returns available times for current and selected users
6. **chooseSlot**: Displays all available slots
7. **parseData**: Formats the selected meeting start time and adds duration to get meeting end time
8. **postMeet**: Creates a calendar event with the selected user
   - A. **resultok**: Displays a success message with a link to the created event  
   - B. **resultnok**: Displays a failure message   

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
