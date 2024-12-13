import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import WelcomePage from './components/WelcomePage';
import UserForm from './components/UserForm';
import ResultsPage from './components/ResultsPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import BantuanDetailPage from './pages/bantuan/BantuanDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bantuan/:id" element={<BantuanDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;