import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Donated from './pages/Donated/Donated';

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
