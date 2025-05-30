# Google Calendar Out of Office Template

## Description
This template helps you create a new out of office event in Google Calendar.

## Features
- Set out of office duration (start and end dates and times)
- Choose decline mode (none, new meetings only, new and existing meetings)
- Set a decline message if needed

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Google Connector Documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l6007003038797828extensions) Needed scope for the connector: https://www.googleapis.com/auth/calendar.events
- [Google Calendar API Documentation](https://developers.google.com/calendar/api/)

## Inputs / Variables to Set
None

## Necessary API Scopes
- https://www.googleapis.com/auth/calendar - This scope provides full access to the user's Google Calendar, allowing the micro-app to create, read, update, and delete events, including out-of-office events

## Comments on Functioning
1. **setTime**: Select start and end dates for the out of office event and select decline mode
2. **parseDate**: Formats the selected date and time
3. **setDeclineMessage**: If decline mode is not "none", prompts user to enter a decline message
4. **postOooWithDeclineMessage**: Create a calendar out of office event with the selected decline mode and decline message
5. **postOoo**: Create a calendar out of office event with the selected decline mode
6. - A. **postOk**: Displays a success message with a link to the created event
   - B. **postNok**: Displays a failure message

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
