import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Faq from './pages/FAQ/Faq';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
        <Faq />
      </BrowserRouter>
    </div>
  );
}

export default App;
