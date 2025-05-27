# Zendesk Ticket List Micro-app

## Description
This micro-app displays a user's recent Zendesk support tickets in a clean, organized list format. It shows the latest open tickets with their status and provides direct links to view ticket details.

## Features
- Displays the 5 most recent open tickets
- Shows ticket ID, subject, and current status
- Direct links to individual tickets
- Empty state handling
- Automatic user context detection
- Status filtering (new, open, pending, in progress, on-hold)
- Responsive column layout
- Link to full Zendesk portal

## Connector Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Zendesk Connector](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l21425652206965984extensions)
- [Zendesk API Documentation](https://developer.zendesk.com/api-reference/)

## Necessary API Scopes
- tickets:read - This scope allows the micro-app to retrieve and view ticket information from Zendesk. It provides read-only access to ticket data, including ticket IDs, subjects, statuses, and other details necessary for displaying the user's tickets.

## Display Components
- Ticket List Header
  - Issue column (300px width)
  - Status column (flexible width)
- Ticket Entries
  - Clickable ticket ID and subject
  - Current status indicator
- "My requests" button linking to Zendesk portal

## Technical Details
- Fetches tickets using user's email
- Descending sort order (newest first)
- Limited to 5 tickets per page
- Filtered statuses: new, open, pending, in progress, on-hold
- Conditional rendering based on ticket count
- Adaptive card version 1.5

## Comments on Functioning
1. Data Retrieval:
   - Automatically fetches tickets for logged-in user
   - Filters for active tickets only
   - Shows empty state if no tickets found

2. Display Logic:
   - Shows header only when tickets exist
   - Each ticket links to its detailed view
   - Consistent spacing and layout
   - Responsive column widths

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)