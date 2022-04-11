import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';

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
