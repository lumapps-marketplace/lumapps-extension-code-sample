# Google Drive Retrieval Augmented Generation Micro-app

## Description
This microapp enables AI-powered search capabilities within Google Drive documents. It searches through your Drive content, retrieves relevant documents, and generates intelligent responses based on the document contents using AI.

## Features
- Intelligent search in Google Drive documents
- AI-powered answer generation from multiple document sources
- Automatic content cleaning and formatting removal
- Support for up to 3 relevant documents per query
- Direct linking to original Google Drive files
- Smart filtering for document types
- Source attribution with document titles and links

## Connector Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Google Drive connector documentation](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l6007003038797828extensions)
- [Google Drive API documentation](https://developers.google.com/drive/api/guides/about-sdk)

## Inputs / Variables to Set
- query: Search query string for Google Drive documents (string) that is automatically set by ASK AI when deployed
  Default value: "company policy"
  Required: false

## Comments on Functioning
- The microapp starts by searching Google Drive documents based on the user query
- It filters and retrieves the top 3 most relevant documents
- Each document's content is extracted and cleaned (removing formatting)
- The cleaned content is processed by AI to generate a contextual response
- Results are displayed with the AI-generated answer and links to source documents
- Documents are accessible through direct Google Drive URLs

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)