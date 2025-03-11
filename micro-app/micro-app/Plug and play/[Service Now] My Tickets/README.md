# ServiceNow Template

## Description
This template provides a user-friendly interface for viewing and managing ServiceNow tickets.
<img src="[Service%20Now]%20My%20Tickets.png" width="50%"></img>

## Features
- Simple ticket management interface
- Ticket listing with essential information
- Ticket details view
- Ticket status updates

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [ServiceNow connector documentation](https://docs.lumapps.com/docs/ls/content/4743652518001693/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l709725510492807extensions)
- [ServiceNow API documentation](https://www.servicenow.com/docs/bundle/yokohama-api-reference/page/build/applications/concept/api-rest.html)

## Inputs / Variables to Set
None

## Comments on Functioning
1. **getUser**: Gets user information from email
2. **Get Snow Domain**: Gets ServiceNow domain from response and JS parsing
3. **get_tickets**: Gets tickets from ServiceNow
4. **displaytickets**: Displays tickets in a list
5. **closeTicket**: Option to close a specific ticket
    - A. **success**: Success notification
    - B. **failure**: Failure notification

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
