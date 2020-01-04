import React, { useState, useEffect, } from 'react';
import {Link, } from 'react-router-dom';
import axios from 'axios';
import VideoForm from './VideoForm';
import { Header, Grid, Image, Divider, Icon } from 'semantic-ui-react';


const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect( () => {
    axios.get("/api/videos")
    .then( res => setVideos(res.data) )
  }, [])

	const getVidId = (trailer) => {
		const arr = trailer.split("/");
		return arr[arr.length-1];
	}

  return (
    <>
    <br />
    <br />
		<Header as="h2">All Videos</Header>
		<Divider hidden />
		<Grid columns={5}>
			{
				videos.map( vid => {
					return(
						<div>
							<Grid.Column>
								<Link to={`/videos/${vid.id}`}>
									<Image src={`http://img.youtube.com/vi/${getVidId(vid.trailer)}/0.jpg`} />
								</Link>
							</Grid.Column>
							<Grid.Column>
								<p>
									{vid.description}
								</p>
							</Grid.Column>
						</div>
					);
			})}
			
	</Grid>
		</>
  
  )
            }


export default Home;


