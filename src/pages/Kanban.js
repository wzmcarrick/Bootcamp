
import Column from "../components/Column"
import NewColumn from "../components/NewColumn";
import { Button } from 'antd';
import { useState } from "react";
import 'antd/dist/antd.less';

const Kanban = () => {
    const [columns, setColumns] = useState([<Column key={0} />])

    const addColumn = (e) => {
        e.preventDefault()
        setColumns([...columns, <NewColumn key={columns.length} />])
    }

    return (
        <>
            <Button onClick={addColumn}>Add Column</Button>
            <div className="App">
                {columns}
            </div>
        </>

    );
}

export default Kanban