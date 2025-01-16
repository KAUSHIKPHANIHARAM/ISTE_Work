import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import CounterContext from './Context/CounterContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContext>
      <App />
    </CounterContext>
  </StrictMode>,
)
