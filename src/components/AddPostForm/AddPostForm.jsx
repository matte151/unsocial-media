import React, { useState } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddPostForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    caption: '',
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
    formData.append('caption', state.caption)
    formData.append('computerGames', state.computerGames)
    formData.append('cooking', state.cooking)
    formData.append('discussion', state.discussion)
    formData.append('outdoors', state.outdoors)
    formData.append('restaurants', state.restaurants)
    formData.append('sports', state.sports)
    formData.append('trivia', state.trivia)
    formData.append('TTRPG', state.TTRPG)
    props.handleAddPost(formData); 
    
  }


  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 700 }}>
        <Segment>
            <Form  autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <label>Genre</label>
                    <Form.Field label='Computer Games' control='input' type='checkbox' name="computerGames" onChange={handleChange} />
                    <Form.Field label='Cooking' control='input' type='checkbox' name="cooking" onChange={handleChange} />
                    <Form.Field label='Discussion' control='input' type='checkbox' name="discussion" onChange={handleChange} />
                    <Form.Field label='Outdoors' control='input' type='checkbox' name="outdoors"  onChange={handleChange} />
                    <Form.Field label='Restaurants' control='input' type='checkbox' name="restaurants"  onChange={handleChange} />
                    <Form.Field label='Sports' control='input' type='checkbox' name="sports" onChange={handleChange} />
                    <Form.Field label='Trivia' control='input' type='checkbox' name="trivia"  onChange={handleChange} />
                    <Form.Field label='TTRPG' control='input' type='checkbox' name="TTRPG" onChange={handleChange} />
                </Form.Group>

                <Form.Input
                    className="form-control"
                    name="caption"
                    value={state.caption}
                    placeholder="Have something you think the world needs to hear?  Share it here?"
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
                POST
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}