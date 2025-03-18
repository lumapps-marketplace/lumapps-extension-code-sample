# Jira Template

## Description
This template provides a dynamic form interface for creating Jira tickets with dynamic fields based on project and issue type.

## Features
- Dynamic form generation based on:
  - Project selection
  - Issue type selection
- Support for various mandatory field types:
  - Text fields (Summary, Description, Environment)
  - Select fields (Priority, Security)
  - User fields (Assignee, Reporter)
  - Custom fields
- Real-time field validation
- Error handling and display
- Success confirmation with ticket link

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Atlassian connector documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l40402265690312855extensions)
- [Jira API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)

## Inputs / Variables to Set
- **atlassian_url**: Atlassian URL (ex : https://domain.atlassian.net/)
## Comments on Functioning
1. **whoAmI**: Gets Atlassian userId from LumApps email
2. **getproject**: Gets available projects from userId
3. **chooseproject**: Chooses project where to post ticket
4. **splitPropjectNameId**: Splits project name and id from previous adaptive card
5. **itmf**: Retrieves metadata for ticket types
6. **chooseIssueType**: Chooses issue type from available options
7. **splitIssueName**: Splits issue name and id from previous adaptive card
8. **parseData**: Filters and formats information for better display in next adaptive card
9. **ticketForm**: Creates dynamic form based on metadata
10. **preparePost**: Prepares data for API call
11. **create ticket**: Creates ticket in Jira
      - A. **Success**: Displays ticket link
      - B1. **parseError**: Formats data from error message
      - B2. **error**: Displays error message

- This app need a little bit of custom css for removing empty fields from the form

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
