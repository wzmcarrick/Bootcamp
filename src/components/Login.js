import React from 'react';
import { Form, Button, Checkbox, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";


const Login = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async () => {
        const res = await axios.post(
            "https://lambent-phoenix-5a89bb.netlify.app/.netlify/functions/auth/login",
            {
                data: {
                    ...form.getFieldsValue()
                }
            }
        )
        console.log(res)

        if (res?.data?.token) {
            localStorage.setItem("token", res.data.token);
            toast.success('Login successful');
            setTimeout(() => {
                navigate("/dashboard");
            }, 1000)
        } else {
            console.log("not success");
            toast.warn("Something wrong with login");
        }
    };

    const onFinishFailed = (erorInfo) => {
        console.log('Failed: ', erorInfo)
    };


    return (
        <>
            <Form name='Login' form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName='checked'
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>

            </Form>
        </>

    );
};

export default Login