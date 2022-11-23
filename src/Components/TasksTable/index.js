
import * as components from '../';

export function tasksTable({ data, taskList, setTaskList }) {

    return (
        <>
            <components.tasksNotDone data={data} taskList={taskList} setTaskList={setTaskList} />
            <components.tasksDone data={data} taskList={taskList} setTaskList={setTaskList} />
        </>
    );
}