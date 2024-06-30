
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/CS2103R/index.html","title":"Home"}},[_v("GitHub Project Boards for tP")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/CS2103R/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/CS2103R/contents/setup.html"}},[_v("Set Up & Add Tasks")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/CS2103R/contents/features.html"}},[_v("Features")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/CS2103R/contents/topic3a.html"}},[_v("Topic 3a")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/CS2103R/contents/topic3b.html"}},[_v("Topic 3b")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Contents")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/CS2103R/index.html"}},[_v("Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/CS2103R/contents/setup.html"}},[_v("Set Up & Add Tasks")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/CS2103R/contents/features.html"}},[_v("Features")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Topic 3 \n\n"),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/CS2103R/contents/topic3a.html"}},[_v("Topic 3a")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/CS2103R/contents/topic3b.html"}},[_v("Topic 3b")])])])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_c('breadcrumb'),_v(" "),_c('br'),_v(" "),_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('div',{staticStyle:{"page-break-after":"always"}}),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('p',[_v("To add fields to tasks, click on the \"...\" button in the top right corner of the View page, then click on \"Settings\".\n"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/settings.png","width":"700","alt":"Settings option"}})],1),_v(" "),_c('p',[_v("\"Status\" is a default field for the Board View, which can be modified using the \"Add option...\" button.\nFor example, I can add another option called \"Up Next\" so that a task can have a status of \"Up Next\".\nCustom fields can also be added by clicking on \"New field\".\n"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/field.png","width":"700","alt":"Add new field"}})],1),_v(" "),_c('p',[_v("For example, I can add a custom field called \"Start Date\" of type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Date")]),_v(" to a task.\n"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/startdate.png","width":"300","alt":"Add new field called Start Date"}})],1),_v(" "),_c('p',[_v("Other useful custom fields that can be added include:")]),_v(" "),_m(5),_v(" "),_c('p',[_v("To delete a custom field, select the field you want to delete on the left menu bar, then click the \"Delete field\"\nbutton at the top right corner.\n"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/deletefield.png","width":"700","alt":"Delete a custom field"}})],1),_v(" "),_m(6),_v(" "),_c('p',[_c('span',{staticClass:"underline"},[_v("Board View")]),_v(" "),_c('br'),_v("\nIn Board View, click on the task that you want to add the custom field to. Click on the current value of\nthe custom field to change its value.\n"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/addfield.png","width":"700","alt":"Add the created custom field to a task"}}),_v(" "),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/givedate.png","width":"700","alt":"Add a date to the Start Date custom field"}}),_v(" "),_c('br')],1),_v(" "),_c('p',[_c('span',{staticClass:"underline"},[_v("Table View")]),_v(" "),_c('br'),_v("\nSimilarly, for Table View, you can add a column with the custom field.\n"),_c('pic',{attrs:{"src":"/CS2103R/images/tablefield.png","width":"700","alt":"Add a Start Date column"}}),_v(" "),_c('br'),_v("\nAnd you can change the value of the custom field for each task by clicking on the corresponding cell.\n"),_c('pic',{attrs:{"src":"/CS2103R/images/tablevalue.png","width":"700","alt":"Add a Start Date value to a task"}}),_v(" "),_c('br')],1),_v(" "),_c('p',[_c('span',{staticClass:"underline"},[_v("Roadmap View")]),_v(" "),_c('br'),_v("\nIn Roadmap View, you can only add a custom field of type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("date")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("iteration")]),_v(" by clicking on the \"+\" button.\n"),_c('pic',{attrs:{"src":"/CS2103R/images/addroadmap.png","width":"700","alt":"Add a Start Date value to a task"}}),_v(" "),_c('br')],1),_v(" "),_m(7),_v(" "),_c('p',[_v("Each view caters to different aspects of project management, allowing teams to choose the best way to\nvisualise their tasks based on their needs.")]),_v(" "),_c('p',[_v("Board View provides a column-based layout for managing tasks. Tasks, which are usually issues or pull requests are\nvisually represented as cards and can be moved between columns to reflect their status\n(e.g., To Do, In Progress, Done). This View is best for visualising task progression.")]),_v(" "),_c('p',[_v("Table View presents project tasks in a spreadsheet-like format. Tasks are listed in rows, with customizable columns\ndisplaying different attributes (e.g., title, status, assignee, labels, due dates). It allows for sorting and\nfiltering of tasks based on various criteria. This View is best for detailed task management\nand providing a structured overview of all tasks.")]),_v(" "),_c('p',[_v("Roadmap view provides a timeline-based representation of tasks, helping with planning and tracking tasks both across\nand within milestones. Tasks are shown on a chronological timeline, with start and end dates.\nThis View is best for long-term planning and tracking the alignment of tasks with deadlines.")]),_v(" "),_c('p',[_v("By configuring the layout, you can customise the fields visible for each task, edit the name of each View,\nslice by field, sort by field, etc.\n"),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/board-2.png","width":"900","alt":"Board View"}})],1),_v(" "),_c('br'),_v(" "),_c('box',{attrs:{"type":"tip"}},[_v("\ntP tips:\n"),_c('br'),_v("\n- Sort by a particular field to prioritise tasks by that field. \n"),_c('br'),_v("\nFor example: Add start date and end date custom fields. Sort by end date in ascending order to make it easier to\nprioritise tasks by deadline.\n"),_c('br'),_v("\n- Slice by milestone to segment the View by milestone. This allows for automated tracking of tasks within \neach milestone.\n"),_c('br'),_v("\n- Useful \"Status\" categories to add include: Backlog, Todo, In Progress, Needs PR Review, Done \nand Up Next in v1.x\n")]),_v(" "),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/board-3.png","width":"900","alt":"Board View"}}),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(8),_v(" "),_c('p',[_v("GitHub Project Boards generates useful \"Insights\" for users.\nClicking on the \"Insights\" button in the top right corner of any View page will bring you to the Insights page.")]),_v(" "),_c('pic',{attrs:{"src":"/CS2103R/images/insightsbutton.png","width":"300","alt":"Insights button"}}),_v(" "),_c('p',[_v("A default bar graph already exists on the Insights page, which shows the number of tasks grouped by status\n"),_c('pic',{attrs:{"src":"/CS2103R/images/bargraph.png","width":"900","alt":"Default bar graph"}})],1),_v(" "),_c('p',[_v("To add a custom chart, click on the \"New chart\" button in the left menu, then configure it by clicking on the\n\"Configure\" button in the top right corner. Then, add your desired layout, x-axis and y-axis.\n"),_c('pic',{attrs:{"src":"/CS2103R/images/customchart.png","width":"900","alt":"Insights button"}})],1),_v(" "),_c('box',{attrs:{"type":"tip"}},[_v("\ntP tips:\n"),_c('br'),_v("\nA useful custom chat to create would be a bar graph of the number of tasks grouped by assignee. The y-axis in\nthis case would be \"Count of items\" and the x-axis would be \"Assignees\".\n"),_c('br'),_v(" "),_c('br'),_v("\nThis allows your tP group to track the workload distribution of tasks and ensure that it is roughly even\nso that no teammate is overloaded with work.\n"),_c('br'),_v(" "),_c('br'),_v("\nYou can also configure the chart to Group by \"Labels\" to ensure that each teammate has to chance to contribute\nto different areas of software development, like bugs, documentation and feature enhancements.\n")]),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(13)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"table-of-contents"}},[_v("Table of Contents"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#table-of-contents","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#useful-features"}},[_v("Useful Features")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#adding-fields-to-tasks"}},[_v("Adding Fields to Tasks")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#visualisation-of-tasks-in-different-formats"}},[_v("Visualisation of Tasks in Different Formats")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#automated-insights"}},[_v("Automated Insights")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#creating-automated-workflows"}},[_v("Creating Automated Workflows")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#faq"}},[_v("FAQ")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#glossary"}},[_v("Glossary")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"useful-features"}},[_v("Useful Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#useful-features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"adding-fields-to-tasks"}},[_v("Adding Fields to Tasks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-fields-to-tasks","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("\"End Date\" of type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Date")])]),_v(" "),_c('li',[_v("\"Estimated Completion Hours\" of type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Number")])])])}
},function anonymous(
) {
with(this){return _c('h6',{attrs:{"id":"to-add-the-created-custom-field-to-the-task"}},[_v("To add the created custom field to the task"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#to-add-the-created-custom-field-to-the-task","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"visualisation-of-tasks-in-different-formats"}},[_v("Visualisation of Tasks in Different Formats"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#visualisation-of-tasks-in-different-formats","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"automated-insights"}},[_v("Automated Insights"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#automated-insights","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"creating-automated-workflows"}},[_v("Creating Automated Workflows"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-automated-workflows","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v("\nA")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")]),_v("]")])])])}
}];
  