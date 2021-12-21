import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../components/Post";

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

    return (
        <div>
            <Typography variant="h1" >User Profile</Typography>
            <Typography variant="p" >Info on this user and list of thier posts</Typography>
            <br/>
            <hr/>
            <Typography variant="p" >{JSON.stringify(user)}</Typography>
            <hr/>
            {user && renderPosts()}
        </div>
    );
};

export default UserProfile;