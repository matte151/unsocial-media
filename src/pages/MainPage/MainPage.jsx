import React, { useEffect, useState } from "react";
import "./MainPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Grid, Header, Image, Segment, Message, Container } from 'semantic-ui-react'
import { useNavigate, Link } from "react-router-dom";
import PageHeader from "../../components/Header/Header";
import MainFeed from "../../components/MainFeed/MainFeed"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
import * as postsAPI from "../../utils/postAPI";


export default function Main({user, handleLogout}){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    function clickLike(){
    //pop up a message that says:
    //"We already assumed that you liked what you posted, or you wouldn't have posted it... riiiiiight?"
    
    }

    async function handleAddPost(post) {
        try {
            setLoading(true);
            const data = await postsAPI.create(post);
            setPosts([data.post, ...posts]);
            setLoading(false);
        } catch (err) {
            console.log(err, " handleAddPost Error");
            setError(err.message)
        }
    }

    async function getPosts() {
        try {
            const data = await postsAPI.getAll();
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
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout} user={user}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Container>FRIENDS AREA</Container>
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
                                    user={user}/>
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
