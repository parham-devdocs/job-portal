import { Col, Form, Row, Input, Space, Button } from 'antd'
import DynamicFieldList from './DynamicFieldList';
import { DynamicFieldListProps } from '../types';

const { TextArea } = Input;
const dynamicSections = [
  {
    name: 'education',
    addButtonLabel: 'Add Education',
    fields: [
      { fieldName: 'qualification', label: 'Qualification', message: 'Qualification is required', span: 8 },
      { fieldName: 'institution', label: 'Institution', message: 'Institution is required', span: 8 },
      { fieldName: 'percentage', label: 'Percentage', message: 'Percentage is required',  span: 6 },
    ],
  },
  {
    name: 'skills',
    addButtonLabel: 'Add Skill',
    fields: [
      { fieldName: 'name', label: 'Skill', message: 'Skill name is required',  span: 20 },
      { fieldName: 'proficiency', label: 'Proficiency',type:"range",range:{min:1,max:5}, message: 'Proficiency is required', span: 20 },

    ],
  },
  {
    name: 'experience',
    addButtonLabel: 'Add Experience',
    fields: [
      { fieldName: 'role', label: 'Role', message: 'Role is required', span: 8 },
      { fieldName: 'company', label: 'Company', message: 'Company is required', span: 8 },
      { fieldName: 'duration', label: 'Duration', message: 'Duration is required',  span: 6 },
    ],
  },
] satisfies DynamicFieldListProps[]
const EmployeeForm = () => {
  return (
      <Row gutter={[16, 16]} className="w-full">
        <Col  xs={24} md={16} xl={8}  className="w-full">
          <Form.Item 
            name="firstName" 
            rules={[{ required: true, message: "First name is required" }]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
        </Col>
        <Col  xs={24} md={16} xl={8} className="w-full">
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
        <Col  xs={24} md={16} xl={8} className="w-full">
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
        
{dynamicSections.map(section=>{
  return         <DynamicFieldList name={section.name}  addButtonLabel={section.addButtonLabel} fields={section.fields}  />

})}

     
 
      
      </Row>
  )
}

export default EmployeeForm