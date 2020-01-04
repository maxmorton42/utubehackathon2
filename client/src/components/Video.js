import React from 'react';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Divider, Grid,} from 'semantic-ui-react';

const Video = (props) => {

	const [video, setVideo] = useState({});

	useEffect( () => {
    axios.get(`/api/videos/${props.id}`)
    .then( res => setVideo(res.data) )
  }, []) 

	return(
		<>
			<div>
				Video here
			</div>
			<div>
				Title here                    likes over here
			</div>
			<Divider />
			<div>
				User here
			</div>
			<Grid columns={2} relaxed='very'>
				<Grid.Column>
					Comments here
				</Grid.Column>
				<Grid.Column>
					Other videos here
				</Grid.Column>
			</Grid>
			<Divider vertical />
		</>
	);
}

export default Video; 