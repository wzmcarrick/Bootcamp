import TaskItem from './TaskItem';

const Column = ({ col, colIndex }) => {

  console.log(col, colIndex)

  // const columnTasks = useSelector(state => state.tasks.columns)
  // console.log(columnTasks)

  return (
    // <div className='singleColumn'>
    <div>
      {col.colTasks.map((colTask) => <TaskItem key={colTask.id} colIndex={colIndex} showTask={colTask} />)}
    </div>

    // </div>

  );
};

export default Column;
