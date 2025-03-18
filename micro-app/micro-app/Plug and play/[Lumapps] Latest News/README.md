# Latest LumApps News Summarizer Micro-app

## Description
This microapp automatically retrieves the latest news from LumApps and generates an AI-powered summary using Azure OpenAI. It provides engaging summaries of the three most recent news articles, with support for both English and French users.

## Features
- Automatic fetching of the 3 most recent news articles
- AI-powered summary generation using Azure OpenAI GPT-4
- Multilingual support (English and French)
- Markdown-formatted summaries with emoji highlights
- Source linking to original articles
- Automatic content consolidation and cleaning
- Dynamic language adaptation based on user preferences

## Connector Documentation
[Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)

## Inputs / Variables to Set
- query: Optional input string that can be used to customize the summary request (default: empty string)

## Comments on Functioning
- The microapp starts by fetching the 3 most recent published news articles
- Each article's content is extracted and consolidated into a single text
- The system prepares a language-specific prompt based on user preferences
- Azure OpenAI generates a structured summary with:
  - An introduction message
  - Three entries (one per news article)
  - Each entry contains a bold first sentence with emoji and two regular sentences
- The summary is displayed with proper formatting and source links

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)