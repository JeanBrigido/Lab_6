import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import EmployeeManagement from './pages/emp_mgmt';
import Home from './pages/home';
import SignIn from './pages/SignIn';
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
            {/* <Route path="/signin" element={<SignIn />} /> */}
            <Route path="/emp_mgmt" element={<EmployeeManagement />} />
            {/* <Route
              path="/emp_mgmt"
              element={isAuthenticated ? <EmployeeManagement /> : <Navigate to="/signin" />}
            /> */}
          </Routes>
        </Box>
        <Footer />
      </Router>
    </TextProvider>
  );
}

export default App;