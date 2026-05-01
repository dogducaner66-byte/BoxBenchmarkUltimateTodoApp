import { Navigate, Route, Routes } from 'react-router-dom';
import { StorefrontLayout } from './components/layout/StorefrontLayout';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { VisitPage } from './pages/VisitPage';

export default function App() {
  return (
    <Routes>
      <Route element={<StorefrontLayout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="rezervasyon" element={<ReservationsPage />} />
        <Route path="ziyaret" element={<VisitPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
