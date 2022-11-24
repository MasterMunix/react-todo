import React, { useState } from "react";
import { nanoid } from 'nanoid';


export function AddBar({ setTask, task, setTaskList }) {
    const [error, setError] = useState(''); //This state is use in case the input task was empty or null


    const handleChange = (e) => {
        //Set the task to the input got it from the form
        setTask({ ...task, name: e.target.value, id: `todo-${nanoid()}` });
    };

    const handleSubmit = (e) => {
        /** 
         * TODO: Prevents a task be empty
        */
        if (e.target[0].value === '') {
            setError(<p style={{ color: "red" }}> The task input cant be empty </p>);
            e.preventDefault();
            return;
        }
        //Set the error string to empty again so it doesnt show to the user
        setError('');

        //Add the task written to the taskList in the ToDo Component
        setTaskList({ name: e.target.value, id: `todo-${nanoid()}`, completed: false });

        //Set the input task to empty again
        e.target[0].value = "";

        //Prevents the form to submit and reload the page!
        e.preventDefault();
    };

    return (
        <>
            <div className="row">
                <div className="col-5">
                    {error}
                    <form method="POST" onSubmit={handleSubmit} className="row">
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="task">
                                Task
                            </label>
                            <input type={'text'} className="form-control" id="task" placeholder="Introduce your task" name="task" onChange={handleChange} >
                            </input>
                        </div>
                        <div className="col-auto align-self-end">
                            <button type="submit" className="btn btn-primary mb-2">
                                submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <br></br>
        </>

    );
}