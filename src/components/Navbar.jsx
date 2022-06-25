import {  Menu, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
// import img from '../images/traderszone.png'
import { BulbFilled, FundFilled, HomeFilled, MoneyCollectFilled } from '@ant-design/icons'


const Navbar = () => {
  return (
    <div className='nav-container' style={{ height: '100%'}}>
      <div className="logo-container" style={{ display: 'flex', paddingTop: '3vh', backgroundColor: '#001529' }}>
          {/* <Avatar src={img} shape='square' size={100}/> */}
        <Typography.Title style={{paddingLeft: '1vw' , fontFamily: 'monospace', color:''}} >
          <Link to='/'>CrypTick</Link>
          </Typography.Title>
        </div>  
      <Menu theme='dark' style= {{  width: '20vw', height: '100%'}}>
        <Menu.Item icon={<HomeFilled/>}><Link to='/'>Homepage</Link></Menu.Item>
        <Menu.Item icon={<MoneyCollectFilled/>}><Link to='/exchanges'>Exchanges</Link></Menu.Item>
        <Menu.Item icon={<BulbFilled/>}><Link to='/news'>News</Link></Menu.Item>
        <Menu.Item icon={<FundFilled/>}><Link to='/cryptocurrencies'>Cryptocurrencies</Link></Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
