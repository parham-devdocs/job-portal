"use client";

import { Button, Form, message, Radio } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { LoginInfo, UserType } from '../types';
import { useRouter } from 'next/navigation';

const Register = () => { // 👈 Renamed to Register for clarity
  const router=useRouter()

  const [userType, setUserType] = useState<UserType>('employee');
  async function onFinish(values: LoginInfo) {
    try {
      const response = await axios.post("/api/users/login", values);
router.push("/")
      message.success(response.data.message);
    } catch (error: any) {
      message.error(error.response?.data?.message || "Something went wrong");
    }
  }

  function onChangeUserType(value: UserType) {
    setUserType(value);
  }

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-5 w-[400px] bg-white">
        <h1 className="text-xl">Portal Job - Login</h1> {/* Updated title */}
        <hr />
        <Form
          layout="vertical"
          className="flex flex-col gap-3"
          onFinish={onFinish}
          initialValues={{ userType: 'employee' }}
        >
          <Form.Item label="login As" name="userType">
            <Radio.Group
              value={userType}
              onChange={(e) => onChangeUserType(e.target.value as UserType)}
            >
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={userType === 'employee' ? 'Email' : 'Company Official Email'}
            name="email"
            rules={[{ required: true, message: `Please enter your ${userType === 'employee' ? 'email' : 'company email'}!` }]}
          >
            <input type="email" className="input w-full" />
          </Form.Item>

          <Form.Item
            label={userType === 'employee' ? 'Password' : 'Company Password'}
            name="password"
            rules={[{ required: true, message: `Please enter your ${userType === 'employee' ? 'password' : 'company password'}!` }]}
          >
            <input type="password" className="input w-full" />
          </Form.Item>

          <p>
            Already have an account? <Link href="/login">Log in</Link>
          </p>

          <Button type="primary" htmlType="submit">
          Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;