import React from 'react'
import { Spin } from 'antd'

const Loader = () => {
  return (
    <div style={{
      display: 'table',
      margin: '0 auto'
}}>
      <Spin/>
    </div>
  )
}

export default Loader
