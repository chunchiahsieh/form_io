import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Form.io 測試頁面
const FormioPage: React.FC = () => {
  return (
    <div>
      <h1>Form.io Test Page</h1>
      <p>這是用於測試 Form.io 的頁面。</p>
    </div>
  );
};

// Strapi 測試頁面
const StrapiPage: React.FC = () => {
  return (
    <div>
      <h1>Strapi Page</h1>
      <p>這是用於測試 Strapi 的頁面。</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
            <li>
              <Link to="/formio">Form.io 測試</Link>
            </li>
            <li>
              <Link to="/strapi">Strapi 頁面</Link>
            </li>
          </ul>
        </nav>
        <div style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/formio" element={<FormioPage />} />
            <Route path="/strapi" element={<StrapiPage />} />
            <Route
              path="/"
              element={
                <div>
                  <h1>歡迎使用測試應用程式</h1>
                  <p>請從上方選單選擇一個頁面。</p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

