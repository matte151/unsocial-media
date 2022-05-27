import React, { useEffect, useState, useLayoutEffect  } from "react";
import "./MainPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Grid, Header, Image, Segment, Message, Container, Card } from 'semantic-ui-react'
import { useNavigate, Link } from "react-router-dom";
import PageHeader from "../../components/Header/Header";
import MainFeed from "../../components/MainFeed/MainFeed"
import FriendBar from "../../components/FriendBar/FriendBar"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
import AddFriendForm from "../../components/AddFriendForm/AddFriendForm"
import * as postAPI from "../../utils/postAPI";
import * as friendAPI from "../../utils/friendAPI"


export default function Main({user, handleLogout}){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [friends, setFriends] = useState([]);

    function clickLike(){
    //pop up a message that says:
    //"We already assumed that you liked what you posted, or you wouldn't have posted it... riiiiiight?"
    
    }

    async function handleAddPost(post) {
        try {
            setLoading(true);
            const data = await postAPI.create(post);
            setPosts([data.post, ...posts]);
            setLoading(false);
        } catch (err) {
            console.log(err, " handleAddPost Error");
            setError(err.message)
        }
    }

    async function getPosts() {
        try {
            const data = await postAPI.getAll();
            setPosts([...data.posts]);
            setLoading(false);
        } catch (err) {
            console.log(err, " getPosts error");
            setError(err.message)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

async function removePost(postId){
    console.log("handlePost was finished, we got here removePost",postId," <<<< PostId")
    try {
        const data = await postAPI.removePost(postId);
        console.log("removal>>>>>>>",data,"<<<< removal")
        getPosts()
    } catch (err) {
        console.log(err)
        setError(err.message)
    }
}


async function handleAddFriend(friend) {
    try {
        setLoading(true);
        const data = await friendAPI.create(friend);
        setFriends([data.friend, ...friends]);
        setLoading(false);
    } catch (err) {
        console.log(err, " handleAddPost Error");
        setError(err.message)
    }
}

async function getFriends() {
    try {
        const data = await friendAPI.getAll();
        setFriends([...data.friends]);
        setLoading(false);
    } catch (err) {
        console.log(err, " getFriends error");
        setError(err.message)
    }
}

useLayoutEffect (() => {
    getFriends();
}, []);


    if(error) {
        console.log("This here be ye error!!!", error)
        return (
            <>
            <ErrorMessage> Hey there sorry we seem to have broken... um... something... </ErrorMessage>
            </>
        )
    }

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column width={16}>
                    <PageHeader handleLogout={handleLogout} user={user}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                   <Grid.Row>
                       <AddFriendForm handleAddFriend={handleAddFriend} />
                   </Grid.Row>
                   <Grid.Row>
                    <Container>
                        <FriendBar 
                            friends={friends}
                            loading={loading}
                            user={user} />
                    </Container>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Container>
                                <AddPostForm handleAddPost={handleAddPost}/>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Container>
                                <MainFeed               
                                    posts={posts}
                                    loading={loading}
                                    user={user}
                                    removePost={removePost}/>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Container>Suggested Activities</Container>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )






}
