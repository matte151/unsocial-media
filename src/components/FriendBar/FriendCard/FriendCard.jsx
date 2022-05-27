import React from "react";
import { Card, Container, Icon, Image } from "semantic-ui-react";


export default function FriendCard({ user, friend }) {

     

    return (
        // <Card key={friend._id} raised>
        
        <Card key={friend._id} raised>
            <Card.Content textAlign="left">
            <Container textAlign='left'>
                <Image textAlign="left" size="large" avatar src={friend.photoUrl?friend.photoUrl:"https://i.imgur.com/wkAUgGb.png"} />
                {friend.name}
            </Container>
            </Card.Content>
        </Card>



    )
}