# Outlook Find Meeting Time and Room

## Description
This template helps users find suitable meeting times and locations by checking availability across multiple participants' calendars using Outlook.

## Features
- Search and select a meeting participant from provided LumApps users
- Find available time slots based on participants' calendars
- Create calendar events with automatic invitations
- Display result of meeting creation

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Outlook Connector Documentation](https://docs.lumapps.com/docs/ls/content/6928751870194695/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l4886727041758244extensions)
- [General Outlook Documentation](https://learn.microsoft.com/en-us/outlook/rest/reference)

## Inputs / Variables to Set
None

## Comments on Functioning
1. **searchuser**: Search for a user in LumApps API
2. **getuser**: Retrieves user information in LumApps API depending on the provided query
3. **selectuser**: Displays a list of users to select and desired meeting slot
4. **parseSlot**: Formats date and time
5. **findmeetingtimes**: Finds available meeting times from Graph API
6. **chooseMeetingTime**: Displays available meeting times with selected user
7. **getEndChoosenSlot**: Gets end time of chosen slot
8. **getLocation**: Parses suggested location for the chosen time slot
9. **chooseRoom**: Displays suggested rooms for the chosen time slot
10. - A. **postMeet**: Creates calendar event with Graph API
- B. **postMeetWithRoom**: Creates calendar event with Graph API and selected room
11. - A. **displayResult**: Displays result of meeting creation
- B. **resultNok**: Display error message

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
