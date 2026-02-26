import React, { useRef, useState } from 'react';
import { isValid } from '../utils/validations/LoginFormValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase/FirebaseConfig';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/store/LoginSlice';


const Login = () => {

  const [isSignIn, setSignIn] = useState(true);
  const email = useRef();
  const password = useRef();

  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();





  const handleSignIn = () => {
    const loginValidation = isValid(email.current.value, password.current.value);
    if(loginValidation){
      setErrorMessage(loginValidation);
    }
    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: "Rajasekar", photoURL: "https://avatars.githubusercontent.com/u/28036556?v=4&size=64"
          }).then(() => {
            const { email, uid, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({displayName: displayName, email: email, uuid: uid, photoURL: 'https://avatars.githubusercontent.com/u/28036556?v=4&size=64'}));
            navigate('/browse');
          }).catch((error) => {
            console.error("Profile update error:", error);
          });        

        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        navigate('/browse');        

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

  }



  return (
    <form
      className="
        w-[350px]
        p-10
        rounded-lg
        text-white
        bg-black/60
        backdrop-blur-md
        border border-white/20
        shadow-2xl
        flex flex-col gap-4
      "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="text-2xl font-bold mb-4">{ isSignIn ? "Sign In" : "Sign Up"}</h2>

      {!isSignIn && <input
        type="text"
        placeholder="Name"
        name="user_name"
        className="w-full p-3 bg-gray-900/80 rounded focus:outline-none"
      />}

      <input
        ref={email}
        type="text"
        placeholder="email"
        name="email"
        className="w-full p-3 bg-gray-900/80 rounded focus:outline-none"
      />

      <input
      ref={password}
        type="password"
        placeholder="Password"
        name="pwd"
        className="w-full p-3 bg-gray-900/80 rounded focus:outline-none"
      />

      <button className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition" onClick={handleSignIn}>
        { isSignIn ? "Sign In" : "Sign Up"}
      </button>
      {errorMessage && <p className='text-red-500'> {errorMessage} </p>}
      <p className='cursor-pointer' onClick={() => {
      setSignIn(!isSignIn);

      }}> {isSignIn ? 'New User? Sign Up Here!!' : 'Already Registerd? Sign In Here!!' }
      </p>
    </form>
  )
}

export default Login