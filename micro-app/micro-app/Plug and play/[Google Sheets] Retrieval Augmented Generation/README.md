# Google Sheets Retrieval Augmented Generation

## Description
This micro-app enables Retrieval Augmented Generation (RAG) using data from Google Sheets as the knowledge base. It allows users to ask questions about data stored in a spreadsheet and receive AI-generated answers based on that data.

## Features
- Query data from Google Sheets using natural language
- AI-powered responses based on spreadsheet content
- Customizable spreadsheet source and range
- Simple interface for asking questions about your data

## Documentation
- [Lumapps connector creation - OAuth 2.0 JWT bearer - Google](https://docs.lumapps.com/docs/admin-l45734101550348516extensions)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)

## Necessary API Scopes
- `https://www.googleapis.com/auth/spreadsheets.readonly` - Required for read-only access to Google Sheets data

## Inputs / Variables to Set
- **query**: The natural language question to ask about the data (default: "do we have white paint in stock?"). Automatically set with the query of the end user in ASK AI when deployed.
- **spreadsheetid**: The ID of the Google Sheet to query (default: "1bmwq3KP7haWjtPUTfAKX01DtZlZ7w03HIdg-p8I5jJs")
- **sheet_name**: The name of the specific sheet within the spreadsheet (default: "refs")
- **range**: The cell range to query (default: "A1:E21")

## Comments on Functioning
1. **Start**: Collects user query and spreadsheet parameters
2. **get_products**: Retrieves data from the specified Google Sheet range
3. **create_prompt**: Constructs a prompt combining the user query with the spreadsheet data
4. **query_llm_lumapps**: Sends the prompt to LumApps AI for processing
5. **answer**: Displays the AI-generated response to the user

## Requirements
- Google Sheets connector must be properly configured
- Access to the specified Google Sheet
- LumApps AI services must be enabled for your organization

## Use Cases
- Product inventory queries
- Data analysis and interpretation
- Customer service knowledge base
- Internal documentation search

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)