import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Header, Grid, Image } from 'semantic-ui-react';

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect( () => {
    axios.get("/api/videos")
    .then( res => setVideos(res.data) )
  }, [])

  return (
    <>
    <br />
    <br />
    <Header>All Videos</Header>
        <br />
            <Grid columns={2} divided>
            <Grid.Row >
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={4}>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={5}>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </>
  
  )
}


export default Home;


