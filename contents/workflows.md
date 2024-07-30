<frontmatter>
  title: Creating Automated Workflows
</frontmatter>

<br>

## Creating Automated Workflows
With GitHub Project Boards's Workflows feature, you can set up automation rules that trigger actions
based on events.

Access the Workflows features by clicking the "..." button then clicking "Workflows" from the dropdown, as shown below.
<pic src="../images/workflow-button.png" width="900" alt="Worflow button">
</pic>

A list of workflows are already configured by default.
<pic src="../images/workflows.png" width="900" alt="Workflow list">
</pic>

If you see a green mark next to a workflow in the list, it means the workflow is enabled. To enable or disable a
workflow, simply use the toggle button located at the top right of the page for each workflow.

To edit a workflow, click on the edit button, selected the desired values from the dropdown list then click
the "Save and turn on workflow" button.

<pic src="../images/edit-workflow.png" width="900" alt="Edit a workflow">
</pic>
<br>

<br>
<box type="tip">
tP tips:
<br>
Some workflows that are more useful for the tP are:
<br>
1. Item added to project
<br>
2a. Item closed
<br>
2b. Auto-close issue
<br>
3. When a pull request has a review requesting changes
<br>

</box>
<br>

!!Useful workflows for CS2103T!!

1. When an issue or pull request is added to a project, set its status as "Todo".

This clearly marks new tasks or features that need to be addressed, helping CS2103T
team members understand what needs attention and ensures that nothing gets overlooked.

Team members can quickly
see which tasks are new and need to be picked up, improving communication and collaboration within the team.
<br>
<pic src="../images/workflow-1.png" width="600" alt="Edit a workflow">
</pic>

2a. When an issue or pull request is closed, set its status as "Done".

This helps track completed tasks, providing a clear record of what has been finished and what remains to be done.

It also offers a quick snapshot of the project's progress by showing how many tasks are completed
versus how many are still pending.
<br>
<pic src="../images/workflow-2.png" width="600" alt="Edit a workflow">
</pic>

2b. Similarly, when the status of an issue is set to "Done", auto-close the issue.

When combined with the 2 workflows mentioned above, this workflow ensures a smooth and consistent transition
from new tasks to completed tasks. New issues are clearly marked as "Todo," and once they’re completed,
they are automatically moved to "Done" and closed, maintaining a streamlined workflow.

It also automates the clean-up process of closing completed issues, reducing manual work and
ensuring that issues don’t remain open unnecessarily.
<br>
<pic src="../images/workflow-3.png" width="600" alt="Edit a workflow">
</pic>

3. When a pull request has a review requesting changes, set its status to "Todo".

By marking the PR as "Todo," it is clearly indicated that the changes requested in the review need to be addressed
before the PR can proceed to be merged. This helps all team members understand the current status of the
PR at a glance.
<br>
<pic src="../images/workflow-4.png" width="600" alt="Edit a workflow">
</pic>
