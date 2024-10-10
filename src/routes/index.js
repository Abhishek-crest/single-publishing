import React from 'react';
import Layout from '../components/layout';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import SongList from '../pages/songs';
import Dashboard from '../pages/dashboard';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import ForgotPassword from '../pages/auth/forgotPassword';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/songs"
        element={
          <Layout>
            <SongList />
          </Layout>
        }
      />
    </ReactRoutes>
  );
};

export default Routes;
