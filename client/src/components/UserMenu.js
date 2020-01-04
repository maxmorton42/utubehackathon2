import React from "react";
import { Segment, Container, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

const UserMenu = () => (
  <Container text style={{ marginTop: '6em' }}>
      <h1>User Menu</h1>
      <Segment centered raised padded>
        <List>
          <Link to="/">
            <List.Item>
              <List.Icon name='youtube square' color='black' size='big' inverted/>
              <List.Content>
                Your Videos
              </List.Content>
            </List.Item>
          </Link>
          <Link to="/MyLikedVideos">
            <List.Item>
              <List.Icon name='thumbs up outline' color='black' size='big' inverted/>
              <List.Content>
                Liked Videos
              </List.Content>
            </List.Item>
          </Link>
          <Link to="/">
            <List.Item>
              <List.Icon name='comment outline' color='black' size='big' inverted/>
              <List.Content>
                Your Comments
              </List.Content>
            </List.Item>
          </Link>
          <Link to="/">
            <List.Item>
              <List.Icon name='play circle outline' color='black' size='big' inverted/>
              <List.Content>
                Playlist
              </List.Content>
            </List.Item>
          </Link>
          <Link to="/">
            <List.Item>
              <List.Icon name='user circle outline' color='black' size='big' inverted/>
              <List.Content>
                Friends
              </List.Content>
            </List.Item>
          </Link>
        </List>
      </Segment>  
  </Container>
);

export default UserMenu;