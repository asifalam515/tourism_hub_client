import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");

  //   create new user
  const createUser = (email, password, profilePhoto, name) => {
    setPhoto(profilePhoto);
    setName(name);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   log in user
  const loggedInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   log out
  const loggedOut = () => {
    setLoading(true);
    setName("");
    setPhoto("");
    return signOut(auth);
  };
  // auth observer by onAuthStateChanged
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log("current value of the user is ", currentUser);
  //     setLoading(false);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName);
        setPhoto(currentUser.photoURL);
      } else {
        setUser(null);
        setName(null);
        setPhoto(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loading,
    loggedInUser,
    loggedOut,
    user,
    photo,
    name,
    setName,
    setPhoto,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
