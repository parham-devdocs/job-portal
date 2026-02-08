"use client";

import { ConfigProvider, message } from 'antd';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { getCurrentUser } from '../services/clientSide/getUser';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, userSlice } from '../redux/userSlice';

const AntdConfigLayout = ({ children }: { children: ReactNode }) => {
  const pathname=usePathname()
  const dispatch=useDispatch()
  const currentUser = useSelector((state: any) => state.user.currentUser);
async function getUser() {
  try {
    const response=await getCurrentUser()
    dispatch(setCurrentUser(response))
  } catch (error) {
    message.error("user info can not be accessed at the moment")
  }
}
  useEffect(()=>{
    getUser()
  },[pathname])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff'
        },
      }}
    >
{pathname === "/login" || pathname==="/register" ?
 <div>{children}</div>
 :<div className=' layout-parent'><Sidebar userInfo={currentUser} /><div className="body">{children}</div></div>}
    </ConfigProvider>
  );
};

export default AntdConfigLayout;