
import Column from "../components/Column"
import NewColumn from "../components/NewColumn";
import { Button, Row, Col, Input } from 'antd';
import { useState, useEffect } from "react";
import 'antd/dist/antd.less';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from "../components/AddTask";
import { taskAdded, setSelectedColIndex, setColumnName, columnAdded } from "../features/addTask/taskSlice";

const Kanban = () => {

    const dispatch = useDispatch()

    const tasks = useSelector(state => state.tasks.columns)
    const newColName = useSelector(state => state.tasks.columnName)

    const onAddCol = () => {
        const newCol = {
            colName: newColName,
            colTasks: []
        }
        dispatch(columnAdded(newCol))
    }

    return (
        <>
            <Row>
                {tasks && tasks.map((task, colIndex) => {
                    return (
                        <>
                            <Col key={task.colName}>
                                <div>{task.colName}</div>
                                <Column col={task} colIndex={colIndex} />
                                <AddTask colIndex={colIndex} col={task} />
                            </Col>
                        </>
                    )
                })}
                <Col>
                    <div>
                        <Input onChange={(e) => {
                            const value = e.target.value;
                            dispatch(setColumnName(value))
                        }} style={{ width: 100 }} />
                    </div>
                    <Button onClick={onAddCol}>Add Column</Button>
                </Col>
            </Row>

        </>

    );
}

export default Kanban