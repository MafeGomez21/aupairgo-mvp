import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
