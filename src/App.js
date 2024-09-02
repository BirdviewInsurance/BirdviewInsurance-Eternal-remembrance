import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import FuneralPackage from './pages/FuneralPackage';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Transportation from './pages/Transportation';
import Casket from './pages/Casket';
import InternationaRepatrition from './pages/InternationaRepatrition';
import FuneralService from './pages/FuneralService';
import BodyTransferAndCollection from  './pages/BodyTransferAndCollection';
import PhotographyVideoServices from './pages/PhotographyVideoServices';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/funeral-package" element={<FuneralPackage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/casket" element={<Casket />} />
        <Route path="/international-repatriation" element={<InternationaRepatrition  />} />
        <Route path="/funeral-service" element={<FuneralService />} />
        <Route path="/body-transfer-and-collection" element={<BodyTransferAndCollection />} />
        <Route path="/photography-video-services" element={<PhotographyVideoServices />} />
        
      </Routes>
    </Router>
  );
}

export default App;
