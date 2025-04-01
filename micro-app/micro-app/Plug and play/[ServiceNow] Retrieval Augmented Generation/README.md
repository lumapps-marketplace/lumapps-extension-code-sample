# ServiceNow Knowledge Base AI Search Micro-app

## Description
This micro-app enables AI-powered search capabilities within ServiceNow knowledge base articles. It searches through knowledge base content, retrieves relevant articles, and generates intelligent responses based on the article contents using AI.

## Features
- Intelligent search in ServiceNow knowledge base articles
- AI-powered answer generation from multiple knowledge sources
- Automatic content cleaning and HTML formatting removal
- Support for up to 3 relevant knowledge articles per query
- Direct linking to original ServiceNow articles
- Smart filtering for knowledge base articles only
- Source attribution with article titles and links

## Connector Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [ServiceNow connector documentation](https://docs.lumapps.com/docs/ls/content/4743652518001693/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l709725510492807extensions)
- [ServiceNow API documentation](https://www.servicenow.com/docs/bundle/yokohama-api-reference/page/build/applications/concept/api-rest.html)

## Inputs / Variables to Set
- query: Search query string for knowledge base articles (string) that is automatically set by ASK AI when deployed
  Default value: "VPN"
  Required: false

## Comments on Functioning
- The microapp starts by searching ServiceNow knowledge base articles based on the user query
- It filters and retrieves the top 3 most relevant knowledge base articles
- Each article's content is extracted and cleaned (removing HTML tags and formatting)
- The cleaned content is processed by AI to generate a contextual response
- Results are displayed with the AI-generated answer and links to source articles
- Articles are accessible through direct ServiceNow URLs

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)