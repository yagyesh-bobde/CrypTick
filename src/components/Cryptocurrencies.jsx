import React, { useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
// External library
import millify from 'millify';
import Loader from './Loader'
// API
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Row, Col } from 'antd/lib/grid';
// Antdesign
import Card from 'antd/lib/card/Card';
import { Button, Tooltip, Typography } from 'antd'
import { FilterOutlined, SortAscendingOutlined } from '@ant-design/icons';
import Input from 'antd/lib/input/Input';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: coinsList, isfetching } = useGetCryptosQuery(count)
  const [coins, setCoins] = useState()
  const [Searchkey, setSearchkey] = useState('');

  useEffect(() => {
    setCoins(coinsList?.data?.coins)

    const filterdata = coinsList?.data?.coins.filter((item) => item.name.toLowerCase().includes(Searchkey))
    setCoins(filterdata)
  }, [coinsList, Searchkey]);
  if (isfetching) return <Loader />
  return (
    <>
    {/* Search Bar */}

      {!simplified && <div className="search" style={{ width: '20vw', display: 'flex' }}>
        <Input placeholder='Search Cryptocurrencies' onChange={(e) => (setSearchkey(e.target.value))} style={{ height: '7vh' }} />
        <Tooltip title="Filter">
          <Button className='search' type="primary" shape="circle" icon={<FilterOutlined />} />
        </Tooltip>
        <Tooltip title="Sort">
          <Button className='search' type="primary" shape="circle" icon={<SortAscendingOutlined />} />
        </Tooltip>
      </div>}


      
      {/* COINS */}
      
      <Row gutter={[32, 32]} style={{ marginLeft: '1vw', marginTop: '1vw' }}>
        {coins?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} key={crypto.uuid}>
            <Link to={`/crypto/${crypto.uuid}`}>
            <Card
              // title={crypto.name}
              hoverable
              cover={<img alt={crypto.name} style={{ height: '15vh' }} src={crypto.iconUrl} />}
              style={{ paddingTop: '3vh', height: '38vh' }}
            >
              <div style={{ textAlign: 'center' }}>
                <Typography.Title level={5} > {crypto.symbol}</Typography.Title>
              </div>
              <p>Price: {millify(crypto.price)}</p>
              <p>MarketCap: {millify(crypto.marketCap)}</p>
              <p>Change: {millify(crypto.change)}%</p>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
