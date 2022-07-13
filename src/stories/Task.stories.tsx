import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Task} from '../Task';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TODOLIST/Task',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args:{
        // changeTaskStatus: action('changeTaskStatus'),
        // changeTaskTitle: action('changeTaskTitle'),
        // removeTask: action('removeTask'),
        // todolistId: 'sad'
    }
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) =>{
    const [task, setTask] = useState({id: 'qwe', title: 'JS', isDone: true})
    const changeTaskStatus = () => setTask({id: 'qwe', title: 'JS', isDone:!task.isDone})
    const changeTaskTitle = (taskId: string, title:string) => setTask({id: 'qwe', title: title, isDone:task.isDone})
    return <Task changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle} removeTask={()=>action('removeTask')} task={task} todolistId={'sad'}/>
};

export const TaskStory = Template.bind({});
TaskStory.args = {}
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// TaskIsDoneStory.args = {
//     task: {id: 'qwe', title: 'JS', isDone: true},
// };
//
// export const TaskIsNotDoneStory = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// TaskIsNotDoneStory.args = {
//     task: {id: 'qwe1', title: 'HTML', isDone: false},
// };
