import { createContext, PropsWithChildren, useContext, useState } from "react";

enum StateTest {
    'cheking',
    'login',
    'closed',
    'authenticated'
}

interface AuthState {
    state: StateTest
    currentView: string;
    loginEmailWithPassword: (email: string, password: string) => void
    logOut: () => void
    changeView:(view: string) =>void;
}

export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [state, setState] = useState(StateTest.cheking)
    const [currentView, setCurrentView] = useState<string>("home");

    const loginEmailWithPassword = (email: string, password: string) => {
        setState(StateTest.login);
        setCurrentView("home");
    }

    const logOut = () => {
        setState(StateTest.closed)
        setCurrentView("home");
    }

    const changeView = (view: string) => {
        setCurrentView(view);
    }

    return (<AuthContext.Provider value={{
        state: state,
        currentView,
        loginEmailWithPassword,
        logOut,
        changeView,
    }}>
        {children}
    </AuthContext.Provider>)
}   