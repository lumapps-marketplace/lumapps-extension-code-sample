# Google Calendar and Gmail Out of Office Template

## Description
This template helps you set your vacation responder on Gmail and create a new out of office event in Google Calendar.

## Features
- Set out of office duration (start and end dates and times)
- Choose which app to apply the out of office event to (Gmail or Google Calendar)
- Choose decline mode and set a decline message

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Google Connector Documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l6007003038797828extensions)
- [Google Calendar API Documentation](https://developers.google.com/calendar/api/) Needed scope for the connector: https://www.googleapis.com/auth/calendar.events
- [Gmail API Documentation](https://developers.google.com/workspace/gmail/api/guides) Needed scope for the connector: https://www.googleapis.com/auth/gmail.settings.basic

## Inputs / Variables to Set
None

## Comments on Functioning
1. **setDateAndApps**: Select start and end dates for the out of office event select which apps to apply the out of office event to
2. **setSettings**: Set vacation responder on Gmail and set out of office decline mode on Google Calendar
3. **parseDateToUNix**: Format the start and end dates to UNIX timestamps for Gmail API call
4. **postGmail**: Update the vacation responder settings on Gmail
5. **parseDateToIso**: Format the start and end dates to ISO format for Google Calendar API call
6. **postCalendar**: Create a calendar out of office event with the selected decline mode and decline message
5. - A. **postOk**: Displays a success message with a link to the created event and/or Gmail settings
   - B. **postNok**: Displays a failure message

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
