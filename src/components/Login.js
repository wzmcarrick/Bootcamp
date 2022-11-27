import React from 'react';
import { Form, Button, Checkbox, Input } from 'antd';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success: ', values)
    };

    const onFinishFailed = (erorInfo) => {
        console.log('Failed: ', erorInfo)
    };


    return (
        <>
            <Form name='Login' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">

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