import './App.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
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