import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}
