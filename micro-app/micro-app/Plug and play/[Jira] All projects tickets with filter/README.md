# Jira Template

## Description
This template provides a comprehensive view of Jira tickets across all projects with advanced filtering capabilities.

## Features
- View all tickets across multiple projects
- Filter tickets by project
- Display key ticket information:
  - Ticket ID
  - Status
  - Summary
  - Priority
  - Due Date
- Direct links to tickets in Jira
- Dynamic visibility controls for different views

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Atlassian connector documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l40402265690312855extensions)
- [Jira API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)

## Inputs / Variables to Set
- **atlassian_url**: Atlassian URL (ex : https://domain.atlassian.net/)

## Comments on Functioning
1. **Getaccid**: Gets Atlassian userId from LumApps email
2. **getUserTickets**: Retrieves tickets from all Jira projects
3. **parseData**: Parses information to retrieve only useful data
4. **getActionSet**: Creates dynamic body for adaptive card from parsed data
5. **displayWithFilters**: Displays tickets and filters in an adaptive card

Optional: Multiple log adaptive cards for debugging

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
