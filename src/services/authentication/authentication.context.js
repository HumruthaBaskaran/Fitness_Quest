import React, { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import { getAuth, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [auth.currentUser]);

  // useEffect(() => {
  //   setError(null);
  // }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };
  const onRegister = (email, password, repassword) => {
    setIsLoading(true);
    if (password !== repassword) {
      setError("Error: Passwords do not match!");
    } else {
      registerRequest(email, password)
        .then((u) => {
          setUser(u);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.toString());
          setIsLoading(false);
        });
    }
  };

  const onLogout = () => {
    // let auth = getAuth();
    setUser(null);
    setIsLoading(false);
    setError(null);
    signOut(auth);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
