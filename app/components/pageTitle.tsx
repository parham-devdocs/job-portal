

import { Row } from 'antd'
import React from 'react'

const PageTitle = ({title}:{title:string}) => {
  return (
    <Row 
    justify="center" 
    align={"middle"}
    className="w-full  border border-primary/20 rounded-xl shadow-sm "  >

    <h1 className="text-2xl font-bold text-primary tracking-tight">
      {title}
    </h1>
  </Row>
  )
}

export default PageTitle