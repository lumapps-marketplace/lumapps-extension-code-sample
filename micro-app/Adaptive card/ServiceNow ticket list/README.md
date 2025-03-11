# ServiceNow ticket list

**Prerequisites:**

- Read the [Micro-app step-by-step guide](https://developer.lumapps.com/portal/documentation/micro-app-steps/micro_app_step_by_step.md) documentation.
    
- Create a connector for the service provider that you will use according to [Extension connectors](https://docs.lumapps.com/docs/admin-l43084339674928007extensions).

- Create a new micro-app according to [Declare your micro-app extension](https://developer.lumapps.com/portal/documentation/micro-app-steps/declare-your-microapp-extension.md). You can use the following icon url: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/ServiceNow_logo.svg/220px-ServiceNow_logo.svg.png`.

## Step 1: Get the list of tickets - API Call

Create an API Call named `ticket_list_api` according to the following template: [ServiceNow: ticket_list_api](https://documenter.getpostman.com/view/32450244/2sA3kYheXh)

> **Tip:** For more information about ServiceNow APIs, refer to the [Table API](https://docs.servicenow.com/bundle/washingtondc-api-reference/page/integrate/inbound-rest/concept/c_TableAPI.html#d228766e1289) reference.

## Step 2: Display the list of tickets - Adaptive Card

Create an Adaptive Card named `display_ticket_list` using the following template: [template-snow-ticket-list.json](template-snow-ticket-list.json)

> **Post-requisite:** In the LumApps administrator documentation linked to your extension, you must instruct LumApps administrators on how to change the URL used in the **Adaptive Card** actions object:

    ```json
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "Open ticket",
            "url": "https://<your-instance>.service-now.com/incident.do?sysparm_query=number%3D${number}"
        }
    ]
    ```
    LumApps administrators must import the extension and replace `https://<your-instance>.service-now.com` with their ServiceNow domain.

## Result

Your micro-app is complete and ready to be submitted to the Marketplace. Refer to [Submit your micro-app extension version](https://developer.lumapps.com/portal/documentation/micro-app-steps/submit-microapp.md).