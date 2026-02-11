"use client"
import { Button, Col, Form, Row } from "antd";
import { useSelector } from "react-redux"
import { EmployerForm } from "../components/employerForm";
import EmployeeForm from "../components/employeeForm";
import PageTitle from "../components/pageTitle";


const page = () => {
    const currentUser = useSelector((state: any) => state.user.currentUser);
    console.log(currentUser)
    return (
<Row justify="center" className=" gap-9"  >
<PageTitle title="Profile"/>
<Row justify="start" style={{ minHeight: '100vh', width: '100%' }}>
        
        <Col   md={24}  >
          <Form className=" p-6 rounded-lg" onFinish={(e)=>console.log(e)}>
            {currentUser?.userType === "employer" ? <EmployerForm /> : <EmployeeForm />}
            <Button type="primary" htmlType="submit">
        Submit
      </Button>
          </Form>
        </Col>
      </Row>
      
</Row>
     
  )
}

export default page