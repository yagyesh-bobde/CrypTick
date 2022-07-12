import {  Menu, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
// import img from '../images/traderszone.png'
import { BulbFilled, FundFilled, HomeFilled, MoneyCollectFilled } from '@ant-design/icons'


const Navbar = () => {
  return (
    <div className='nav-container' style={{ display: 'flex', height: '100%'}}>
      <div className="logo-container" style={{paddingTop: '3vh', backgroundColor: '#001529' }}>
          {/* <Avatar src={img} shape='square' size={100}/> */}
        <Typography.Title style={{paddingLeft: '1vw' , fontFamily: 'monospace'}} >
          <Link to='/'>CrypTick</Link>
          </Typography.Title>
        </div>  
      <Menu theme='dark' style= {{  width: '100%',paddingBlockStart:'3vh', display: 'flex', paddingLeft: '3vw'}}>
        <Menu.Item key="Homepage"icon={<HomeFilled/>}><Link to='/'>Homepage</Link></Menu.Item>
        <Menu.Item key="Cryptocurrencies"icon={<FundFilled/>}><Link to='/cryptocurrencies'>Cryptocurrencies</Link></Menu.Item>
        <Menu.Item key="News"icon={<BulbFilled/>}><Link to='/news'>News</Link></Menu.Item>
        {/* <Menu.Item key="Exchanges"icon={<MoneyCollectFilled/>}><Link to='/exchanges'>Trading</Link></Menu.Item> */}
      </Menu>
    </div>
  )
}

export default Navbar
