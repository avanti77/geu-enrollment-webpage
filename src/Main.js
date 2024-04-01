import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Enroll from './Pages/EnrollmentForm';

const Main = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

const App = () => {
    const location = useLocation();

    const isNavBarAndFooterVisible = location.pathname !== '/enroll'; // Adjust condition as needed

    return (
        <div className="relative">
            {isNavBarAndFooterVisible && <NavBar />}
            <Routes>  
                <Route path="/enroll" element={<Enroll />} />
            </Routes>
            {isNavBarAndFooterVisible && <Content />}
            {/* {isNavBarAndFooterVisible && <Footer />} */}
            <Footer/>
        </div>
    );
};

export default Main;
