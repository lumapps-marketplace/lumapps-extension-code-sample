# Box Template

## Description
This template provides a quick view of your recent and favorite files from Box.

## Features
- Displays your 5 most recent files
- Shows your favorite files (up to 5)
- Direct links to files in Box
- Button to access Box interface

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Box API Documentation](https://developer.box.com/reference/)

## Necessary API Scopes
- base_explorer - To access basic files and folders
- base_preview - To generate file previews
- item_get - To retrieve information about individual files
- root_readwrite - To access recent and favorite files

## Inputs / Variables to Set
- **box_url**: Your environment box URL 

## Comments on Functioning
1. **getuser**: Retrieves user information
2. **getrecentitems**: Retrieves recent items (limited to 5)
3. **getcollections**: Retrieves collections to identify favorites
4. **getfavoriteitems**: Retrieves favorite items (limited to 5)
5. **displayfiles**: Displays the files in an adaptive card

## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
