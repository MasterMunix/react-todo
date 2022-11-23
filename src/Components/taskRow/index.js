import React from "react";

export function taskRow({ data, setTaskList, taskList }) {

    const name = data.completed ? <del> {data.name} </del> : data.name;
    const isDone = data.completed ? { defaultChecked: true } : '';

    const handleInputClick = (e) => {

        const Task = taskList.map((task) => {
            if (task.id === e.target.id) {

                task.completed = !task.completed;
            }
            return task;
        });

        setTaskList(Task);


    };

    const handleButtonClick = (e) => {

        const Task = taskList.filter((task) => (
            task.id !== e.target.dataset.id
        )).map(task => task);
        setTaskList(Task);
    };

    return (
        <>
            <div className="form-check">
                <input type={'checkbox'} className="form-check-input" id={data.id} {...isDone} onClick={handleInputClick}>
                </input>
                <label htmlFor="task">
                    {name}
                    <button className="btn btn-danger" data-id={data.id} onClick={handleButtonClick}>
                        delete
                    </button>
                </label>
            </div>
            
        </>
    );
}