import AuthRoute from "../components/AuthRoute";
import Column from "../components/Column"
import { Button, Row, Col, Input } from 'antd';
import 'antd/dist/antd.less';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from "../components/AddTask";
import { setColumnName, columnAdded } from "../features/KanbanSlice";

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

    return (
        <>
            <AuthRoute>


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

            </AuthRoute>

        </>

    );
}

export default Kanban