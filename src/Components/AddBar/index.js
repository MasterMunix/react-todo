import React, { useState } from "react";
import { nanoid } from 'nanoid';


export function AddBar({ setTask, task, setTaskList }) {
    const [error, setError] = useState(''); //This state is use in case the input task was empty or null


    const handleChange = (e) => {
        //Set the task to the input got it from the form
        setTask({ name: e.target.value, id: `todo-${nanoid()}`, completed: false });
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
        setTaskList(prevState => (
            [...prevState, task]
        ));

        //Set the input task to empty again
        e.target[0].value = "";

        //Prevents the form to submit and reload the page!
        e.preventDefault();
    };

    return (
        <>
            <div class="row g-3 align-items-center pt-4">
                {error}
                <form method="POST" onSubmit={handleSubmit} className="row">
                    <div class="col-auto">
                        <label for="task" class="col-form-label">Task</label>
                    </div>
                    <div class="col-auto">
                        <input type={'text'} className="form-control" id="task" placeholder="Introduce your task" name="task" onChange={handleChange} />
                    </div>
                    <div class="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <br></br>
        </>

    );
}