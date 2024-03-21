import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './utils/axios.config.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/redux/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store = {store}>
      <App/>
    </Provider>
)
