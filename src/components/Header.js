import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {auth } from '../utils/firebase/FirebaseConfig';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/store/LoginSlice';

const Header = () => {

  const user = useSelector(store=> store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() =>{
    onAuthStateChanged(auth, () => {
      if (auth.currentUser) {
        const user = auth.currentUser;
        const {displayName, email, uid } = user;
        dispatch(addUser({displayName: displayName, email: email, uuid: uid, photoURL: user.photoURL}));
        navigate('/browse');
      }else{
        navigate('/');
      }
    });
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/');
      dispatch(removeUser());
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  }


  return (
    <div className="absolute z-20 w-full flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-36"
      />

      {user && Object.keys(user).length > 0 && (
        <div className="flex items-center gap-4">
          <img 
            src={user?.photoURL} 
            alt="user-logo" 
            className="w-10 h-10 rounded"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header