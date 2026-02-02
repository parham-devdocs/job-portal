"use client"

import { Button, Form } from 'antd'
import Link from 'next/link'

const Login = () => {
  function onFinish(values:LoginInfo) {
    console.log(values)
  }
  return (
    <div className=' flex justify-center h-screen  items-center bg-primary'>
      <div className=' card p-5 w-400 bg-white'>
        <h1 className=' text-xl'>Portal Jobd - Login</h1>
        <hr />
        <Form layout="vertical" className=' flex flex-col gap-3' onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <input  type='email' className='input' />

          </Form.Item>
          <Form.Item label="Password" name="password">
            <input  type='password' className='input' />

          </Form.Item>
          <p >don't have an account? <Link href="/register" >sign up now</Link></p>
          <Button type='primary' htmlType="submit">Login</Button>
        </Form>
      </div>
        </div>
  )
}

 export default Login