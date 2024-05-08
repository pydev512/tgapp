import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import WebApp from '@twa-dev/sdk'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={'https://pydev512.github.io/tgapp/'}>
      <App />
    </BrowserRouter>
)
