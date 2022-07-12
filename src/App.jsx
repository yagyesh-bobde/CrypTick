import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Navbar, Homepage, Cryptocurrencies, Exchanges, News, CryptoDetails } from './components'
import { Layout, Space, Typography } from 'antd'
import './App.css'

const App = () => {
  return (
    <>
{/* Navbar */}
    {/* <div className='app' style={{ display: 'flex' }}> */}
      <div className='navbar' >
        <Navbar />
      </div>

      <div className='main' style={{ width: '100%', height: '100%' }}>

{/* Routes */}

        <Layout>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route exact path='/exchanges' element={<Exchanges />} />
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route exact path='/crypto/:cryptoId' element={<CryptoDetails />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </Layout>
      </div>
    {/* </div> */}

{/* FOOTER */}
        <div className='footer' style={{ backgroundColor: '#002141', textAlign: 'center' , marginTop: '2vh' }}>
          <Typography.Title level={5} style={{ textColor: 'white' }} >
            CrypTick <br />
            <Typography.Text level={2} style={{ textColor: 'white' }}> All rights reserved; </Typography.Text>
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Space>
    </div>
    </>
  )
}

export default App
