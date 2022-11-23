import * as components from '../';


export function tasksDone({ data, taskList, setTaskList }) {

    //This will filter the taskList from the props to take the ones that are completed
    const Task = taskList.filter((task) =>
        task.completed
    ).map((task) => (
        <components.taskRow data={task} taskList={taskList} setTaskList={setTaskList} key={task.id} />
    ));

    

    return (
        <div className="row">
            <div className="col-5">
                <button className="btn btn-success dropdown-toggle" data-toggle="collapse" data-target="#tasksDone" type="button" >
                    Tasks Done
                </button>
                <br></br>
                <div className='collapse show' id='tasksDone'>
                    {Task}
                </div>

            </div>
        </div>
    );
}