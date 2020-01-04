import React, { useState, useEffect, } from "react";
import axios from 'axios';
import {Link, } from 'react-router-dom';
import {  Divider, Image, Grid } from 'semantic-ui-react';

const MyVideos = () => {
  const [videos, setvideos ] = useState([])

  useEffect( () => {
    axios.get("/api/video_status")
    .then ( res => setvideos(res.data))
  }, [])

  const deleteVideo = (id) => {
    axios.delete(`/api/videos/${id}`)
    .then( res => setvideos(videos.filter( f => f.id !== id), ))
  }

  const getVidId = (trailer) => {
		const arr = trailer.split("/");
		return arr[arr.length-1];
	}

  return (
    <>
    <h1>Liked Videos</h1>
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

export default MyVideos