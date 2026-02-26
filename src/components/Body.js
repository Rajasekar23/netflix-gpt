import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import {auth} from '../utils/firebase/FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/store/LoginSlice';

const Body = () => {




  return (
    <div>Body</div>
  )
}

export default Body