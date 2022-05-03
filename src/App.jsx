import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Faq from './pages/FAQ/Faq';
import ContactUs from './pages/ContactUs/ContactUs';
import Donated from './pages/Donated/Donated';
import Request from './pages/Request/Request';

import {
  ABOUT_US,
  DONATION,
  LOG_IN,
  QA,
  REQUEST,
  SIGN_UP,
  CONTACT_US,
} from './routes';
import Team from './pages/Team/Team';

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <BrowserRouter>
          <Navbar isLogin />
          <Home />
          <Donated />
          <Request />
          <Signup />
          <Login />
          <Faq />
          <ContactUs />
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
