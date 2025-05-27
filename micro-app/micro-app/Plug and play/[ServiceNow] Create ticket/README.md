# ServiceNow Template

## Description
This template provides a user-friendly interface for creating ServiceNow incident tickets with essential information.

## Features
- Simple ticket creation form
- Required fields:
  - Ticket title
  - Description
  - Urgency level selection
  - Category selection
- Success/failure notifications
- Ticket number confirmation

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [ServiceNow connector documentation](https://docs.lumapps.com/docs/ls/content/4743652518001693/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l709725510492807extensions)
- [ServiceNow API documentation](https://www.servicenow.com/docs/bundle/yokohama-api-reference/page/build/applications/concept/api-rest.html)

## Inputs / Variables to Set
None

## Necessary API Scopes
Service Now has no table-level granular API scopes according to [this community conversation](https://www.servicenow.com/community/platform-privacy-security-blog/restrict-access-available-to-oauth-client-using-rest-api-auth/ba-p/2524938)

So we use "all applications" scope.

## Comments on Functioning
1. **ticketForm**: Ticket creation form with hardcoded fields
2. **getUser**: Gets user information from email
3. **createTicket**: Creates ticket in ServiceNow
   - A. **success**: Success notification
   - B. **failure**: Failure notification

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
