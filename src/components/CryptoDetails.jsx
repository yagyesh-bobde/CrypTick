import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'
import { Card} from 'antd/lib/card/'
import { Select, Row, Col, Typography , Avatar} from 'antd'
import Loader from './Loader'

const CryptoDetails = () => {
  const { cryptoid } = useParams()

  const {data: CryptoDetails, isloading } = useGetCryptoDetailsQuery(cryptoid)
  if (isloading) return <Loader/>
  console.log(CryptoDetails)

  return (
    <div>
      {CryptoDetails}
    </div>
  )
}

export default CryptoDetails
