import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Supported_lang, project_logo } from "../utils/constants";
import { addShowGptBar } from "../utils/gptSlice";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gptToggle = useSelector((store) => store.gpt.showGptBar);

  const user = useSelector((store) => store.user);

  const handleLangChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  const handleSearch = () => {
    //toggle of the show serach bar functionality
    dispatch(addShowGptBar());
  };

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
 
     <div 
     className="absolute w-full z-30 flex flex-col bg-gradient-to-b from-black
     md:flex-row md:justify-between">
      <div className="w-28 mx-auto mt-6 
      md:ml-44 md:mt-6 md:w-44">
   <a href='/browse'><img src={project_logo} alt="logo" /> </a>     
      </div>

      {user && (
        <div className="flex mt-4 mx-auto
        md:mr-32 md:mt-6
        ">
          <button
            className="text-white text-xs align-middle w-18 h-10 mr-6 bg-purple-800 px-2 rounded-lg
            md:w-18 md:h-10 md:font-bold md:text-lg"
            onClick={handleSearch}
          >
            {gptToggle ? "Home" : "Search GPT"}
          </button>
          {gptToggle && <select 
          className="text-white font-bold align-middle w-18 h-8 mr-6 bg-gray-500 pl-2 rounded-lg
          md:font-bold md:text-lg md:w-18 md:h-10"
          onChange={handleLangChange}>
            {Supported_lang.map((lang) => {
              return (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              );
            })}
          </select>}
          <img
            src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
            alt="signout-icon"
            className="w-10 h-10"
          />
          <button
            className="text-white font-bold align-middle w-18 h-8 text-xs
            md:w-18 md:h-10 md:text-lg"
            onClick={handleSingOut}
          >
            {" "}
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
