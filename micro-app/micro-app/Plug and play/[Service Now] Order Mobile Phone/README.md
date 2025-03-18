# ServiceNow Mobile Phone Order Micro-app

## Description
This microapp enables users to order mobile phones through ServiceNow's service catalog. It provides a user-friendly interface to browse available phones, customize options, and submit orders directly through the ServiceNow system.

## Features
- Interactive mobile phone catalog with images and descriptions
- Dynamic form generation for phone-specific options
- Shopping cart functionality
- Automatic user identification through email
- Order confirmation with tracking capabilities
- Direct integration with ServiceNow service catalog
- Expandable product descriptions
- Real-time price display
- Direct link to ServiceNow order details

## Connector Documentation
[Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)

## Inputs / Variables to Set
- No initial variables required - the microapp uses the current user's context
- Form variables are dynamically generated based on the selected phone model

## Comments on Functioning
- The microapp starts by fetching available mobile phones from ServiceNow catalog
- Users can browse phones with images, descriptions, and prices
- Selecting a phone generates a custom form based on the phone's options
- The system creates a ServiceNow cart with the selected items
- Order confirmation includes:
  - Order number
  - Selected product details
  - Link to track the order in ServiceNow
- All operations are performed under the logged-in user's context

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)