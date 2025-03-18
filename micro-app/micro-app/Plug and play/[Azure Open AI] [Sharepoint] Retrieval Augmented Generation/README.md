# Azure OpenAI x Sharepoint Documents Search Microapp

## Description
This microapp leverages Azure OpenAI to provide intelligent document search capabilities within SharePoint documents. It processes user queries, searches through indexed documents, and returns relevant information along with source references.

## Features
- Natural language query processing using Azure OpenAI
- Semantic search in SharePoint documents
- Source document reference tracking
- Automatic cleaning and formatting of AI responses
- Support for multiple document sources (up to 3 sources per query)
- Document deduplication to avoid repeated sources

## Connector Documentation
[Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)

## Inputs / Variables to Set
- query: The user's search query (string, required)
  Default value: "quels goodies je peux commander?"

## Comments on Functioning
- The microapp first processes the user query through Azure OpenAI chat completion
- It then extracts relevant document references from SharePoint
- The system retrieves up to 3 unique document sources
- Document URLs are constructed by combining SharePoint drive information
- Response is cleaned of reference markers before display
- Results are presented with both the answer and source documents

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)