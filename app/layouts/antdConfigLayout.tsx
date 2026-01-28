"use client"
import { ConfigProvider } from 'antd'
import  { ReactNode } from 'react'

const AntdConfigLayout = ({children}:{children:ReactNode}) => {
  return (
    <ConfigProvider theme={{token:{colorPrimary:""}}}>
    <html lang="en">
          <body>
          <header>Header</header>
           <div>{children}</div> 
            <footer>Footer</footer>
          </body>
        </html>
        </ConfigProvider>
  )
}

export default AntdConfigLayout