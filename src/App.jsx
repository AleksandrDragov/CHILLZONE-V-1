//!database
import menuData from './data/menu.json';
//! Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
//! libraries
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyMenu = lazy(() => import('./Pages/Menu/Menu'));
const LazyHome = lazy(() => import('./Pages/Home/HomePage'));
const LazyBonuses = lazy(() => import('./Pages/Bonuses/BonusesPage'));

export function App() {
  return (
    <div>
      <Header />

      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/menu" element={<LazyMenu data={menuData} />} />
            <Route path="/bonuses" element={<LazyBonuses />} />
          </Routes>
        </Suspense>
      </MainContainer>
      <Footer />
    </div>
  );
}
