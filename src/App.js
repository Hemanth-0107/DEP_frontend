
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Register from './pages/Forms/register_dummy'
import Login from './pages/Forms/login';
import OTP from './pages/Forms/Otp'
import { Navbar } from "./components/navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/admin/Dashboard";
import UserDashboard from "./pages/user/Dashboard";
import About from "./pages/About";
import Landing from "./pages/LandingPage/Landing";
import Simple from "./pages/LandingPage/TenderInfo";
import EditProfile from './pages/EditProfile';
import ForgotPassword from "./pages/Forms/ForgotPassword";
import NotFound from "./pages/error";
import RatingForm from "./pages/Forms/ratingForm"
import Table from './components/Table'
import AuthService from "./services/authService";
import Success from "./pages/Forms/Thankyou"
import SimpleSkull from './pages/skeleton';
import News from './pages/News';
import CDashboard from './pages/contractor/dashboard'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
    setTimeout(() => setLoading(false), 100);
  }, []);
  return (
    <>
      <Navbar currentUser={currentUser} />
      {loading ? (
        // Show the skeleton screen while loading
        <SimpleSkull/>
      ) : (
        // Show the page content after loading
        <Routes >
          {currentUser && (
            <>
              <Route path='/moderator/dashboard' element={
            <CDashboard currentUser={currentUser} showmoderatorBoard={currentUser?.roles==='moderator'?true:false}/>
            } />
            <Route path="/adminstraton/dashboard" element={
            <Dashboard showAdminBoard={currentUser?.roles==='adminstraton'?true:false} 
            currentUser={currentUser} 
            showmoderatorBoard={currentUser?.roles==='moderator'?true:false}/>} />

            <Route path="/user/dashboard" element={
            <UserDashboard currentUser={currentUser}
            showAdminBoard={currentUser?.roles==='adminstraton'?true:false}/>} />

            <Route path='/editprofile' element={<EditProfile />} />

            </>
          )}
          <Route path="/" element={<Landing />} />
          {/* <Route path='/denyAccess' element={<Denyaccesss/>} /> */}
          <Route path="/*" element={<NotFound />} />
          <Route path='/details/:id' element={<Simple />} />
          <Route path="/about" element={<About />} />

          
          
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path='/table' element={<Table />} />
          <Route path="/login/forgotpassword" element={<ForgotPassword />} />
         
          <Route path='/give-rating' element={<RatingForm />} />
          <Route path='/success' element={<Success />} />
          <Route path='/news' element={<News />} />

          <Route path="/login" element={currentUser !== null ?
            <Dashboard showAdminBoard={currentUser?.roles==='adminstraton'?true:false} currentUser={currentUser}/> :
            <Login showAdminBoard={currentUser?.roles==='adminstraton'?true:false} currentUser={setCurrentUser}/>} />
        </Routes>
      )}
      <Footer/>
    </>
  );
}

export default App;
