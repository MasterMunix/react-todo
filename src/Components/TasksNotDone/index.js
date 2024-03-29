import { useState } from 'react';
import * as components from '../';



export function tasksNotDone({ data, taskList, setTaskList }) {

    //This will filter the taskList from the props to take the ones that are NOT completed
    const Task = taskList.filter((task) =>
        task.completed === false
    ).map((task) => (
        <components.taskRow data={task} taskList={taskList} setTaskList={setTaskList} key={task.id} />
    ));


    return (
        <>

            <div className="row">
                <div className="col-auto">
                    <button className="btn btn-secondary dropdown-toggle" data-toggle="collapse"

                        data-target="#tasksNotDone" type="button">
                        Tasks not done <span className='badge text-bg-danger'>{Task.length}</span>
                    </button>
                    <br></br>
                    <div className='collapse show ' id='tasksNotDone'>
                        {Task}
                    </div>
                </div>
            </div>
        </>
    );
}