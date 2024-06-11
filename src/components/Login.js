import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_Avatar, background } from "../utils/constants";

const Login = () => {
  

  const [isSignIn, setisSignIn] = useState(true);

  const [errorMessage, seterrorMessage] = useState();

  const dispatch = useDispatch();

  const handlerSingUp = () => {
    isSignIn ? setisSignIn(false) : setisSignIn(true);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignIn = () => {
    const message = validateForm(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return null;

    // tushar@google.com   Tushar123
    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }

    if (isSignIn) {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "name.current.vlaue",
            photoURL: USER_Avatar,
          })
            .then(() => {
              const {uid, displayName, email, photoURL} = auth.currentUser;
// we are using auth.currentUser instead of user because we want the udpated value which is not in the user it still has the old data which is not udpated yet.

           dispatch(addUser({uid: uid, email: email , displayName: displayName, photoURL: photoURL}));
            })
          // console.log("signed In: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="w-screen">
      <Header />
      <div className="absolute ">
        <img
          src= {background}
          alt="login-background"
          className="bg-cover bg-fixed object-cover w-screen h-screen"
        />
      </div>
      <form
        id="form"
        className="w-full absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 
        md:my-36 md:w-3/12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {isSignIn ? (
          <h1 className="text-white font-black text-2xl m-2 ">Sign In</h1>
        ) : (
          <h1 className="text-white font-black text-2xl m-2 ">Sign Up</h1>
        )}

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your Full Name"
            className="p-4 m-2 w-full bg-gray-700 bg-opacity-70"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 m-2 w-full bg-gray-700 bg-opacity-70"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter your password"
          className="p-4 m-2 w-full bg-gray-700 bg-opacity-70"
        />
        {!isSignIn && (
          <ul className="ml-6 mb-4 text-xs marker:bg-cyan-50">
            <li>Be at least 8 characters long.</li>
            <li>Contain at least one lowercase letter (a-z).</li>
            <li>Contain at least one uppercase letter (A-Z).</li>
            <li>Contain at least one number (0-9).</li>
          </ul>
        )}

        <p className="m-4 text-red-800 text-lg font-black"> {errorMessage}</p>

        <button
          className="p-4 m-2 display: block text-center bg-red-700 text-white w-full cursor-pointer rounded-lg text-bold"
          onClick={handleSignIn}
        >
          {isSignIn ? "Sign In" : "Get started"}
        </button>

        {isSignIn ? (
          <h3 onClick={handlerSingUp} className="cursor-pointer ml-2 my-4">
            New to Netflix? Sign up now.
          </h3>
        ) : (
          <h3 onClick={handlerSingUp} className="cursor-pointer ml-2 my-4">
            Already a user? Sign In now
          </h3>
        )}
      </form>
    </div>
  );
};

export default Login;
