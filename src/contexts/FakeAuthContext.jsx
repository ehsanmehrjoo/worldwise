import React, { createContext, useContext } from 'react'

const AuthContext = createContext()

function  AuthProvider ({children}) {
    
    function login(email , padssword){}

    function logout (){}
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