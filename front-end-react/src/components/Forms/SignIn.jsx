import { Button, Form, Input, Space } from 'antd'
import React from 'react'

const SignIn = () => {
    const handleFinish = (e) => {
        console.log(e);
    }
    return (
        <Form autoComplete='off' onFinish={handleFinish} layout='vertical'>
            <Form.Item name='username' label='Username' rules={[
                {
                    required: true,
                    message: 'Username is required',
                },
                {
                    whitespace: true,
                    message: 'Username cannot be empty'
                }
            ]}>
                <Input placeholder='Username' allowClear />
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[
                {
                    required: true,
                    message: 'Password is required'
                }
            ]}>
                <Input.Password placeholder='Password' allowClear />
            </Form.Item>
            <Form.Item>
                <Space size='small'>
                    <Button type='primary' htmlType='submit'>Sign In</Button>
                    <Button type='primary' htmlType='reset'>Clear</Button>
                </Space>
            </Form.Item>
        </Form>
    )
}

export default SignIn