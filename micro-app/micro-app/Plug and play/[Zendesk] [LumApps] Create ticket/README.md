# Zendesk LumApps Create Ticket

## Description
This micro-app provides a simple interface for users to create support tickets in Zendesk directly from LumApps. It offers a streamlined form with essential fields for ticket creation and provides immediate feedback on submission status.

## Features
- User-friendly ticket creation form
- Required fields:
  - Subject
  - Description
  - Priority selection (Minor, Moderate, Major, Critical)
- Automatic user association using LumApps email
- Success confirmation with ticket ID and link
- Error handling with retry option
- Clean and intuitive interface

- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Zendesk Connector](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l21425652206965984extensions)
- [Zendesk API Documentation](https://developer.zendesk.com/api-reference/)

## Necessary API Scopes
- tickets:write - This scope allows the micro-app to create new tickets in Zendesk on behalf of the user

## Inputs / Variables to Set
None - The micro-app uses the current user's email automatically

## Comments on Functioning
1. Start : Initiates the micro-app workflow
2. requestform : Displays the ticket creation form with fields for subject, description, and priority
3. createrequest : Submits the form data to Zendesk API to create a new ticket
4. Router : Determines whether to show success or error message based on API response
5. Success : Displays confirmation with ticket ID and link to view the ticket
6. Error : Shows error message with option to retry

## Requirements
- Zendesk connector must be properly configured
- User must have a valid email address in LumApps that matches their Zendesk account

## Link to Microapp Import Documentation
Microapp Import Documentation