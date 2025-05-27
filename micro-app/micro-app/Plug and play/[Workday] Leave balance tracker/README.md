# Workday Leave Balance Tracker

## Description
This template provides a user-friendly interface for viewing and managing Workday leave balances.

## Features
- Simple leave balance management interface
- Leave balance listing with essential information
- Leave balance details view
- Leave balance status updates

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Workday connector documentation](https://docs.lumapps.com/docs/ls/content/5596050861954281/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l4754802368470471extensions)
- [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/)

## Inputs / Variables to Set
- **department**: Your department name in Workday ex : lumapps_dpt1

## Necessary API Scopes
- Time Off and Leave - This scope provides access to Workday's time off data, including leave balances, accruals, and time-off requests. It allows the micro-app to retrieve and display the user's current leave balances.

## Comments on Functioning
1. **getworkerid**: Gets worker ID from current email
2. **getbalances**: Gets leave balances from Workday
3. **displayleavebalances**: Displays leave balances in an organized and easily readable format

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
