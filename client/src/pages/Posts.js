import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            let res = await axios.get("/api/all_posts");
            setPosts(res.data);
        } catch (err) {
            console.log(err.response);
            alert("error getting posts")
        }
    }

    return (
        <div>
            <Typography variant="h1" >Posts page</Typography>
            <Typography variant="p" >Here you can view everyone's posts</Typography>
            <div style={{width: "100%", overflowWrap: "break-word"}} >
                <Typography variant="body1" gutterBottom component="div" >{JSON.stringify(posts)}</Typography>
            </div>
        </div>
    );
};

export default Posts;