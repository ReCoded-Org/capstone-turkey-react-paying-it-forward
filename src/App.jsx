import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Home from './pages/Home/Home';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// import Faq from './pages/FAQ/Faq';
// import ContactUs from './pages/ContactUs/ContactUs';
// import Donated from './pages/Donated/Donated';
// import Request from './pages/Request/Request';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
