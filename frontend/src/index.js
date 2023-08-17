import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { PostsContextProvider } from './contexts/postcontext';
import { AuthContextProvider } from './contexts/authcontext';
import { PickupContextProvider } from './contexts/pickupcontext';
import {DonationContextProvider } from './contexts/donationcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <DonationContextProvider>
    <PickupContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <App />
        </PostsContextProvider>
      </AuthContextProvider>
      </PickupContextProvider>
      </DonationContextProvider>
 
  </React.StrictMode>
);

