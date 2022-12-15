import AuthRoute from "../components/AuthRoute";
import Column from "../components/Column"
import { Button, Row, Col, Input } from 'antd';
import 'antd/dist/antd.less';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from "../components/AddTask";
import { setColumnName, columnAdded, dragEnd } from "../features/KanbanSlice";
import { DragDropContext } from "react-beautiful-dnd";
import { toast } from "react-toastify";

const Kanban = () => {

    const dispatch = useDispatch()

    const cols = useSelector(state => state.kanban.columns)
    const newColName = useSelector(state => state.kanban.columnName)

    const onAddCol = () => {
        const newCol = {
            colName: newColName,
            colTasks: []
        }
        dispatch(columnAdded(newCol))
    }
    const onDragEnd = (result) => {
        console.log('drag end', result)

        const { destination, source, draggableId: taskId } = result

        if (!destination || !destination.droppableId) {
            toast.warning('You have dropped something out of the drappable area!')
            return
        }

        // destination 
        // which one was moved?

        // original array => tasks?

        // => new array with new postions

        console.log('destination', destination)
        console.log('source', source)
        console.log('draggableId', taskId)

        dispatch(dragEnd({
            destination,
            taskId,
            source
        }))

    }

    return (
        <>
            <AuthRoute>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Row style={{ padding: 30 }}>
                        {cols && cols.map((col, colIndex) => {
                            return (
                                <>
                                    <Col key={col.colName} style={{ margin: 5, background: 'yellow' }}>
                                        <div style={{ margin: 10 }}>
                                            <div style={{ textAlign: "center" }}>{col.colName}</div>
                                            <Column col={col} colIndex={colIndex} />
                                            <AddTask colIndex={colIndex} col={col} />
                                        </div>

                                    </Col>
                                </>
                            )
                        })}
                        <Col style={{ margin: 5 }}>
                            <div>
                                <Input onChange={(e) => {
                                    const value = e.target.value;
                                    dispatch(setColumnName(value))
                                }} style={{ width: 100 }} />
                            </div>
                            <Button onClick={onAddCol}>Add Column</Button>
                        </Col>
                    </Row>
                </DragDropContext>
            </AuthRoute>

        </>

    );
}

export default Kanban