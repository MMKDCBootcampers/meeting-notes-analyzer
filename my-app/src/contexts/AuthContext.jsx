import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {

  const [ conversationId, setConversationId ] = useState([
    {
      conversationId: '6300209257644032'
    }]);

  const value = {
    conversationId: [ conversationId, setConversationId ],
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
