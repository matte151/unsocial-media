import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function PostCard({ post, user }) {

function handleLikes() {
    // do some stuff... Specifically if they click the likes button pop them up a message maybe?
}

    const likesValue = Math.floor(Math.random() * (1000000) + 1)


return (
    <Card key={post._id} raised>
        <Card.Content textAlign="left">
            <Image size="large" avatar src={post.user.photoUrl?post.user.photoUrl:"https://i.imgur.com/wkAUgGb.png"} />
            {post.user.username}
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

export default PostCard;