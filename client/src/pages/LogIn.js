import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Register from "../components/Register";
import { AuthContext } from "../providers/AuthProvider";

const LogIn = () => {
    const { handleLogin, authenticated } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({ email, password }, navigate);
    };

    const toggleShow = () => {
        setShow(!show);
    }

    if (authenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>Log In Page</h1>
            <form onSubmit={handleSubmit} >
                <label>Email:</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password:</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" >Log in</button>
            </form>
            <p>Not you? Register here.</p>
            <button onClick={toggleShow} >{show ? "Cancel" : "Register"}</button>
            {show && <Register/>}
        </div>
    )

}

export default LogIn;