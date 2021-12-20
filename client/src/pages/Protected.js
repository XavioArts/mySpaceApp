import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Protected = () => {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState(auth.username ? auth.username : "");
    const [name, setName] = useState(auth.name ? auth.name : "");
    const [email, setEmail] = useState(auth.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted ", username, name, email);
        auth.handleUpdate({username, email, name, id: auth.id},navigate);
    };

    return (
        <div>
            <h1>Settings</h1>
            <p>edit form will go here</p>
            <Box sx={{width: "75vw", padding: "10px"}} component="form" autoComplete="off" onSubmit={handleSubmit} >
                <TextField 
                    fullWidth
                    margin="normal"
                    id="username" 
                    label="Username" 
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)} />
                <TextField 
                    fullWidth
                    margin="normal"
                    id="name" 
                    label="Full Name" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)} />
                <TextField 
                    fullWidth
                    margin="normal"
                    id="username" 
                    label="Email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} />
                <Button type="submit" >Submit</Button>
            </Box>
            <Button>Delete</Button>
        </div>
    );
};

export default Protected;