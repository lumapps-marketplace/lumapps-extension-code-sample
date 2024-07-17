# Jira ticket creation

**Prerequisites:**

- Read the [Micro-app step-by-step guide](https://developer.lumapps.com/portal/documentation/micro-app-steps/micro_app_step_by_step.md) documentation.
    
- Create a connector for the service provider that you will use according to [Extension connectors](https://docs.lumapps.com/docs/admin-l43084339674928007extensions).

The workflow contains the following elements:
1. An API Call to get the Jira profile information of the user.
2. An Adaptive Card to display a ticket creation form.
3. An API Call to send the ticket creation data to Jira.
4. A router and filters to create different workflows:
    - 1 branch for when the ticket creation is successful
    - 1 branch for when the ticket creation fails
5. An Adaptive Card for each branch, to display either an error or a success message.

> **Prerequisite:** Create a new micro-app according to [Declare your micro-app extension](https://developer.lumapps.com/portal/documentation/micro-app-steps/declare-your-microapp-extension.md). You can use the following icon url: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png`.

Create the elements of the workflow according to the steps in this page and the Developer Portal documentation.

## Step 1: API Call to get the Jira profile information of the user

You can set the reporter of a ticket by identifying the accountId of a user, based on the email used in their LumApps account.

Create an API Call named `get_jira_user_api` according the following template: [Jira: get_jira_user_api](https://documenter.getpostman.com/view/32450244/2sA3kPq5Do#bcc60043-aa49-4406-9392-f9121494be33)

## Step 2: Adaptive Card to display a ticket creation form

Create an Adaptive Card named `ticket_form` using the following template: [1-template-jira-ticket-create-form.json](1-template-jira-ticket-create-form.json).

<!-- Documentation to be added to create a first API Call to authenticate when using a connector with the "Basic" option, that will be available in the new connector UI?

GET https://${atlassian-domain}.atlassian.net/rest/api/3/user/search?query=${email}

To retrieve accountId
 -->

## Step 3: API Call to send the ticket creation data to Jira

Create an API Call named `ticket_creation_api` according the following template: [Jira: ticket_creation_api](https://documenter.getpostman.com/view/32450244/2sA3kPq5Do#6382016e-ac7f-406d-89e2-ef2f94bdb3f1)

> **Post-requisite:** In the LumApps administrator documentation linked to your extension, you must instruct LumApps administrators on how to update placeholder values. LumApps administrators must import the extension and replace `<your-jira-serviceDeskId>`, `<your-jira-projectId>` and `<your-jira-issuetype>` used in the **API Call** body with their own values.

## Step 4: Router

After the **API Call**, add a **Router**:

1. Select the **API Call** you created.

2. Click **Add**.

3. Select **Router**.

## Step 5: Adaptive Card to display an error message

Create a response to show a user if an error occurred and the ticket was not created.

In the editor, select the **Router** element you created, then add an Adaptive Card named `error` using the following template: [2a-template-jira-ticket-create-fail.json](2a-template-jira-ticket-create-fail.json)

## Step 5: Adaptive Card to display a success message

Create a response to show a user if the ticket was created successfully.

In the editor, select the **Router** element you created, then add an Adaptive Card named `success` using the following template: [2a-template-jira-ticket-create-fail.json](2a-template-jira-ticket-create-fail.json)

### Step 6: Add a filter and a fallback

1. Drag the **Adaptive Card** created for the error response so that it is not overlapping the other **Adaptive Card**.

2. Select the arrow (**Link**) between the **Router** and the **Adaptive Card** created for the error response.

3. Click the downward pointing arrow called **Set as fallback**.

4. Select the arrow (**Link**) between the **Router** and the **Adaptive Card** created for the success response.

5. Click the funnel icon called **Filter**.

<!-- I did not have a connector to test the micro-app, what variable and value would be used to identify a successful ticket creation? -->
1. In the **Variable** field, select the response status of the ticket creation API Call. Enter: `${actions.ticket_creation_api.response.status}`

2. Select the **Equals** Operator.

3. In the **Value** field, enter `200`

4. Click **Create**.

## Result

Click **Save** to save your micro-app configuration.

Your micro-app is complete and ready to be submitted to the Marketplace. Refer to [Submit your micro-app extension version](https://developer.lumapps.com/portal/documentation/micro-app-steps/submit-microapp.md).
