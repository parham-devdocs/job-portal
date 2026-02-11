import { Button, Form, Input, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DynamicFieldListProps } from '../types';



const DynamicFieldList = ({
  name,
  fields,
  addButtonLabel,
  colSpan = 24,
}: DynamicFieldListProps) => {
  return (
    <Col span={colSpan}>
      <Form.List name={name}>
        {(formFields, { add, remove }) => (
          <Row gutter={[12, 12]}>
            <Col span={24}>
              {formFields.map(({ key, name: fieldName, ...restField }) => (
                <Row
                  key={key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  gutter={[8, 8]}
                  align="middle"
                >
                  {fields.map((field) => {
                 return  <Col span={field.span || 8} key={field.fieldName}>
                      <Form.Item
                        {...restField}
                        name={[fieldName, field.fieldName]}
                        rules={[
                          { required: true, message: field.message || `${field.label} is required` },
                        ]}
                      >
                      {field.type==="range" ? 
                      <Input placeholder={ field.label} type="number" min={field.range?.min} max={field.range?.max}/> 
                      : <Input placeholder={ field.label} />}  
                      </Form.Item>
                    </Col> 
                  }
                    
                  )}

                  {/* Delete Button */}
                  <Col span={4} className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => remove(fieldName)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200
                               flex items-center justify-center border-2 border-red-300
                               rounded-full w-8 h-8 hover:border-red-500 hover:scale-110
                               active:scale-95 cursor-pointer"
                      aria-label={`Remove ${addButtonLabel.slice(4)}`}
                    >
                      <i className="ri-delete-bin-line text-base" />
                    </button>
                  </Col>
                </Row>
              ))}
            </Col>

            {/* Add Button */}
            <Col span={24} className="flex justify-start">
              <Form.Item className="mb-0">
                <Button
                  type="dashed"
                  icon={<PlusOutlined />}
                  onClick={() => add()}
                  block
                >
                  {addButtonLabel}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        )}
      </Form.List>
    </Col>
  );
};

export default DynamicFieldList;