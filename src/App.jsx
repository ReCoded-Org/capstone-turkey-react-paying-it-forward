import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

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
  HOW_IT_WORKS,
} from './routes';
import Team from './pages/Team/Team';

export default function App() {
  const { isSuccessLogin } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Suspense fallback={null}>
        <BrowserRouter>
          <Navbar isLogin={isSuccessLogin} />
          <Routes>
            <Route index element={<Home />} />
            <Route path={DONATION} element={<Donated />} />
            <Route path={REQUEST} element={<Request />} />
            <Route path={SIGN_UP} element={<Signup />} />
            <Route path={LOG_IN} element={<Login />} />
            <Route path={ABOUT_US} element={<Team />} />
            <Route path={CONTACT_US} element={<ContactUs />} />
            <Route path={QA} element={<Faq />} />
            <Route path={HOW_IT_WORKS} element={<Faq />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
