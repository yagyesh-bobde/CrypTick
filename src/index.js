import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// AntDesign css
import 'antd/dist/antd.min.css'
// React-router
import { BrowserRouter as Router } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux';
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
)