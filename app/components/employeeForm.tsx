import { Col, Form, Row, Input } from 'antd'
import React from 'react'

const { TextArea } = Input;

const EmployeeForm = () => {
  return (
      <Row gutter={[24, 24]} className="w-full">
        <Col span={8} className="w-full">
          <Form.Item 
            name="firstName" 
            rules={[{ required: true, message: "First name is required" }]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
        </Col>
        <Col span={8} className="w-full">
          <Form.Item 
            name="email" 
            rules={[
              { required: true, message: "Email is required" },
              { type: 'email', message: "Please enter a valid email" }
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
        </Col>
        <Col span={8} className="w-full">
          <Form.Item 
            name="phoneNumber" 
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </Col>
        <Col span={24} className="w-full">
          <Form.Item  name="carrierObject">
            <TextArea rows={4} placeholder="Enter carrier object details" />
          </Form.Item>
        </Col>
      </Row>
  )
}

export default EmployeeForm