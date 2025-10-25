import React from 'react'

export const AuthContext = React.createContext();
export default function AuthProvider( {children}) {
 
    const initialAuthuser = localStorage.getItem('userInfo'); 

    const [authuser, setAuthuser] = React.useState
    (initialAuthuser ? JSON.parse(initialAuthuser) : undefined);
    
    return (
        <AuthContext.Provider value={[authuser, setAuthuser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext);