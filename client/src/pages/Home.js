import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";
import styled from "styled-components";

const Home = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    // const logOut = (e) => {
    //     e.preventDefault()
    // }

    return (
        <HomeDiv>
            {/* <Icon fontSize="large" >fort</Icon> */}
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                <Icon sx={{fontSize: 100}} >fort</Icon>
                <Typography variant="h1" >Home</Typography>
            </div>
            <Typography variant="h4">Hello {auth.username}</Typography>
            <div style={{width: "100%", overflowWrap: "break-word"}} >
                <Typography variant="body1" gutterBottom component="div" >{JSON.stringify(auth)}</Typography>
            </div>
            {/* <Button variant="contained" onClick={()=>navigate("/login")} >Log In</Button> */}
            <Button variant="outlined" onClick={()=>auth.handleLogout(navigate)} >Log Out</Button>
            <Button variant="outlined" onClick={()=>navigate("/protected")}>User View</Button>
        </HomeDiv>
    );
};

const HomeDiv = styled.div`
    padding: 10px;
    margin: 30px 10px;
`;

export default Home;