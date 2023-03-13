import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/admin/Dashboard';
import Layout from './pages/admin/Layout';
import Login from './pages/admin/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
