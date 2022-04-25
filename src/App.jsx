import { BrowserRouter } from 'react-router-dom';

import './App.css';
// import Faq from './pages/FAQ/Faq';
// import ContactUs from './pages/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';
// import Request from './pages/Request/Request';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
      </BrowserRouter>
    </div>
  );
}

export default App;
