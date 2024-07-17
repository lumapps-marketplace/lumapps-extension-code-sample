# SAP leave request

**Prerequisites:**

- Read the [Micro-app step-by-step guide](https://developer.lumapps.com/portal/documentation/micro-app-steps/micro_app_step_by_step.md) documentation.
    
- Create a connector for the service provider that you will use according to [Extension connectors](https://docs.lumapps.com/docs/admin-l43084339674928007extensions).

The workflow contains the following elements:

1. Get the current date to calculate the remaining days off.
2. An API Call to get the remaining days off of the user.
3. An Adaptive Card to display a leave request form.
4. An API Call to send the leave request data to SAP.
5. A router and filters to create different workflows:
    - 1 branch for when the leave request is successful
    - 1 branch for when the leave request fails
6. An Adaptive Card for each branch, to display either an error or a success message.

> **Prerequisite:** Create a new micro-app according to [Declare your micro-app extension](https://developer.lumapps.com/portal/documentation/micro-app-steps/declare-your-microapp-extension.md).

Create the elements of the workflow according to the steps in this page and the Developer Portal documentation.

## Step 1: Get the current date

start your workflow with a public API that retrieves the current date. You need the current date in `YYYY-MM-DD` format for the next step.

Create an API Call named `get_date` according the following template: [Public API: get_date](https://documenter.getpostman.com/view/32450244/2sA3kPq5Do#e5b75d47-834d-4ace-af2b-975727c97eed)

## Step 1: Get the remaining days off of the user

Create an API Call named `leave_balance_api` according the following template: [SAP: leave_balance_api](https://documenter.getpostman.com/view/32450244/2sA3kPq5Do#26c755dc-ddd0-41ae-93f8-07f3afa82eea)

For more information about SAP APIs, refer to [Implementing Time Management in SAP SuccessFactors](https://help.sap.com/docs/SAP_SUCCESSFACTORS_EMPLOYEE_CENTRAL/68de09dff990417b9f0acf6ccc13a14d/5b03a2a52f3e427a8e0b1608f439614f.html).

## Step 2: Display a leave request form

Create an Adaptive Card named `leave_request_form` using the following template: [1-template-sap-leave-form.json](1-template-sap-leave-form.json)

> **Post-requisite:** In the LumApps administrator documentation linked to your extension, you must instruct LumApps administrators on how to change the value of Type of leave choices in the **Adaptive Card**:
    ```json
        {
            "type": "Input.ChoiceSet",
            "choices": [
                {
                    "title": "Sick Leave",
                    "value": "<time_off_reason_id_1>"
                },
                {
                    "title": "Vacation",
                    "value": "<time_off_reason_id_2>"
                },
                {
                    "title": "Parental Leave",
                    "value": "<time_off_reason_id_3>"
                }
            ],
            "placeholder": "Pick a type of leave",
            "label": "Type of leave",
            "id": "typeofleave"
        }
    ```
    LumApps administrators must import the extension and replace the "title" attribute values with the names of their desired SAP time off reasons and the "value" attribute values with the IDs of their desired SAP time off reasons.

## Step 3: Send the leave request data to SAP

Create an API Call named `leave_request_api` according the following template: [SAP: leave_request_api](https://documenter.getpostman.com/view/32450244/2sA3kPq5Do#43358fd7-998c-4b5e-9e92-41d3515bdc87)

For more information about SAP APIs, refer to the [Time Off](https://api.sap.com/api/ECTimeOff/path/post_EmployeeTime) API reference.

> **Post-requisite:** In the LumApps administrator documentation linked to your extension, you must instruct LumApps administrators on how to update required values in the API Call body.

## Step 4: Add a router

After the **API Call**, add a **Router**:

1. Select the **API Call** you created.

2. Click **Add**.

3. Select **Router**.

## Step 5: Display an error message

Create a response to show a user if the ticket was not created successfully.

In the editor, select the **Router** element you created, then add an Adaptive Card named `fail` using the following template: [2a-template-sap-leave-fail.json](2a-template-sap-leave-fail.json)

## Step 6: Display an success message

Create a response to show a user if the ticket was created successfully.

In the editor, select the **Router** element you created, then add an Adaptive Card named `success` using the following template: [2b-template-sap-leave-success.json](2b-template-sap-leave-success.json)

## Step 7: Add a filter and fallback

1. Drag the **Adaptive Card** created for the error response so that it is not overlapping the other **Adaptive Card**.

2. Select the arrow (**Link**) between the **Router** and the **Adaptive Card** created for the error response.

3. Click the downward pointing arrow called **Set as fallback**.

4. Select the arrow (**Link**) between the **Router** and the **Adaptive Card** created for the success response.

5. Click the funnel icon called **Filter**.

6. In the **Variable** field, select the response status of the leave request API Call. Enter: `${actions.leave_request_api.response.status}`

7. Select the **Equals** Operator.

8. In the **Value** field, enter `200`

9. Click **Create**.

## Result

Click **Save** to save your micro-app configuration.

Your micro-app is complete and ready to be submitted to the Marketplace. Refer to [Submit your micro-app extension version](https://developer.lumapps.com/portal/documentation/micro-app-steps/submit-microapp.md).