# Jira Template

## Description
This template provides a focused view of Jira tickets for current user for a specific project, displaying them in an organized and easily readable format.

## Features
- Project-specific ticket display
- Comprehensive ticket information:
  - Issue key
  - Status
  - Summary (with direct link to Jira)
  - Priority
  - Issue Type
- Clean columnar layout
- Empty state handling

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Atlassian connector documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l40402265690312855extensions)
- [Jira API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)

## Inputs / Variables to Set
- **projectname**: Project name to filter tickets
- **atlassian_url**: Atlassian URL (ex : https://domain.atlassian.net/)

## Comments on Functioning
1. **getuser**: Gets information about the current user
2. **Getaccid**: Gets the Atlassian userId from the LumApps email
3. **Jira Get User ticket**: Retrieves tickets from the specified Jira project
4. **Display User list**: Displays tickets in an organized and easily readable format

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
