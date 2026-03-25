import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Force English translation on first load if no cookie exists
const enforceEnglishDefault = () => {
  const hasCookie = document.cookie.includes('googtrans');
  if (!hasCookie) {
    document.cookie = 'googtrans=/pt/en; path=/';
    document.cookie = 'googtrans=/pt/en; path=/; domain=' + window.location.hostname;
  }
};
enforceEnglishDefault();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
