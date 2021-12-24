import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import styled from "styled-components";

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
        <PageDiv>
            <div style={{textAlign: "center"}} >
                <Typography variant="h1" >Post Feed</Typography>
                <Typography variant="body2" >Here you can view everyone's posts</Typography>
            </div>
            <PostsDiv>
                {posts && users && renderPosts()}
            </PostsDiv>
        </PageDiv>
    );
};

const PageDiv = styled.div`
    padding: 10px;
    margin: 30px 10px;
`;
const PostsDiv = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
`;

export default Posts;