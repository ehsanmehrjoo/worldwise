import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();


const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: null,
  isAuthenticated: false,
  error : ""
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

      case "error" :
        return {...state , error : action.payload, isAuthenticated: false };
    default:
      throw new Error("Unknown action type");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated , error }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });

    } else {
      dispatch({type : "error" ,  payload :"Login failed 🤔"});
    
    }
  }
  
  

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside the AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
