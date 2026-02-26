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
  useEffect(() =>{
    onAuthStateChanged(auth, () => {
      if (auth.currentUser) {
        const user = auth.currentUser;
        const {displayName, email, uid } = user;
        dispatch(addUser({displayName: displayName, email: email, uuid: uid, photoURL: user.photoURL}));
      }
    });
  }, []);


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
