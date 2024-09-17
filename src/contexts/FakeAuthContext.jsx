import React, { createContext, useContext, useReducer, useState } from 'react'

const AuthContext = createContext();

const initialState = {
    user : null, 
      isAuthenticated : false
}
function reducer(state , action){
    switch (action.type) {
        case  "login":
            return {...state , user  : action.payload , isAuthenticated : true}
            
          
    case "logout" :
        return {...state , user : null , isAuthenticated : true}
        default:
            throw new Error ("Unknown action type")
             
    }
}
function  AuthProvider ({children}) {
    const [{user ,  isAuthenticated} , dispatch] = useReducer(reducer)
    
    function login(email , padssword){
        dispatch({type : "login" , payload : email , padssword})
    }

    function logout (){
        dispatch({type : "logout"})
    }
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}
function useAuth (){
    const context = useContext(AuthContext)
    if(context === undefined) throw new Error ("AuthContext  was used outside the AuthProvider")
    return context
}
export   {AuthProvider , useAuth}