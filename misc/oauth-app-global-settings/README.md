# Provide a UI to let LumApps customer global admin create and manage LumApps Oauth application used by an extension

## Tags
`global_settigns`, `oauth_application` 


## Purpose of this sample
This sample provide developers with an interface to ease the OAuth application creation for a customer administrator from the extension global settings.
The administrator can create an application, retrieve the client secret and remove the application.
The UI is translated in English and French.

To be fully integrated with your extension you may have to save the application information on your side to easily retrieve the application token to reach LumApps API.

## Screenshots
| Component      | Screenshot                                                   |
| -------------- | ------------------------------------------------------------ |
| Application list         | ![Application list](./screenshots/Oauth-app_app_list.png)          |
| Create the technical account       | ![Settings](./screenshots/Oauth-app_create_user.png)        |
| Create the application       | ![Settings](./screenshots/Oauth-app_create_app.png)        |
| See client secret       | ![Settings](./screenshots/Oauth-app_retrieve-secret.png)        |
| Retrieve application secret from list       | ![Settings](./screenshots/Oauth-app_get-app-secret.png)        |
| remove the application & the technical account       | ![Settings](./screenshots/Oauth-app_remove-app.png)        |