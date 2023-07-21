import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import GlobalStyle from './styles/global';
import { Service } from './pages/services';
import { BathAndGrooming } from './pages/bathAndGrooming';
import { SalePuppy } from './pages/salePuppy';
import { Contact } from './pages/contact';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/serviços" element={<Service />} />
        <Route path="/serviços/estetica" element={<BathAndGrooming />} />
        <Route path="/serviços/filhotes" element={<SalePuppy />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);