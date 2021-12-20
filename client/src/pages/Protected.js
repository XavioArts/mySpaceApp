import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Protected = () => {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted ", username);
    };

    return (
        <div>
            <h1>Settings</h1>
            <p>edit form will go here</p>
            <Box component="form" autoComplete="off" onSubmit={handleSubmit} >
                <TextField id="username" label="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <Button type="submit" >Submit</Button>
            </Box>
            <Button>Delete</Button>
        </div>
    );
};

export default Protected;