import React from "react";
import { Card, Container, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PostCard({ post, user, removePost }) {

function handleLikes() {
    // do some stuff... Specifically if they click the likes button pop them up a message maybe?
}

    const likesValue = Math.floor(Math.random() * (1000000) + 1)

    function handleDelete(){
        console.log("Button was clicked, we got here handleDelete",post._id,"ID to be deleted")
        removePost(post._id)
    }

return (
    <Card key={post._id} raised style={{ maxWidth: 700 }} centered>
        <Card.Content textAlign="left">
            <Container textAlign='right'>
                <Icon
                align="right"
                name={"x"}
                size="large"
                color="red"
                onClick={handleDelete}
                />
            </Container>
            <Container textAlign='left'>
                <Image textAlign="left" size="large" avatar src={post.user.photoUrl?post.user.photoUrl:"https://i.imgur.com/wkAUgGb.png"} />
                {post.user.username}
            </Container>

        </Card.Content>
    <Image src={`${post.photoUrl}`} wrapped ui={false} />
    <Card.Content>
      <Card.Description>{post.caption}</Card.Description>
    </Card.Content>
    <Card.Content extra textAlign={"right"}>
      <Icon
        name={"heart"}
        size="large"
        color="red"
        onClick={handleLikes}
      />
      {likesValue} Likes
    </Card.Content>
  </Card>
)


}