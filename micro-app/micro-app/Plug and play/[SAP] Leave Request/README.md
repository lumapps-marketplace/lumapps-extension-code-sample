# SAP SuccessFactor Leave request Template

## Description
This template let end-users submit leave request to SAP.

## Features
- Check time off balance
- Submit leave request to SAP SuccessFactors

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [SAP Connector Documentation](https://docs.lumapps.com/docs/ls/content/1170870708135507/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l6889476668723693extensions)
- [SAP SF API Documentation](https://api.sap.com/products/SAPSuccessFactors/overview)

## Inputs / Variables to Set
None

## Necessary API Scopes
- time_off_read - Required to check time off balance and view existing leave requests
- time_off_write - Required to submit new leave requests to SAP SuccessFactors
- user_read - Required to access user information and manager relationships

## Comments on Functioning
1. **getManager**: retrieve user's manager ID from SAP
2. **getTeamMembers**: retrieve user's with the same manager ID from SAP
3. **parseData**: format team IDs for API call
4. **getSAPTeamPlanning**: get team absence for the next 7 days
5. **parseCalendar**: parse API response to display in adaptive card
6. **parseTimeToTimestamp**: parse date to epoch timestamp
7. - A. **resultok**: Display adaptive card with team planning
   - B. **resultnok**: Display error message

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
