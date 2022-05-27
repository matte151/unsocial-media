import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, Container, Grid } from "semantic-ui-react";
import "./Header.css";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment.Group horizontal className='blue' >
          <Segment inverted className='blue' >
          <div className="flex"><Link to={`/${user?.username}`}>
            <Image
              src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://i.imgur.com/wkAUgGb.png"
              }
              size='tiny'
              avatar
            ></Image>
        </Link>

        <Link to="/">
        <Image src="https://i.imgur.com/wkAUgGb.png" size='tiny' centered />
        </Link>


      <Link inverted to="" onClick={handleLogout}>
          Logout
        </Link>
        </div>
        </Segment>
    </Segment.Group>
  );
}