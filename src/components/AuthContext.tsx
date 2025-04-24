import React, { createContext, useState, useContext, useEffect } from 'react';

type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;

};

const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  setLoggedIn: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(() => {

    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('loggedIn');
      return savedState === 'true';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn.toString());
  }, [loggedIn]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);