import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Login />
        <Signup />
      </BrowserRouter>
    </div>
  );
}

export default App;
