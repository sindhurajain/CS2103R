<frontmatter>
  title: Features
</frontmatter>

<br>

# Features

## Table of Contents
* [Useful Features](#useful-features)
    * [Adding Fields to Tasks](#adding-fields-to-tasks)
    * [Visualisation of Tasks in Different Formats](#visualisation-of-tasks-in-different-formats)
    * [Automated Insights](#automated-insights)
    * [Creating Automated Workflows](#creating-automated-workflows)
* [FAQ](#faq)
* [Glossary](#glossary)

<div style="page-break-after: always;"></div>

--------------------------------------------------------------------------------------------------------------------

## Useful Features

##### Adding Fields to Tasks

To add fields to tasks, click on the "..." button in the top right corner of the View page, then click on "Settings".
<br>
<pic src="../images/settings.png" width="700" alt="Settings option">
</pic>

"Status" is a default field for the Board View, which can be modified using the "Add option..." button. 
For example, I can add another option called "Up Next" so that a task can have a status of "Up Next". 
Custom fields can also be added by clicking on "New field".
<br>
<pic src="../images/field.png" width="700" alt="Add new field">
</pic>

For example, I can add a custom field called "Start Date" of type `Date` to a task.
<br>
<pic src="../images/startdate.png" width="300" alt="Add new field called Start Date">
</pic>

Other useful custom fields that can be added include:
* "End Date" of type `Date`
* "Estimated Completion Hours" of type `Number`

To delete a custom field, select the field you want to delete on the left menu bar, then click the "Delete field"
button at the top right corner.
<br>
<pic src="../images/deletefield.png" width="700" alt="Delete a custom field">
</pic>

###### To add the created custom field to the task 
!!Board View!!
<br>
In Board View, click on the task that you want to add the custom field to. Click on the current value of
the custom field to change its value.
<br>
<pic src="../images/addfield.png" width="700" alt="Add the created custom field to a task">
</pic>
<br>
<pic src="../images/givedate.png" width="700" alt="Add a date to the Start Date custom field">
</pic>
<br>

!!Table View!!
<br>
Similarly, for Table View, you can add a column with the custom field.
<pic src="../images/tablefield.png" width="700" alt="Add a Start Date column">
</pic>
<br>
And you can change the value of the custom field for each task by clicking on the corresponding cell.
<pic src="../images/tablevalue.png" width="700" alt="Add a Start Date value to a task">
</pic>
<br>

!!Roadmap View!!
<br>
In Roadmap View, you can only add a custom field of type `date` or `iteration` by clicking on the "+" button.
<pic src="../images/addroadmap.png" width="700" alt="Add a Start Date value to a task">
</pic>
<br>

##### Visualisation of Tasks in Different Formats
Each view caters to different aspects of project management, allowing teams to choose the best way to
visualise their tasks based on their needs.

Board View provides a column-based layout for managing tasks. Tasks, which are usually issues or pull requests are
visually represented as cards and can be moved between columns to reflect their status
(e.g., To Do, In Progress, Done). This View is best for visualising task progression.

Table View presents project tasks in a spreadsheet-like format. Tasks are listed in rows, with customizable columns
displaying different attributes (e.g., title, status, assignee, labels, due dates). It allows for sorting and
filtering of tasks based on various criteria. This View is best for detailed task management
and providing a structured overview of all tasks.

Roadmap view provides a timeline-based representation of tasks, helping with planning and tracking tasks both across 
and within milestones. Tasks are shown on a chronological timeline, with start and end dates.
This View is best for long-term planning and tracking the alignment of tasks with deadlines.

By configuring the layout, you can customise the fields visible for each task, edit the name of each View, 
slice by field, sort by field, etc.
<br>
<pic src="../images/board-2.png" width="900" alt="Board View">
</pic>

<br>

<box type="tip">
tP tips:
<br>
- Sort by a particular field to prioritise tasks by that field. 
<br>
For example: Add start date and end date custom fields. Sort by end date in ascending order to make it easier to
prioritise tasks by deadline.
<br>
- Slice by milestone to segment the View by milestone. This allows for automated tracking of tasks within 
each milestone.
<br>
- Useful "Status" categories to add include: Backlog, Todo, In Progress, Needs PR Review, Done 
and Up Next in v1.x
</box>

<br>
<pic src="../images/board-3.png" width="900" alt="Board View">
</pic>
<br>
<br>

##### Automated Insights
GitHub Project Boards generates useful "Insights" for users.
Clicking on the "Insights" button in the top right corner of any View page will bring you to the Insights page.

<pic src="../images/insightsbutton.png" width="300" alt="Insights button">
</pic>

A default bar graph already exists on the Insights page, which shows the number of tasks grouped by status
<pic src="../images/bargraph.png" width="900" alt="Default bar graph">
</pic>

To add a custom chart, click on the "New chart" button in the left menu, then configure it by clicking on the 
"Configure" button in the top right corner. Then, add your desired layout, x-axis and y-axis.
<pic src="../images/customchart.png" width="900" alt="Insights button">
</pic>

<box type="tip">
tP tips:
<br>
A useful custom chat to create would be a bar graph of the number of tasks grouped by assignee. The y-axis in
this case would be "Count of items" and the x-axis would be "Assignees".
<br>
<br>
This allows your tP group to track the workload distribution of tasks and ensure that it is roughly even
so that no teammate is overloaded with work.
<br>
<br>
You can also configure the chart to Group by "Labels" to ensure that each teammate has to chance to contribute
to different areas of software development, like bugs, documentation and feature enhancements.
</box>

<br>
<br>

##### Creating Automated Workflows


## FAQ

**Q**
A

## Glossary
