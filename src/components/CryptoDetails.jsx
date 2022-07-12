import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'
import { Card} from 'antd/lib/card/'
import { Select, Row, Col, Typography , Avatar, Button} from 'antd'
import Loader from './Loader'
import LeftCircleOutlined from '@ant-design/icons/LeftCircleOutlined'

const CryptoDetails = () => {
  const { cryptoid } = useParams()

  const {data: CryptoDetails, isloading } = useGetCryptoDetailsQuery(cryptoid)
  if (isloading) return <Loader/>
  console.log(CryptoDetails)

  return (
    <div style={{ marginRight: 'auto', marginLeft: 'auto', marginBlockStart: '30vh', marginBlockEnd: '36vh'}}>
       <Link to='/' >
        <Button>
          <u>Will soon be updated</u>
          <br/>
          <LeftCircleOutlined />
          Go Back
        </Button>
       </Link>
    </div>
  )
}

export default CryptoDetails
