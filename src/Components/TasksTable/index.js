
import * as components from '../';

export function tasksTable({ data, taskList, setTaskList }) {

    return (
        <>
            <div class="list-group w-auto">

                <components.tasksNotDone data={data} taskList={taskList} setTaskList={setTaskList} />

                <components.tasksDone data={data} taskList={taskList} setTaskList={setTaskList} />
            </div>

        </>
    );
}