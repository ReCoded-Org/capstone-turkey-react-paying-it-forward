import { BrowserRouter } from 'react-router-dom';

import './App.css';
// import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
// import Faq from './pages/FAQ/Faq';
// import ContactUs from './pages/ContactUs/ContactUs';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </div>
  );
}

export default App;
