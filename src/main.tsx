import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import GlobalStyle from './styles/global';
import { BathAndGrooming } from './pages/bathAndGrooming';
import { SalePuppy } from './pages/salePuppy';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { ProductsCat } from './pages/cat';
import { ProductsDog } from './pages/dog';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gato" element={<ProductsCat />} />
        <Route path="/cachorro" element={<ProductsDog />} />
        <Route path="/estetica" element={<BathAndGrooming />} />
        <Route path="/filhotes" element={<SalePuppy />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
