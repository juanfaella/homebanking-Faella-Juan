import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Monta y desmonta la app para evitar problemas de la app
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
