import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import './styles.css'

export const server = "https://bharatiya-backend.vercel.app/api";
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);
