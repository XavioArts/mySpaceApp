import { Avatar, Box, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            let res = await axios.get("/api/users");
            setUsers(res.data);

        } catch (err) {
            console.log(err.response);
            alert("Error getting users");
        }        
    };

    const renderUsers = () => {
        return users.map((u)=> {
            return (
                <ListItem secondaryAction={
                    <IconButton edge="end" label="view" >
                        <Icon>visibility</Icon>
                    </IconButton>
                } >
                    <ListItemAvatar>
                        <Avatar>
                            <Icon>person</Icon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={u.email} secondary={`username: ${u.username}`} /> 
                </ListItem>
            )
        });
    };

    return (
        <UsersDiv>
            <Typography variant="h1" gutterBottom >Users page</Typography>
            <Typography variant="p" component="div" gutterBottom sx={{marginBottom: "30px"}} >Find friends and view others' posts</Typography>
            <Box sx={{display: "flex", justifyContent: "center" }} >
                <List sx={{ width: "75vw", bgcolor: "background.paper"}} >
                    {renderUsers()}
                </List>
            </Box>
        </UsersDiv>
    );
};

const UsersDiv = styled.div`
    padding: 20px;
    margin: 0px;
    text-align: center;
    background: #FFFAF9;
`;

export default Users;