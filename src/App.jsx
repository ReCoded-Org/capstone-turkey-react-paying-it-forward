import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';

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
