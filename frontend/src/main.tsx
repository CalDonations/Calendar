import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DonationPage from './layout/DonationPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                {/* 定義路由 */}
                <Route path="/" element={<App />} />
                <Route path="/donation" element={<DonationPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);