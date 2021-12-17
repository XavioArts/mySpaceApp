import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    // const logOut = (e) => {
    //     e.preventDefault()
    // }

    return (
        <div>
            <Typography variant="h1" >Home</Typography>
            <Typography variant="body1" gutterBottom component="div" >{JSON.stringify(auth)}</Typography>
            <Button variant="contained" onClick={()=>navigate("/login")} >Log In</Button>
            <Button variant="outlined" onClick={()=>auth.handleLogout(navigate)} >Log Out</Button>
            <Button variant="outlined" onClick={()=>navigate("/protected")}>User View</Button>
        </div>
    );
};

export default Home;