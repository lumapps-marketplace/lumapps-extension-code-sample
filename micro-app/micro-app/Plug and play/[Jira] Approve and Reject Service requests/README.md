# Jira Approve and Reject Service Requests

## Description
This template provides a streamlined interface for approving and rejecting Jira service requests that are pending your approval, allowing you to manage service requests directly from LumApps.

## Features
- View all service requests pending your approval
- Approve or reject requests with a single click
- Display key ticket information:
  - Requester name
  - Status
  - Summary
  - Creation date
- Direct links to tickets in Jira
- Instant feedback on approval/rejection actions

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Atlassian connector documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l40402265690312855extensions)
- [Jira API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)
- [Jira Service Desk API Documentation](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/)

## Necessary API Scopes
- read:jira-service-management - Allows the micro-app to read service requests and approvals pending for the user
- write:jira-service-management - Enables the micro-app to submit approval and rejection decisions

## Inputs / Variables to Set
- **jira_project**: Jira project key (ex : LMV)

## Comments on Functioning
1. **Get User**: Retrieves the Jira user based on LumApps email
2. **Get Tickets**: Fetches service requests pending the user's approval
3. **Display Tickets**: Shows tickets with approve/reject options in an adaptive card
4. **Approval Flow**: When approved, identifies the pending approval ID and submits approval
5. **Rejection Flow**: When rejected, identifies the pending approval ID and submits rejection
6. **Confirmation**: Displays success or error messages based on the action result

## Requirements
- Jira Service Management (formerly Service Desk) must be enabled
- User must have appropriate permissions to approve/reject requests
- The JQL query is configured to show tickets from project "LMV" - modify as needed for your environment

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
