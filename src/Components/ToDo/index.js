import React, { useState } from "react";
import * as components from '../';

const DATA = [
    { name: "Barrer", completed: false },
    { name: "Do the dishes", completed: false },
    { name: "Do my bed", completed: false },
    { name: "clean the floor", completed: true },
    { name: "Vacumm", completed: true },
    { name: "Iron the clothes", completed: false },
];




export function ToDo(props) {
    const [task, setTask] = useState({ name: "", completed: false });
    const [taskList, setTaskList] = useState([
        { id: "1", name: "Trapear", completed: false },
        { id: "2", name: "Cocinar", completed: true },
        { id: "3", name: "Lavar", completed: true },
        { id: "4", name: "Barrer", completed: false }
    ]);


    return (
        <>
            <div className="container">
                <h2>ToDo APP</h2>
                <components.AddBar setTask={setTask} task={task} setTaskList={setTaskList} />
                <components.tasksTable data={DATA} task={task} taskList={taskList} setTaskList={setTaskList} />
            </div>
        </>

    );
}