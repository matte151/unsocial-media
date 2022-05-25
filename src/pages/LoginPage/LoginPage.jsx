import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage(props) {

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/");
    
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
       
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://i.imgur.com/wkAUgGb.png" /> Need your fix? Log in - Unsocially!
          </Header>
          <Segment stacked>
          <Form autoComplete="off" onSubmit={handleSubmit}>
     
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                color="blue"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Log In
              </Button>
            
          </Form>
          <br></br>
          <hr></hr>
          <br></br>
          <Link to="/signup">
          <Button positive>
            Breaking free?  Sign Up
          </Button>
          </Link>
          {error ? <ErrorMessage error={error} /> : null}
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}