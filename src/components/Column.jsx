import TaskItem from './TaskItem';
import { Droppable, Draggable } from "react-beautiful-dnd";

const Column = ({ col, colIndex }) => {

  console.log(col, colIndex, '++++++++++++++++++++++++')

  // const columnTasks = useSelector(state => state.tasks.columns)
  // console.log(columnTasks)

  return (
    // <div className='singleColumn'>
    <Droppable droppableId={col.colName}>
      {(provided, snapshot) => {
        // 1. add provided => doppableprops
        // 2. add ref 
        return <div
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {col.colTasks.map((colTask, index) => {
            console.log(colTask, 'coltask')
            return <Draggable key={colTask.id} draggableId={colTask.id + ''} index={index}>
              {
                (provided, snapshot) => {
                  return <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskItem key={colTask.id} colIndex={colIndex} showTask={colTask} />
                  </div>
                }
              }
            </Draggable>
          })}
          {provided.placeholder}
        </div>
      }}
    </Droppable>
    // </div>

  );
};

export default Column;
