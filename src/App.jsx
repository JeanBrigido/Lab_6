import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import EmployeeManagement from './pages/emp_mgmt';
import Home from './pages/home';
import TextProvider from './context/TextContext';
import { Box } from '@mui/material';

import './App.css';

function App() {
  return (
    <TextProvider>
      <Router>
        <Header />
        <Box component="main" sx={{ paddingBottom: '120px', paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emp_mgmt" element={<EmployeeManagement />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </TextProvider>
  );
}

export default App;