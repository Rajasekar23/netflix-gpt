import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import AppLayout from './components/AppLayout';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AppLayout />} >
        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
