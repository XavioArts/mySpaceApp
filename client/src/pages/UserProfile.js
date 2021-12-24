import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../components/Post";
import styled from "styled-components";

const UserProfile = () => {
    
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        getUser();
    }, []);

    const getUser = async () => {
        try {
            let res = await axios.get(`/api/users/${id}`);
            setUser(res.data);

        } catch (err) {
            console.log(err.response);
            alert("Error getting user");
        }        
    };

    const renderPosts = () => {
        return user.posts.map((p)=> {
            return (
                <div style={{width: "500px", margin: "20px"}} >
                    <Post user={user} post={p} />
                </div>
            );
        });
    }

    if (!user) {
        return (
            <ProfileDiv>
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
            </ProfileDiv>
        )
    }

    return (
        <ProfileDiv>
            <Typography variant="h1" >{user.username}</Typography>
            <Typography variant="p" component="div" gutterBottom >Info on this user</Typography>
            <Paper sx={{ width: "75vw", display: "flex", justifyContent: "flex-end", padding: "20px" }} component="div" elevation={3}>
                <div>
                    <Typography variant="h5" component="div" gutterBottom >Name: {user.name}</Typography>
                    <Typography variant="body1" component="div" gutterBottom >Email: {user.email}</Typography>
                    <Button variant="contained">Add Friend</Button>
                </div>
            </Paper>
            <Typography variant="h5" component="div" gutterBottom >{user.username}'s Posts</Typography>
            {user && renderPosts()}
        </ProfileDiv>
    );
};

const ProfileDiv = styled.div`
    padding: 10px;
    margin: 30px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default UserProfile;