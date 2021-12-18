import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Public = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Public</h1>
            <Button variant="contained" onClick={()=>navigate("/login")} >Log In</Button>
        </div>
    );
};

export default Public;