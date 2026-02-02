"use client";

import { Button, Form, Radio } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

// Make sure these types are defined (usually in a shared types file)
type UserType = 'employee' | 'employer';

interface LoginInfo {
  userType: UserType;
  email: string;
  password: string;
}

const Login = () => {
  const [userType, setUserType] = useState<UserType>('employee');

  function onFinish(values: LoginInfo) {
    console.log(values);
  }

  function onChangeUserType(value: UserType) {
    setUserType(value);
  }

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-5 w-[400px] bg-white">
        <h1 className="text-xl">Portal Jobd - Login</h1>
        <hr />
        <Form
          layout="vertical"
          className="flex flex-col gap-3"
          onFinish={onFinish}
          initialValues={{ userType: 'employee' }}
        >
          <Form.Item label="Login As" name="userType">
            <Radio.Group
            defaultValue={userType}
              value={userType}
              onChange={(e) => onChangeUserType(e.target.value as UserType)}
            >
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={userType === 'employee' ? 'User Email' : 'Company Official Email'}
            name="email"
            rules={[{ required: true, message: `Please enter your ${userType==="employee"?"email":" company email"} !` }]}
            >
            <input type="email" className="input w-full" />
          </Form.Item>

          <Form.Item
            label={userType === 'employee' ? 'User Password' : 'Company Password'}
            name="password"
            rules={[{ required: true, message: `Please enter your ${userType==="employee"?"password":" company password"} !` }]}
            >
            <input type="password" className="input w-full" />
          </Form.Item>

          <p>
            Don't have an account? <Link href="/register">Sign up now</Link>
          </p>

          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;