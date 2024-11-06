# Zendesk ticket list

**Prerequisites:**

- Read the [Micro-app step-by-step guide](https://developer.lumapps.com/portal/documentation/micro-app-steps/micro_app_step_by_step.md) documentation.
    
- Create a connector for the service provider that you will use according to [Extension connectors](https://docs.lumapps.com/docs/admin-l43084339674928007extensions).

- Create a new micro-app according to [Declare your micro-app extension](https://developer.lumapps.com/portal/documentation/micro-app-steps/declare-your-microapp-extension.md). You can use the following icon url: `https://cdn.icon-icons.com/icons2/2429/PNG/512/zendesk_logo_icon_147198.png`.

## Step 1: Get the end user's email

Create an API Call named `getuser` using the following endpoint, with the GET Method:
`/api/v2/users/search.json?query=${user.email}`

## Step 2: Get the list of tickets - API Call

Create an API Call named `listtickets` using the following endpoint as a GET Method: 
`/api/v2/search.json?query=type:ticket+requester_id:${actions.getuser.response.body.users[0].id}`


## Step 3: Display the list of tickets - Adaptive Card

Create an Adaptive Card named `displayticketlist` using the following template: [template-zdesk-ticket-list.json](template-zdesk-ticket-list.json)

> **Post-requisite:** In the LumApps administrator documentation linked to your extension, you must instruct LumApps administrators on how to change the URL used in the **Adaptive Card** actions object:

    ```json
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "Open ticket",
            "url": "https://<your-instance>.zendesk.com/agent/tickets/${id}"
        }
    ]
    ```
    LumApps administrators must import the extension and replace `https://<your-instance>.zendesk.com` with their Zendesk domain.

## Result

Your micro-app is complete and ready to be submitted to the Marketplace. Refer to [Submit your micro-app extension version](https://developer.lumapps.com/portal/documentation/micro-app-steps/submit-microapp.md).
