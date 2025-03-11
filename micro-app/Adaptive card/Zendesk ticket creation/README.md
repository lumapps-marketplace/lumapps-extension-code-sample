# Zendesk ticket creation

**Prerequisites:**

- Read the [Micro-app step-by-step guide](https://developer.lumapps.com/portal/documentation/micro-app-steps/micro_app_step_by_step.md) documentation.
    
- Create a connector for the service provider that you will use according to [Extension connectors](https://docs.lumapps.com/docs/admin-l43084339674928007extensions).

The workflow contains the following elements:

1. An Adaptive Card to display a ticket creation form.
2. An API Call to send the ticket creation data to Zendesk.
3. A router and filters to create different workflows:
    - 1 branch for when the ticket creation is successful
    - 1 branch for when the ticket creation fails
4. An Adaptive Card for each branch, to display either an error or a success message.

> **Prerequisite:** Create a new micro-app according to [Declare your micro-app extension](https://documenter.getpostman.com/view/32450244/2sA3kYheXh). You can use the following icon url: `https://help.brevo.com/hc/article_attachments/6450414165138`.

Create the elements of the workflow according to the steps in this page and the Developer Portal documentation.

## Step 1: Adaptive Card to display a ticket creation form

Create an Adaptive Card named `ticket_form` using the following template: [1-template-zdesk-ticket-create-form.json](1-template-zdesk-ticket-create-form.json).

## Step 2: API Call to send the ticket creation data to Zendesk

Create an API Call named `ticket_creation_api` according the following template: [Zendesk: ticket_creation_api](https://documenter.getpostman.com/view/32450244/2sA3kYheXh)

For more information about Zendesk APIs, refer to the [Zendesk API reference](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#create-ticket)

## Step 4: Router

After the **API Call**, add a **Router**:

1. Select the **API Call** you created.

2. Click **Add**.

3. Select **Router**.

## Step 5: Adaptive Card to display an error message

Create a response to show a user if an error occurred and the ticket was not created.

In the editor, select the **Router** element you created, then add an Adaptive Card named `error` using the following template: [2a-template-zdesk-ticket-create-fail.json](2a-template-zdesk-ticket-create-fail.json)

## Step 5: Adaptive Card to display a success message

Create a response to show a user if the ticket was created successfully.

In the editor, select the **Router** element you created, then add an Adaptive Card named `success` using the following template: [2a-template-zdesk-ticket-create-fail.json](2a-template-zdesk-ticket-create-fail.json)

### Step 6: Add a filter and a fallback

1. Drag the **Adaptive Card** created for the error response so that it is not overlapping the other **Adaptive Card**.

2. Select the arrow (**Link**) between the **Router** and the **Adaptive Card** created for the error response.

3. Click the downward pointing arrow called **Set as fallback**.

4. Select the arrow (**Link**) between the **Router** and the **Adaptive Card** created for the success response.

5. Click the funnel icon called **Filter**.

6. In the **Variable** field, select the response status of the ticket creation API Call. Enter: `${actions.ticket_creation_api.response.status}`

7. Select the **Equals** Operator.

8. In the **Value** field, enter `200`

9. Click **Create**.

## Result

Click **Save** to save your micro-app configuration.

Your micro-app is complete and ready to be submitted to the Marketplace. Refer to [Submit your micro-app extension version](https://developer.lumapps.com/portal/documentation/micro-app-steps/submit-microapp.md).
