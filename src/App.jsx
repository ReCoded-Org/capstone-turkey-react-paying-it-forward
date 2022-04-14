import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
        <Home />
      </BrowserRouter>
    </div>
  );
}
