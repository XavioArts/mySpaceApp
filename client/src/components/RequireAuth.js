import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RequireAuth = () => {

    const auth = useContext(AuthContext);
    const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

    useEffect(()=>{
        checkAuthStatus();
    },[]);

    const checkAuthStatus = async () => {
        if (auth.authenticated || !localStorage.getItem("access-token")) {
            console.log("authenticated");
            setCheckingAuthStatus(false);
            return;
        }
        try {
            console.log("validating token");
            const res = await axios.get("/api/auth/validate_token");
            auth.setUser(res.data.data);
        } catch (err) {
            console.log(err.respose);
            console.log("unable to validate token");
        } finally {
            setCheckingAuthStatus(false);
        }
    };

    if (checkingAuthStatus) {
        return (
            <Box sx={{display: "flex", justifyContent: "center"}} >
                <CircularProgress />
                <Box sx={{
                    top: 0,
                    right: 42,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",                    
                    }} >
                    <Typography variant="caption" component="div" >Loading</Typography>
                </Box>
            </Box>
        )
    }

    if (!auth.authenticated) {
        return <Navigate to="/public" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default RequireAuth;