import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Navbar from './components/navbar';
import SignUp from './components/signup';
import Login from './components/login';
import { useAuthContext } from './hooks/useauthcontext';
import Newpost from './components/newpost';
import MainHome from './components/mainhome'
import Footer from './components/footer';
import Aboutus from './components/aboutus';
import DonorDashboard from './components/dashboard';
function App () {
  const {user}= useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route
              path ="/"
              element={<MainHome />} 
              />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/" />} 
            />
            <Route
              path="/newpost"
              element={<Newpost/>}
            />
            <Route
              path="/aboutus"
              element={<Aboutus/>}
            />
            <Route 
              path="/dashboard"
              element={<DonorDashboard/>}
            />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
