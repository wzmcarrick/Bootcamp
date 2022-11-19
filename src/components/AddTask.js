import { Button, Form, DatePicker, Radio, Input, Space } from "antd"
import { useState } from "react"

const AddTask = ({ onAdd }) => {

    const [name, setName] = useState("");
    const [assignee, setAssignee] = useState("");
    const [date, setDate] = useState(new Date());
    const [detail, setDetail] = useState("");
    const [priority, setPriority] = useState("");

    const [form] = Form.useForm();

    const onSubmit = () => {

        console.log(name)
        console.log(assignee)
        console.log(date.toISOString().split('T')[0])
        console.log(detail)
        console.log(priority)

        onAdd({ name, assignee, date: date.toISOString().split('T')[0], detail, priority })

        setName(" ")
        setAssignee(" ")
        setDate(new Date().toISOString().split('T')[0])
        setDetail(" ")
        setPriority(" ")
    }

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form className="custom-form" form={form} labelCol={{ span: 7, }} wrapperCol={{ span: 16, }} onFinish={onSubmit}>
            <Form.Item label="Name" name={"name"}><Input onChange={e => { setName(e.target.value) }} /></Form.Item>
            <Form.Item label="Assignee" name={"assignee"}><Input onChange={e => { setAssignee(e.target.value) }} /></Form.Item>
            <Form.Item label="Date" name={"date"}><DatePicker /></Form.Item>
            <Form.Item label="Detail" name={"detail"}><Input onChange={e => { setDetail(e.target.value) }} /></Form.Item>
            <Form.Item label="Priority" name={"priority"}>
                <Radio.Group onChange={(e) => { setPriority(e.target.value) }} value={priority}>
                    <Radio value={'High'}>High</Radio>
                    <Radio value={'Medium'}>Medium</Radio>
                    <Radio value={'Low'}>Low</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                <Space direction="horizontal" size={12}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="reset" onClick={onReset}>
                        Reset
                    </Button>
                </Space>

            </Form.Item>

        </Form>
    )



}

export default AddTask