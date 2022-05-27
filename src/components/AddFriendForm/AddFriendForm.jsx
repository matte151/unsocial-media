import React, { useState } from 'react';

import { Button, Form, Grid, Segment, Header, Label, CardContent, Card} from 'semantic-ui-react'

export default function AddFriendForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    name: '',
    computerGames: '0',
    cooking: '0',
    discussion: '0',
    outdoors: '0',
    restaurants: '0',
    sports: '0',
    trivia: '0',
    TTRPG: '0',
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    const value = e.target.type === 'checkbox' ? e.target.checked ? 1 : 0 : e.target.value;    
    setState({
      ...state,
      [e.target.name]: value
    })
    console.log(state)
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('name', state.name)
    formData.append('computerGames', state.computerGames)
    formData.append('cooking', state.cooking)
    formData.append('discussion', state.discussion)
    formData.append('outdoors', state.outdoors)
    formData.append('restaurants', state.restaurants)
    formData.append('sports', state.sports)
    formData.append('trivia', state.trivia)
    formData.append('TTRPG', state.TTRPG)
    props.handleAddFriend(formData); 
    
  }


  return (
    
    <Grid textAlign='center' style={{ height: 650 }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 700 }}>
        <Segment>
         
            <Form  autoComplete="off" onSubmit={handleSubmit}>
                <Header as='h3'>Genre</Header>
                <Header as='h5'>How much does your friend like each genre from 1-10?</Header>
                <Form.Group widths='equal'>
                    <Form.Field inline>
                    <Label>Computer Games</Label>
                    <input type='number' name="computerGames" onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Cooking</Label>
                    <input type='number' name="cooking" onChange={handleChange} />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                    <Label>Discussion</Label>
                    <input type='number' name="discussion" onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Outdoors</Label>
                    <input type='number' name="outdoors"  onChange={handleChange} />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                    <Label>Restaurants</Label>
                    <input type='number' name="restaurants"  onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Sports</Label>
                    <input type='number' name="sports" onChange={handleChange} />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                    <Label>Trivia</Label>
                    <input type='number' name="trivia"  onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                    <Label>TTRPG</Label>
                    <input type='number' name="TTRPG" onChange={handleChange} />
                    </Form.Field>
                </Form.Group>
                <Form.Input
                    className="form-control"
                    name="name"
                    value={state.name}
                    placeholder="Name?"
                    onChange={handleChange}
                    required
                />   
                <Form.Input
                    className="form-control"
                    type="file"
                    name="photo"
                    placeholder="upload image"
                    onChange={handleFileInput}
                />   
                <Button
                    type="submit"
                    className="btn"
                    color="blue"
                >
                Add Friend
              </Button>
            </Form>
           
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}