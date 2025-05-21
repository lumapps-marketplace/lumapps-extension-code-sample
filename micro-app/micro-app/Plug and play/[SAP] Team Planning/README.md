# SAP SuccessFactor Team Planning

## Description
This template displays the connected user's team planning for the next 7 days.

## Features
- Displays the connected user's team planning for the next 7 days.

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [SAP Connector Documentation](https://docs.lumapps.com/docs/ls/content/1170870708135507/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l6889476668723693extensions)
- [SAP SF API Documentation](https://api.sap.com/products/SAPSuccessFactors/overview)

https://api.sap.com/api/Balances/resource/Time_Type_Balances
https://api.sap.com/api/ECTimeOff/path/post_EmployeeTime
https://help.sap.com/docs/successfactors-platform/sap-successfactors-api-reference-guide-odata-v2/employeetime
https://api.sap.com/products/SAPSuccessFactors/overview

## Inputs / Variables to Set
None

## Comments on Functioning
1. **getUserID**: retrieve user ID from SAP
2. **getStartDate**: choose start date
3. **parseStartDate**: parse start date to YYYY-MM-DD format
4. **getBalance**: retrieve user's time off balance
5. **leaveRequestForm**: select leave type, end type and provide reason (optional)
6. **parseTimeToTimestamp**: parse date to epoch timestamp
7. **submitLeaveRequest**: submit leave request to SAP
8. - A. **sucess**: leave request submitted successfully
   - B. **error**: leave request submission failed

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
