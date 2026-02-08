// ./layouts/antdConfigLayout.tsx
"use client";

import { ConfigProvider } from 'antd';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Sidebar from '../components/sidebar';

const AntdConfigLayout = ({ children }: { children: ReactNode }) => {
  const pathname=usePathname()

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
 :<div className=' layout-parent'><Sidebar/><div className="body">{children}</div></div>}
    </ConfigProvider>
  );
};

export default AntdConfigLayout;