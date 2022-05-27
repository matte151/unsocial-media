import React from "react";
import { Card, Container, Image } from "semantic-ui-react";


export default function SuggestionCard({ user, suggestion, friend }) {

     

    return (

        
        <Card key={suggestion._id} raised>
            <Card.Content textAlign="left">
            <Container textAlign='left'>
                <Image textAlign="left" size="large" avatar src={friend.photoUrl?friend.photoUrl:"https://i.imgur.com/wkAUgGb.png"} />
                {friend.name}
            </Container>
            <Container textAlign='left'>
                {suggestion}
            </Container>
            </Card.Content>
        </Card>



    )
}