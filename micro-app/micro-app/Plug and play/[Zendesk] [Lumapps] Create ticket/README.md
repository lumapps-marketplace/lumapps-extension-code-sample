# Zendesk Ticket Creation Micro-app

## Description 
This micro-app provides an interface for creating Zendesk support tickets directly from LumApps. It uses Adaptive Cards for the form interface and handles the ticket creation through the Zendesk API.

## Features
- Simple ticket creation form with:
  - Subject field (required)
  - Description field (required, multiline)
  - Priority selection (required):
    - Minor
    - Moderate
    - Major
    - Critical
- Automatic user email capture
- Success/Error handling with visual feedback
- Direct link to created ticket in success message

## Technical Flow
1. Form Submission (`requestform`):
   - Adaptive Card form v1.5
   - Required field validation
   - Submit button with positive style

2. API Integration (`createrequest`):
   - POST request to Zendesk API `/api/v2/requests`
   - Zendesk connector authentication
   - Custom field handling for priority (ID: 360016785700)
   - Automatic email capture from user context

3. Response Handling:
   - Success: Status 200 or 201
   - Error: Fallback handling with retry option
   - Success message includes clickable ticket link
   - Error message with retry capability

## Response States
- Success Card:
  - Green checkmark icon
  - Success message with ticket ID
  - Clickable link to ticket
  - OK button to acknowledge

- Error Card:
  - Error icon
  - Error message
  - Retry button for new attempt

## Connector Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Zendesk Connector](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l21425652206965984extensions)
- [Zendesk API Documentation](https://developer.zendesk.com/api-reference/)

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
