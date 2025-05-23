# Azure OpenAI x SharePoint Retrieval Augmented Generation Micro-app

## Description
This micro-app enables intelligent document search and question answering using Azure OpenAI and SharePoint integration. It performs semantic search across SharePoint documents and provides AI-generated answers with source citations.

## Features
- Azure OpenAI integration for intelligent responses
- SharePoint document search and retrieval
- Semantic search capabilities
- Source citation with direct document links
- Up to 3 relevant source documents per query
- Automatic citation cleaning
- Direct links to SharePoint documents
- Configurable AI parameters (temperature, tokens, etc.)

## Required Connectors
- [Azure OpenAI => API Key connector](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l7993326440200267extensions)
- [Microsoft Graph for SharePoint](https://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l7795612209312086extensions)

## Input Variables
- query: The user's search query
- deployment: Azure OpenAI deployment name
- api_version: Azure OpenAI API version
- azure_search_endpoint: Azure Cognitive Search endpoint
- azure_search_key: Azure Cognitive Search API key
- azure_search_index_name: Name of the search index
- semantic_configuration: Semantic search configuration name

## Technical Details
- Maximum tokens: 800
- Temperature: 0.7
- Top P: 0.95
- Semantic search configuration:
  - Content fields: "content"
  - Filepath field: "metadata_spo_item_name"
  - URL field: "metadata_spo_item_path"
- Maximum source documents: 3
- Strictness level: 3

## Comments on Functioning
1. Query Processing:
   - User query is sent to Azure OpenAI
   - Semantic search is performed on SharePoint documents
   - Top relevant documents are retrieved

2. Source Management:
   - Extracts unique document references
   - Retrieves SharePoint drive information
   - Builds complete document URLs
   - Removes duplicate sources

3. Response Generation:
   - AI generates response based on found documents
   - Citations are cleaned and formatted
   - Sources are linked to original documents

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)