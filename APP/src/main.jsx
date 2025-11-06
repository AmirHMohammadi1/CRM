import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './rest.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

import { IntlProvider } from 'react-intl';
createRoot(document.getElementById('root')).render(

  <div dir="rtl" >

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>

)
