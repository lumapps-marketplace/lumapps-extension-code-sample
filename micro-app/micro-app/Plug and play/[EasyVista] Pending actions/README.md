# EasyVista Template

## Description
This template helps you display pending actions for selected action id.

## Features
- Display pending actions for selected action id
- Multiple pending actions can be displayed in an adaptive card
- Open pending action in a new tab

## Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Easy Vista API documentation](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/)

## Inputs / Variables to Set
- **tenant_easy_vista**: EasyVista tenant url (where user is redirect by clicking on actions)

## Comments on Functioning
1. **get_user_id**: Retrieves user information in EasyVista from current user email
2. **get_user_actions**: Retrieves pending actions for selected action id. In this template we use id 1 and 32 which correspond to resolution and validation actions, yours could be different
3. **actions_counter**: Display pending actions in an adaptive card. Make sure to update id in the adaptive card with the one in **get_user_actions**


## Link to Microapp Import Documentation
[Microapp Import Documentation](https://docs.lumapps.com/docs/ls/content/6236515079535869/devportal-l48909819228353757)
