import { Navigate, Route, Routes } from 'react-router-dom';
import { StorefrontLayout } from './components/layout/StorefrontLayout';
import { AboutPage } from './pages/AboutPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ContactPage } from './pages/ContactPage';
import { DeliveryReturnsPage } from './pages/DeliveryReturnsPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

export default function App() {
  return (
    <Routes>
      <Route element={<StorefrontLayout />}>
        <Route index element={<HomePage />} />
        <Route path="kategoriler" element={<CategoriesPage />} />
        <Route path="urun/:slug" element={<ProductPage />} />
        <Route path="hakkimizda" element={<AboutPage />} />
        <Route path="iletisim" element={<ContactPage />} />
        <Route path="teslimat-iade" element={<DeliveryReturnsPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
