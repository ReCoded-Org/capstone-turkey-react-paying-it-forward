import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Donated from './pages/donated/Donated';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
        <Donated />
      </BrowserRouter>
    </div>
  );
}

export default App;
