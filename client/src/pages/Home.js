import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Icon, Paper } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import NewPost from "../components/NewPost";
import Post from "../components/Post";

const Home = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [myPosts, setMyPosts] = useState(null);

    useEffect(()=>{
        getMyPosts();
    }, [])

    const getMyPosts = async () => {
        try {
            let res = await axios.get("/api/posts");
            setMyPosts(res.data);
        } catch (err) {
            console.log(err.response);
            alert("error getting posts")
        }
    }

    const addPost = (post) => {
        setMyPosts([...myPosts, post]);
    };

    const renderPosts = () => {
        return myPosts.map((p) => {
            return (
                <div style={{width: "500px", margin: "20px"}} >
                        <Post user={auth} post={p} />
                </div>
            );
        });
    };


    return (
        <HomeDiv>
            {/* <Icon fontSize="large" >fort</Icon> */}
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                <Icon sx={{fontSize: 100}} >fort</Icon>
                <Typography variant="h1" >Home</Typography>
            </div>
            <Typography sx={{textAlign: "center" }} variant="h4" gutterBottom >Welcome, {auth.name}</Typography>
            <div>
            <Paper sx={{ width: "75vw", display: "flex", justifyContent: "flex-end", padding: "20px" }} component="div" elevation={2} >
                <div style={{textAlign: "right"}} >
                    <Typography variant="h4" component="div" gutterBottom >{auth.username}</Typography>
                    <Typography variant="body1" component="div" gutterBottom >{auth.email}</Typography>
                </div>
            </Paper>
            </div>
            {/* <div style={{width: "100%", overflowWrap: "break-word"}} >
                <Typography variant="body1" gutterBottom component="div" >{JSON.stringify(auth)}</Typography>
            </div>
            <Button variant="contained" onClick={()=>navigate("/login")} >Log In</Button>
            <Button variant="outlined" onClick={()=>auth.handleLogout(navigate)} >Log Out</Button>
            <Button variant="outlined" onClick={()=>navigate("/protected")}>User View</Button>
            <hr/>
            <div style={{width: "100%", overflowWrap: "break-word"}} >
                <Typography variant="body1" gutterBottom component="div" >{JSON.stringify(myPosts)}</Typography>
            </div>
            <hr/> */}
            <NewPost addPost={addPost} />
            {myPosts && renderPosts()}
        </HomeDiv>
    );
};

const HomeDiv = styled.div`
    padding: 10px;
    margin: 30px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default Home;