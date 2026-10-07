// client/src/routes/AppRoutes.jsx
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/public/Home';
import DonorsList from '../pages/public/DonorsList';
import RegisterDonor from '../pages/public/RegisterDonor';
import AdminDashboard from "../pages/admin/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donors" element={<DonorsList />} />
      <Route path="/donors/register" element={<RegisterDonor />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;