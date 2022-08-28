import { Button, Checkbox, DatePicker, Form, Input, message, Select, Space } from 'antd'
import React from 'react'

const Register = () => {
    const handleFinish = (e) => {
        console.log(e)
    }
    return (
        <Form onFinish={handleFinish} autoComplete='off' layout='vertical'>
            <Form.Item name='name' label='Name' rules={[
                {
                    required: true,
                    message: 'Name is required'
                },
                {
                    whitespace: true,
                    message: 'Name cannot be empty'
                },
                {
                    min: 3,
                    message: 'Name must be least 3 characters'
                }
            ]}
                hasFeedback>
                <Input placeholder='Name' allowClear />
            </Form.Item>
            <Form.Item name='surname' label='Surname' rules={[
                {
                    required: true,
                    message: 'Surname is required'
                },
                {
                    whitespace: true,
                    message: 'Surname cannot be empty'
                },
                {
                    min: 2,
                    message: 'Surname must be least 2 characters'
                }
            ]}
                hasFeedback >
                <Input placeholder='Surname' allowClear />
            </Form.Item>
            <Form.Item name='email' label='Email' rules={[
                {
                    required: true,
                    message: 'Email is required'
                },
                {
                    type: 'email',
                    message: 'That is not a vaild email'
                }, {
                    min: 3,
                    message: 'Email must be least 3 characters'
                }
            ]}
                hasFeedback
            >
                <Input placeholder='Email' allowClear />
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[
                {
                    required: true,
                    message: 'Password is required'
                },
                {
                    min: 6,
                    message: 'Password must be least 6 characters'
                }
            ]}
                hasFeedback
            >
                <Input.Password placeholder='Password' allowClear />
            </Form.Item>
            <Form.Item name='confirmPassword' label='Confirm Password' dependencies={['password']} rules={[
                {
                    required: true,
                    message: 'Confirm Password is required'
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    }
                })
            ]}
                hasFeedback
            >
                <Input.Password placeholder='Confirm Password' allowClear />
            </Form.Item>
            <Form.Item name='gender' label='Gender' requiredMark='optional' hasFeedback>
                <Select placeholder='Select your gender' allowClear>
                    <Select.Option value='male'>Male</Select.Option>
                    <Select.Option value='famale'>Famale</Select.Option>
                    <Select.Option value='other'>Other</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name='dateofbirth' label='Date of Birth' rules={[
                {
                    required: true,
                    message: 'Date of Birth is required'
                }
            ]} hasFeedback>
                <DatePicker picker='date' placeholder='Date of Birth' style={{ width: '100%' }} allowClear />
            </Form.Item>
            <Form.Item name='agreement' hasFeedback valuePropName='checked' rules={[
                {
                    validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept Terms and Conditions')
                }
            ]}>
                <Checkbox>I have read the <a href="" alt=''>Terms and Conditions</a> </Checkbox>
            </Form.Item>
            <Form.Item>
                <Space size='small'>
                    <Button type='primary' htmlType='submit'>Register</Button>
                    <Button type='primary' htmlType='reset'>Clear</Button>
                </Space>
            </Form.Item>
        </Form>
    )
}

export default Register