# Ract Scheduler Component

[![npm package](https://img.shields.io/npm/v/@aldabil/react-scheduler/latest.svg)](https://www.npmjs.com/package/@aldabil/react-scheduler)
[![Follow on Twitter](https://img.shields.io/twitter/follow/aldabil21.svg?label=follow+aldabil21)](https://twitter.com/intent/follow?screen_name=aldabil21)

## Installation

```jsx
npm i @aldabil/react-scheduler
```

#### Peer Dependencies

```jsx
npm i @material-ui/core @material-ui/icons date-fns
```

## Usage

```jsx
import { Scheduler } from "@aldabil/react-scheduler";
```

## Example

```jsx
<Scheduler
  view="month"
  events={[
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2021 5 2 09:30"),
      end: new Date("2021 5 2 10:30"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2021 5 4 10:00"),
      end: new Date("2021 5 4 11:00"),
    },
  ]}
/>
```

#### Options

| Option                  | Value                                                                                                                                                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| height                  | number. Min height of table. <br> _Default_: 600                                                                                                                                                                                  |
| view                    | string. Initial view to load. options: "week", "month", "day". <br> _Default_: "week" (if it's not null)                                                                                                                          |
| month                   | Object. Month view props. <br> _default_: <pre>{<br>weekDays: [0, 1, 2, 3, 4, 5], <br>weekStartOn: 6, <br>startHour: 9, <br>endHour: 17, <br>}</pre>                                                                              |
| week                    | Object. Month view props. <br> _default_: <pre>{ <br>weekDays: [0, 1, 2, 3, 4, 5], <br>weekStartOn: 6, <br>startHour: 9, <br>endHour: 17,<br> }</pre>                                                                             |
| day                     | Object. Month view props. <br> _default_: <pre>{<br>startHour: 9, <br>endHour: 17<br> }</pre>                                                                                                                                     |
| selectedDate            | Date. Initial selected date. <br>_Default_: new Date()                                                                                                                                                                            |
| events                  | Array of Objects. <br>_Default_: []                                                                                                                                                                                               |
| remoteEvents            | Function(query: string). Return promise of array of events. Used for remote data                                                                                                                                                  |
| fields                  | Array of extra fields with configurations. <br> Example: <pre> { <br> name: "description", <br> type: "input" , <br> config: { label: "Description", required: true, min: 3, email: true, variant: "outlined", ....<br>}</pre>    |
| loading                 | boolean. Loading state of the calendar table                                                                                                                                                                                      |
| onConfirm               | Function(event, action). Return promise with the new added/edited event use with remote data. <br> _action_: "add", "edit"                                                                                                        |
| onDelete                | Function(id) Return promise with the deleted event id to use with remote data.                                                                                                                                                    |
| customEditor            | Function(fields). Override editor modal                                                                                                                                                                                           |
| viewerExtraComponent    | Function(fields, event) OR Component. Additional component in event viewer popper                                                                                                                                                 |
| resources               | Array. Resources array to split event views with resources <br>_Example_ <pre>{<br>assignee: 1,<br>text: "User One", <br>subtext: "Sales Manager", <br>avatar: "https://picsum.photos/200/300", <br>color: "#ab2d2d",<br> }</pre> |
| resourceFields          | Object. Map the resources correct fields. <br>_Example_: <pre>{<br> idField: "admin_id", <br>textField: "title", <br>subTextField: "mobile", <br>avatarField: "title", <br>colorField: "background",<br> }</pre>                  |
| recourseHeaderComponent | Function(resource). Override header component of resource                                                                                                                                                                         |
| resourceViewMode        | Display resources mode. <br>_Options_: "default", "tabs"                                                                                                                                                                          |

### Demos

- [Basic](https://codesandbox.io/s/react-scheduler-demo-standard-v96bd)
- [Remote Data](https://codesandbox.io/s/remote-data-j13ei)
- [Custom Fields](https://codesandbox.io/s/custom-fields-b2kbv)
- [Editor Override](https://codesandbox.io/s/customeditor-tt2pf)
- [More on Github](https://github.com/aldabil21/react-scheduler)