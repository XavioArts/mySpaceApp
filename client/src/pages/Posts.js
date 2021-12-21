import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const Posts = () => {

    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(()=>{
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            let res = await axios.get("/api/all_posts");
            let userRes = await axios.get("/api/users");
            setPosts(res.data);
            setUsers(userRes.data);
        } catch (err) {
            console.log(err.response);
            alert("error getting posts")
        }
    }

    const renderPosts = () => {
        return posts.map((p)=>{
            let postUser = users.find((u)=>u.id === p.user_id);
            return (
                <div style={{width: "500px", margin: "20px"}} >
                    <Post user={postUser} post={p} />
                </div>
            )
        })
    }

    return (
        <div>
            <Typography variant="h1" >Posts page</Typography>
            <Typography variant="p" >Here you can view everyone's posts</Typography>
            {/* <div style={{width: "100%", overflowWrap: "break-word"}} >
                <Typography variant="body1" gutterBottom component="div" >{JSON.stringify(posts)}</Typography>
            </div> */}
            <hr/>
            {posts && users && renderPosts()}
        </div>
    );
};

export default Posts;