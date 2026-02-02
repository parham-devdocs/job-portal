// ./layouts/antdConfigLayout.tsx
"use client";

import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

const AntdConfigLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff'
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigLayout;