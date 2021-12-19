import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Public = () => {

    const navigate = useNavigate();
    const { authenticated } = useContext(AuthContext);

    if (authenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>Public</h1>
            <Button variant="contained" onClick={()=>navigate("/login")} >Log In</Button>
        </div>
    );
};

export default Public;