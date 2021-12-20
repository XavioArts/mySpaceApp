import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const navigate = useNavigate();
    const { handleRegister } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            alert("password does not match");
            return;
        }
        handleRegister({ email, password, name, username }, navigate);
    }

    return (
        <form onSubmit={handleSubmit} >
            <p>Name:</p>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <p>Username:</p>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} />
            <p>Email:</p>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            <p>Password:</p>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} />
            <p>Confirm Password:</p>
            <input value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} />
            <button type="submit" >Register</button>
        </form>
    );
};

export default Register;