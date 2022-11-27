import { Button, Form, DatePicker, Radio, Input, Modal, Space } from "antd"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { taskAdded, setSelectedColIndex } from "../features/KanbanSlice";

const { TextArea } = Input;

const AddTask = ({ col, colIndex }) => {

    const [form] = Form.useForm();

    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [assignee, setAssignee] = useState("");
    const [dueDate, setDate] = useState(new Date());
    const [detail, setDetail] = useState("");
    const [priority, setPriority] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        dispatch(setSelectedColIndex(colIndex))
    };

    // const handleOk = () => {

    //     const newTask = {
    //         id: nanoid(),
    //         name,
    //         assignee,
    //         dueDate: dueDate.toISOString().split('T')[0],
    //         detail,
    //         priority
    //     };

    //     const addedTask = {
    //         colName: col.colName,
    //         colTasks: newTask
    //     }


    //     dispatch(taskAdded(addedTask))

    //     setIsModalOpen(false);
    //     form.resetFields();
    //     setName(" ")
    //     setAssignee(" ")
    //     setDate(new Date())
    //     setDetail(" ")
    //     setPriority(" ")
    //     setIsModalOpen(false);
    // };

    const onSubmit = (values) => {

        const newTask = {
            ...values,
            dueDate: dueDate.toISOString().split('T')[0],
        };
        console.log(newTask)

        const addedTask = {
            colName: col.colName,
            colTasks: newTask
        }


        dispatch(taskAdded(addedTask))

        setIsModalOpen(false);
        form.resetFields();
        setName(" ")
        setAssignee(" ")
        setDate(new Date())
        setDetail(" ")
        setPriority(" ")
        setIsModalOpen(false);
    };


    const handleCancel = () => {

        form.resetFields();
        setName(" ")
        setAssignee(" ")
        setDate(new Date())
        setDetail(" ")
        setPriority(" ")
        setIsModalOpen(false);
    };

    const handleReset = () => {

        form.resetFields();
        setName(" ")
        setAssignee(" ")
        setDate(new Date())
        setDetail(" ")
        setPriority(" ")
    };

    return (

        <>
            <Button type="primary" onClick={showModal}>
                Add Task
            </Button>
            <Modal title="Add a new task" open={isModalOpen}
                // onOk={handleOk} onCancel={handleCancel}
                footer={[<Button key="Close" onClick={handleCancel}>
                    Close
                </Button>,
                <Button key="Reset" onClick={handleReset}>Reset</Button>,
                <Button key="submit" type="primary" onClick={() => {
                    form.validateFields().then((values) => {
                        onSubmit(values)
                    })
                }}>
                    Submit
                </Button>,

                ]}
            >
                <Form className="custom-form" form={form} labelCol={{ span: 5, }} wrapperCol={{ span: 16, }}>
                    <Form.Item label="Name" name={"name"} rules={[{ required: true, message: 'Please enter name!', },]}><Input onChange={e => { setName(e.target.value) }} /></Form.Item>
                    <Form.Item label="Assignee" name={"assignee"}><Input onChange={e => { setAssignee(e.target.value) }} /></Form.Item>
                    <Form.Item label="Date" name={"dueDate"} rules={[{ required: true, message: 'Please enter Date!', },]} ><DatePicker onChange={e => { setDate(e._d) }} /></Form.Item>
                    <Form.Item label="Detail" name={"detail"}><TextArea rows={4} onChange={e => { setDetail(e.target.value) }} /></Form.Item>
                    <Form.Item label="Priority" name={"priority"}>
                        <Radio.Group onChange={(e) => { setPriority(e.target.value) }} value={priority}>
                            <Radio value={'High'}>High</Radio>
                            <Radio value={'Medium'}>Medium</Radio>
                            <Radio value={'Low'}>Low</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {/* <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                        <Space direction="horizontal" size={12}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button htmlType="reset" onClick={handleReset}>
                                Reset
                            </Button>
                        </Space>

                    </Form.Item> */}
                </Form>
            </Modal>
        </>

    )



}

export default AddTask