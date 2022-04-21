import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// import Faq from './pages/FAQ/Faq';
// import ContactUs from './pages/ContactUs/ContactUs';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
        <Home />
      </BrowserRouter>
    </div>
  );
}
