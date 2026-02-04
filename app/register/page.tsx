"use client"

import { Button, Form, message, Radio } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { RegisterInfo,UserType } from '../types'

const Register = () => {
  const [userType,setUserType]=useState<UserType>("employee")
  async function onFinish(values:RegisterInfo) {
    try {
      const response=await axios.post("/api/users/register",values)
      message.success(response.data.message)
    } catch (error:any) {
      message.error(error.response.data.message || "somnething went wrong")
    }
 
  }
  function onChangeUserType(value:UserType) {
    setUserType(value)
    console.log(value)
  }
  return (
    <div className=' flex justify-center h-screen  items-center bg-primary'>
      <div className=' card p-5 w-400 bg-white'>
        <h1 className=' text-xl'>Portal Jobd - Register</h1>
        <hr />
        <Form layout="vertical" className=' flex flex-col gap-3' onFinish={onFinish}>
        <Form.Item label="Register As" name="userType">
<Radio.Group defaultValue={userType} value={userType} onChange={(e)=> onChangeUserType(e.target.value as UserType)}>
  <Radio value={"employer"}>Employer</Radio>
  <Radio value={"employee"}>Employee</Radio>

</Radio.Group>
          </Form.Item>
        <Form.Item label={userType==="employee" ? "user name":"company name"} name="name" 
                    rules={[{ required: true, message: `Please enter your ${userType==="employee"?"name":" company name"} !` }]}

        >
            <input  type="text" className='input' />

          </Form.Item>
          <Form.Item label={userType==="employee" ? "user email":"company official email"} name="email"
                              rules={[{ required: true, message: `Please enter your ${userType==="employee"?"email":" company email"} !` }]}
          >
            <input  type='email' className='input' />

          </Form.Item>
          <Form.Item label={userType==="employee" ? "user password":"company password"} name="password"
                                        rules={[{ required: true, message: `Please enter your password` }]}
          >
            <input  type='password' className='input' />

          </Form.Item>
          <p > have an account? <Link href="/login" >login now</Link></p>
          <Button type='primary' htmlType="submit">Login</Button>
        </Form>
      </div>
        </div>
  )
}

 export default Register