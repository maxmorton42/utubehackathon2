import React, { useState, useEffect, } from 'react';
import {Link, } from 'react-router-dom';
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
							{
								videos.map( vid => {
									return(
										<Grid.Row >
											<Grid.Column>
												<Link to={`/videos/${vid.id}`}>
													<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
												</Link>
											</Grid.Column>
										</Grid.Row>
									);
								})}
							}
          </Grid>
          </>
  
  )
}


export default Home;


