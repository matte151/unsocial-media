import React from 'react';
import { Card, Dimmer, Segment, Image, Loader  } from 'semantic-ui-react'
import PostCard from './PostCard/PostCard';


export default function PostFeed({posts, isProfile, loading, user }){

    return (
        <Card.Group itemsPerRow={1} stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
        {posts.map((post) => {
          return (
            <PostCard
              post={post}
              key={post._id}
              isProfile={isProfile}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
}