import React from 'react';
import { Card, Dimmer, Segment, Image, Loader, Button, Container, Header, CardContent  } from 'semantic-ui-react'
import FriendCard from './FriendCard/FriendCard';

export default function FriendBar({friends, user, }){


    return (
        <>
        <Card.Group  itemsPerRow={1} stackable>
             <Card >
                <Header as='h1' textAlign="center">
                    Friends!
                </Header>
                <CardContent textAlign="center">Consider giving them a call</CardContent>
            </Card>
        </Card.Group>
        <Card.Group itemsPerRow={1} stackable>

        </Card.Group>
            <Card.Group itemsPerRow={1} stackable>

            {friends.map((friend) => {
                return(
                <FriendCard
                    friend={friend}
                    key={friend._id}
                    user={user}
                />
                )
            })}
            </Card.Group>
        </>
    )
    
}