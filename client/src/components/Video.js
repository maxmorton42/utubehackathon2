import React, { Fragment } from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Divider, Grid, Segment, Header, Container, Item} from 'semantic-ui-react';
import Iframe from 'react-iframe';


const Video = (props) => {

	const [video, setVideo] = useState({});

	useEffect( () => {
    axios.get(`/api/videos/${props.location.pathname.charAt(props.location.pathname.length-1)}`)
    .then( res =>{
			setVideo(res.data);
		});
  }, []) 

	return(
		<Fragment>
			<Item>
				<Iframe url={video.trailer}
					width="100%vw"
					height="500px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"/>
			</Item>
			<div>
				Title here                    likes over here
			</div>
			<Divider />
			<div>
				User here
			</div>
			<Divider hidden />
			<Container>
				<Grid columns={3}>
					<Grid.Row>
						<Grid.Column width={10}>
							<Header as="h3">Comments</Header>
						</Grid.Column>
						<Grid.Column>
							<Header as="h3">Other Videos</Header>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Video; 