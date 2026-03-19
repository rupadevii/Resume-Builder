import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { InfoProvider } from './context/InfoContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TemplateProvider } from './context/TemplateContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TemplateProvider>
            <InfoProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </InfoProvider>
        </TemplateProvider>
    </StrictMode>,
)
