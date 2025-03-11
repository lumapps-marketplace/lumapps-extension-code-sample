# Outlook Find Meeting Time

## Description
This template helps users find suitable meeting times by checking availability across multiple participants' calendars using Outlook.

<img src="[Outlook]%20Find%20meeting%20time2.png" width="49%"></img> <img src="[Outlook]%20Find%20meeting%20time.png" width="49%"></img> 

## Features
- Select a meeting participant from provided LumApps users
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
1. **getusers**: Retrieves all users provided in LumApps platform
2. **selectuser**: Displays a list of users to select and desired meeting slot
3. **parseSlot**: Formats date and time
4. **findmeetingtimes**: Finds available meeting times from Graph API
5. **chooseMeetingTime**: Displays available meeting times with selected user
6. **getEndChoosenSlot**: Gets end time of chosen slot (start + 30 minutes)
7. **postMeet**: Creates calendar event with Graph API
8. **displayResult**: Displays result of meeting creation
- Various adaptive cards for logs

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
