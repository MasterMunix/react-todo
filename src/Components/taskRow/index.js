import React from "react";

export function taskRow({ data, setTaskList, taskList }) {

    const name = data.completed ? <span className='text-muted'> {data.name} </span> : data.name;
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
            <label class="list-group-item d-flex gap-3 ">
                <input class="form-check-input flex-shrink-0" type="checkbox" value=""  style={{ fontSize: "1.375em" }} id={data.id} {...isDone} onClick={handleInputClick} />
                <span class="pt-1 form-checked-content">
                    <strong>{name}</strong>
                </span>
                <button className="btn btn-danger" data-id={data.id} onClick={handleButtonClick}>
                    delete
                </button>
            </label>

        </>
    );
}