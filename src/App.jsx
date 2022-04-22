import { BrowserRouter } from 'react-router-dom';

// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// import Faq from './pages/FAQ/Faq';
// import ContactUs from './pages/ContactUs/ContactUs';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
