import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
// only need the AuthContext as we will use the useContext hook
// i.e. const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {

    const [user, setUser] = useState(null);
    // The user state will keep track of the user that is logged in
    // We initialize the state as null, which is a user that is not logged in

    const handleRegister = async (user, navigate) => {
        // axios call to register new user
        try {
            let res = await axios.post("/api/auth", user);
            setUser(res.data.data);
            navigate("/");
        } catch (err) {
            console.log(err.response);
            alert("An error occurred registering user");
        }
    };

    const handleLogin = async (user, navigate) => {
        // axios call to log in user
        try {
            let res = await axios.post("/api/auth/sign_in", user);
            console.log(res.data);
            setUser(res.data.data);
            navigate("/");
        } catch (err) {
            console.log(err.response);
            alert("An error occurred logging in");
        }
    };

    const handleLogout = async (navigate) => {
        // axios call to log out
        try {
            let res = await axios.delete("/api/auth/sign_out");
            console.log(res);
            setUser(null);
            navigate("/public");
        } catch (err) {
            console.log(err.response);
            alert("an error occurred logging out");
        }
    };

    return (
        <AuthContext.Provider value={{
            ...user,
            authenticated: user !== null,
            setUser,
            handleRegister,
            handleLogin,
            handleLogout,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;