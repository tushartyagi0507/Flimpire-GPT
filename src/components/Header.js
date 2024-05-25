import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { addShowGptBar } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSearch = ()=>{
    //toggle of the show serach bar functionality 
    dispatch(addShowGptBar());
   }



  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error"); // you can create an error page here
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribing when the comp unmounts
    return () => unsubscribe();
  }, []);

return (
    <div className="absolute w-full bg-gradient-to-b from-black z-20 flex justify-between">
      <div className="w-44 ml-44 mt-4">
        <img src={LOGO} alt="logo" />
      </div>

      {user && (
        <div className="flex mr-32 mt-6">
          <button className="text-white font-bold align-middle w-18 h-10 mr-6 bg-purple-800 px-2 rounded-lg"
          onClick={handleSearch}>
            Search GPT
          </button>
          <img
            src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
            alt="signout-icon"
            className="w-10 h-10"
          />
          <button
            className="text-white font-bold align-middle w-18 h-10"
            onClick={handleSingOut}
          >
            {" "}
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );

}
export default Header;
