import {createRoot} from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.tsx'
import {GlobalProvider} from "./GlobalContext.tsx";


createRoot(document.getElementById('root')!).render(
    <GlobalProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </GlobalProvider>
)
