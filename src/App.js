import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from './utils/store/LoginSlice';
import { auth } from './utils/firebase/FirebaseConfig';
import Browse from './components/Browse';


function App() {


  const dispatch = useDispatch();



  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AppLayout />} >
        <Route path="/" element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
