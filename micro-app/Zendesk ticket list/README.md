# Zendesk ticket list

**Prerequisites:**

- Read the [Micro-app step-by-step guide](https://developer.lumapps.com/portal/documentation/micro-app-steps/micro_app_step_by_step.md) documentation.
    
- Create a connector for the service provider that you will use according to [Extension connectors](https://docs.lumapps.com/docs/admin-l43084339674928007extensions).

- Create a new micro-app according to [Declare your micro-app extension](https://developer.lumapps.com/portal/documentation/micro-app-steps/declare-your-microapp-extension.md). You can use the following icon url: `https://help.brevo.com/hc/article_attachments/6450414165138`.

## Step 1: Get the list of tickets - API Call

Create an API Call named `ticket_list_api` according to the following template: [Zendesk: ticket_list_api](https://documenter.getpostman.com/view/32450244/2sA3kPq5Do#a6d2e45c-48c5-4861-9f1e-9c666c2c9913)

> **Tip:** For more information about Zendesk APIs, refer to the [Zendesk API](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets) reference.

## Step 2: Display the list of tickets - Adaptive Card

Create an Adaptive Card named `display_ticket_list` using the following template: [template-zdesk-ticket-list.json](template-zdesk-ticket-list.json)

> **Post-requisite:** In the LumApps administrator documentation linked to your extension, you must instruct LumApps administrators on how to change the URL used in the **Adaptive Card** actions object:

    ```json
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "Open ticket",
            "url": "https://lumapps.zendesk.com/agent/tickets/${id}"
        }
    ]
    ```
    LumApps administrators must import the extension and replace `https://lumapps.zendesk.com` with their Zendesk domain.

## Result

Your micro-app is complete and ready to be submitted to the Marketplace. Refer to [Submit your micro-app extension version](https://developer.lumapps.com/portal/documentation/micro-app-steps/submit-microapp.md).