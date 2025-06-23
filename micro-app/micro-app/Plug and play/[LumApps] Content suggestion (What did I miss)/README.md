# LumApps - Content suggestion "What did I miss" Micro-app

## Description
This micro-app uses AI to recommend the most relevant LumApps content the user may have missed while they were away.

## Features
- Choose the time-off period.
- Search for relevant content using AI based on user's profile.
- Display suggested content with explanations as to why they are relevant.

## Comments on Functioning
1. **date**: Select the period of time-off.
2. **getUser**: Fetch user's profile.
3. **getContent**: Fetch and return top 5 contents with most likes that have been published in the selected period of time.
4. **parseMetadata**: Parse metadata ids of the content.
5. **getMetadata**: Fetch metadata names of the content based on metadata ids.
6. **makePrompt**: Structure and clean the prompt for AI to ensure cost-effective response. Pass user's organization (job title, department, location) and content title, last published date, metadata names, and short excerpt to AI.
7. **generateAnsewer**: Send the prompt to AI and return the response.
8. **formatResult**: Format the response to display the suggested content with explanations.
9. **displayResult**: Display the formatted result.

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)