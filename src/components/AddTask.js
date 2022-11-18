import { Button, Form, DatePicker, Radio, Input } from "antd"
import { useState } from "react"
// import moment from 'moment';

const AddTask = ({ onAdd }) => {

    const [name, setName] = useState("");
    const [assignee, setAssignee] = useState("");
    const [date, setDate] = useState(new Date());
    const [detail, setDetail] = useState("");
    const [priority, setPriority] = useState("");

    const [form] = Form.useForm();

    // const formRef = useRef()

    const onSubmit = () => {
        // e.preventDefault()
        console.log(name)
        console.log(assignee)
        console.log(date)
        console.log(detail)
        console.log(priority)

        onAdd({ name, assignee, date: date.toLocaleString(), detail, priority })

        setName(" ")
        setAssignee(" ")
        setDate(new Date().toLocaleString())
        setDetail(" ")
        setPriority(" ")
    }

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form form={form} labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} onFinish={onSubmit}>
            <Form.Item label="Name"><Input onChange={e => { setName(e.target.value) }} /></Form.Item>
            <Form.Item label="Assignee"><Input onChange={e => { setAssignee(e.target.value) }} /></Form.Item>
            <Form.Item label="Date"><DatePicker /></Form.Item>
            <Form.Item label="Detail"><Input onChange={e => { setDetail(e.target.value) }} /></Form.Item>
            <Form.Item label="Priority">
                <Radio.Group onChange={(e) => { setPriority(e.target.value) }} value={priority}>
                    <Radio value={'High'}>High</Radio>
                    <Radio value={'Medium'}>Medium</Radio>
                    <Radio value={'Low'}>Low</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>

        </Form>
    )



}

export default AddTask