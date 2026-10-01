import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import {Chainprovider} from './context/productcontext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Chainprovider>
        <App />
      </Chainprovider>
    </BrowserRouter>
  </StrictMode>,
)
