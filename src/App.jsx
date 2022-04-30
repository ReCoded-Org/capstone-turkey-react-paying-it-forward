import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
// import Faq from './pages/FAQ/Faq';
// import ContactUs from './pages/ContactUs/ContactUs';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
