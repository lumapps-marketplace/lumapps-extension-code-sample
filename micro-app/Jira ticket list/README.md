# Jira ticket list

**Prerequisites:**

- Read the [Micro-app step-by-step guide](https://developer.lumapps.com/portal/documentation/micro-app-steps/micro_app_step_by_step.md) documentation.
    
- Create a connector for the service provider that you will use according to [Extension connectors](https://docs.lumapps.com/docs/admin-l43084339674928007extensions).

- Create a new micro-app according to [Declare your micro-app extension](https://developer.lumapps.com/portal/documentation/micro-app-steps/declare-your-microapp-extension.md). You can use the following icon url: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png`.

## Step 1: Get the Jira profile information of the user - API Call

Get the Jira profile information of the user by identifying the accountId of a user, based on the email used in their LumApps account.

Create an API Call named `get_jira_user_api` according to the following template: [Jira: get_jira_user_api](https://documenter.getpostman.com/view/32450244/2sA3kYheXh)


## Step 2: Get the list of tickets - API Call

Create an API Call named `ticket_list_api` according to the following template: [Jira: ticket_list_api](https://documenter.getpostman.com/view/32450244/2sA3kYheXh)

> **Tip:** For more information, refer to the Jira [API documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3).

## Step 3: Display the list of tickets - Adaptive Card

Create an Adaptive Card named `display_ticket_list` using the following template: [template-jira-ticket-list.json](template-jira-ticket-list.json)

> **Post-requisite:** In the LumApps administrator documentation linked to your extension, you must instruct LumApps administrators on how to change the URL used in the **Adaptive Card** actions object:

    ```json
        "actions": [
            {
                "type": "Action.OpenUrl",
                "title": "Open ticket",
                "url": "https://<your-instance>.atlassian.net/browse/${key}"
            }
        ]
    ```
    LumApps administrators must import the extension and replace `https://<your-instance>.atlassian.net` with their Atlassian domain.

## Result

Your micro-app is complete and ready to be submitted to the Marketplace. Refer to [Submit your micro-app extension version](https://developer.lumapps.com/portal/documentation/micro-app-steps/submit-microapp.md).