import React from 'react';
import { Card, Header, CardContent  } from 'semantic-ui-react'
import SuggestionCard from './SuggestionCard/SuggestionCard';

export default function SuggestedActivityBar({friends, user, suggestions}){


    return (
        <>
        <Card.Group  itemsPerRow={1} stackable>
             <Card >
                <Header as='h1' textAlign="center">
                    Suggestions!
                </Header>
                <CardContent textAlign="center">If you can't figure out what to do with your time, maybe we can help...</CardContent>
            </Card>
        </Card.Group>
        <Card.Group itemsPerRow={1} stackable>

        </Card.Group>
            <Card.Group itemsPerRow={1} stackable>

            {suggestions.map((suggestion) => {
                return(
                <SuggestionCard
                    friend={suggestion.friend}
                    key={suggestion._id}
                    user={user}
                    suggestion={suggestion}
                />
                )
            })}
            </Card.Group>
        </>
    )
    
}