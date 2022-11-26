
import Column from "../components/Column"
import NewColumn from "../components/NewColumn";
import { Button, Row, Col } from 'antd';
import { useState, useEffect } from "react";
import 'antd/dist/antd.less';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from "../components/AddTask";

const Kanban = () => {
    // const [columns, setColumns] = useState([<Column key={0} />])

    // const addColumn = (e) => {
    //     e.preventDefault()
    //     setColumns([...columns, <Column key={columns.length} />])
    // }

    // const dispatch = useDispatch()

    const tasks = useSelector(state => state.tasks.columns)

    return (
        <>
            <Row>
                {/* <Button onClick={addColumn}>Add Column</Button> */}
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
            </Row>

        </>

    );
}

export default Kanban