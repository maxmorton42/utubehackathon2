import React, { Fragment } from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm'
import {Divider, Grid, Segment, Header, Container, Item, List, Button, Icon } from 'semantic-ui-react';
import Iframe from 'react-iframe';


const Video = (props) => {
	const [video, setVideo] = useState({})
	const [comments, setComments] = useState([])

	useEffect( () => {
		const { id } = props.match.params
    axios.get(`/api/videos/${props.location.pathname.charAt(props.location.pathname.length-1)}`)
    .then( res =>{
			setVideo(res.data);
		});
		axios.get(`/api/videos/${id}/comments`)
		.then( res => setComments( res.data ) )
	}, []) 
	const addComment = (body) => {
		axios.post(`/api/videos/${props.match.params.id}/comments`, { body, video_id: props.match.params.id })
			.then( res => {
				setComments([...comments, res.data])
			})
	}

	const deleteVideo = (id) => {
    axios.delete(`/api/videos/${id}`)
    .then( res => props.history.push.home )
  }

	const deleteComment = (id) => {
		axios.delete(`/api/videos/${props.match.params.id}/comments/${id}`)
		.then( res => setComments(comments.filter( c => c.id !== id), ))
	}

	const renderComments = () => {
		return comments.map( comment => (
			<Segment key={comment.id}>
				<List.Header as="h2">{comment.user_id}</List.Header>
				<hr />
				<List.Description>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{comment.body}
				</List.Description>
				<br />
				<List.Description> {comment.created_at}</List.Description>
				<Button color="green" icon basic
              onClick={() => deleteComment(comment.id)}
              >
								 <Icon name="trash alternate" />
              </Button>
			</Segment>
		))
	}


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
				<Container>
			<h1>	{video.title  }</h1>   
			<Button color="green" icon basic
              onClick={() => deleteVideo(video.id)}
              >
								 <Icon name="trash alternate" />
              </Button>            
			</Container>
			<Divider />
			<Container>
				User
				</Container>
			<Divider hidden />
			<Container>
				<CommentForm add={addComment} id={props.match.params}/>
				<Grid columns={3}>
					<Grid.Row>
						<Grid.Column width={10}>
							<Header as="h3">Comments</Header>
							<List>
								{ renderComments() }
							</List>
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