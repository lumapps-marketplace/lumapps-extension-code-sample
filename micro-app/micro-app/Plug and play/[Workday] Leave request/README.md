# Workday Leave Request

## Description
This template provides a user-friendly interface for submitting leave requests through Workday, with automatic balance checking and date handling.

## Features
- Leave type selection
- Date range selection
- Automatic balance checking
- Smart time calculation
- Validation checks

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Workday connector documentation](https://docs.lumapps.com/docs/ls/content/5596050861954281/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l4754802368470471extensions)
- [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/)

## Inputs / Variables to Set
- **department**: Your department name in Workday ex : lumapps_dpt1

## Necessary API Scopes
- Time Off and Leave - This scope provides access to Workday's time off data, including leave balances, accruals, and time-off requests. It allows the micro-app to retrieve and display the user's current leave balances.

## Comments on Functioning
1. **getworker**: Gets worker ID from current email
2. **getbalances**: Gets leave balances from Workday API
3. **geteligibletimes**: Gets available leave types from Workday API
4. **mapping**: Maps leave types to available balances
5. **ac**: Asks for user input
6. **generatedaysarray**: Generates an array of days for the leave request
7. **leaverequest**: Submits leave request to Workday API
    - 7.A. **success**: Displays success message
    - 7.B. **failureleaverequest**: Displays failure message

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
