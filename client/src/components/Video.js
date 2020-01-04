import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Divider, Grid,} from 'semantic-ui-react';

const Video = (props) => {

	const [video, setVideo] = useState({});

	useEffect( () => {
    axios.get(`/api/videos/${props.location.pathname.charAt(props.location.pathname.length-1)}`)
    .then( res =>{
			debugger
			setVideo(res.data);
		});
  }, []) 

	return(
		<>
			<div>
			<iframe id="inlineFrameExample"
				title="Inline Frame Example"
				width="100%"
				height="100%"
				src={video.trailer}>
			</iframe>
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
					<Divider vertical />
					Other videos here
				</Grid.Column>
			</Grid>
		</>
	);
}

export default Video; 