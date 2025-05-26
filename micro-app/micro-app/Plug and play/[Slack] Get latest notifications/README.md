# Slack Get Latest Notifications

## Description
This micro-app allows users to view the latest messages from Slack channels directly in LumApps. It displays the three most recent messages from a selected channel and provides direct links to open these messages in Slack.

## Features
- View the three most recent messages from any accessible Slack channel
- Switch between different Slack channels using a dropdown menu
- See message content, timestamp, and direct links to Slack
- User mentions in messages are automatically converted to real names
- Clean and intuitive interface integrated within LumApps

## Documentation
- [Slack API Documentation](https://api.slack.com/docs)
- [LumApps API Key connectors](https://docs.lumapps.com/docs/admin-l7993326440200267extensions)

## Necessary API Scopes
- channels:history - To retrieve message history from channels
- channels:read - To list and read channel information
- users:read - To retrieve user information for mention conversion
- chat:write - To generate permalinks to messages

## Inputs / Variables to Set
No specific inputs required. The micro-app automatically loads available channels and defaults to the first channel in the list.

## Comments on Functioning
1. Start : Initiates the micro-app workflow
2. getchannels : Retrieves list of available Slack channels
3. getusers : Retrieves list of Slack users for mention conversion
4. setinitialdata : Sets default channel if none is selected
5. listmessages : Retrieves the three most recent messages from selected channel
6. getpermalink1/2/3 : Generates direct links to each message in Slack
7. cleanmessages : Processes message data, converts user mentions to real names
8. Channels : Displays the adaptive card with channel selector and messages

## Requirements
- Slack connector must be properly configured with appropriate permissions
- User must have access to the Slack workspace and channels

## Link to Microapp Import Documentation
Microapp Import Documentation