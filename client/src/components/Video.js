import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Divider, Grid, Segment,} from 'semantic-ui-react';
import Iframe from 'react-iframe'


const Video = (props) => {

	const [video, setVideo] = useState({});

	useEffect( () => {
    axios.get(`/api/videos/${props.location.pathname.charAt(props.location.pathname.length-1)}`)
    .then( res =>{
			setVideo(res.data);
		});
  }, []) 

	return(
		<>
			<div>
				<Iframe url={video.trailer}
					width="100%vw"
					height="800px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"/>
			</div>
			<div>
				Title here                    likes over here
			</div>
			<Divider />
			<div>
				User here
			</div>
			<Segment>
				<Grid columns={3} relaxed='very'>
					<Grid.Column>
						Comments here
					</Grid.Column>
					<Grid.Column>
						Comments here
					</Grid.Column>
					<Divider vertical/>
					<Grid.Column>
						Other videos here
					</Grid.Column>
				</Grid>
			</Segment>
		</>
	);
}

export default Video; 