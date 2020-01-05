import React, { Fragment } from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm'
import {Divider, Grid, Segment, Header, Container, Item, List, Button, Icon } from 'semantic-ui-react';
import Iframe from 'react-iframe';
import User from './User';
import {AuthContext} from '../providers/AuthProvider';
import VideoForm from './VideoForm';


const Video = (props) => {

	const [video, setVideo] = useState({});
	const [comments, setComments] = useState([]);
	const [isForm, setForm] = useState(false);
	const [vidForm, setVidForm] = useState(false);
	const [currId, setCurrId] = useState(null);
	const user = useContext(AuthContext);

	useEffect( () => {
		const { id } = props.match.params;
    axios.get(`/api/videos/${id}`)
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
    .then( res => props.history.push('/') )
  }

	const deleteComment = (id) => {
		axios.delete(`/api/videos/${props.match.params.id}/comments/${id}`)
		.then( res => setComments(comments.filter( c => c.id !== id), ))
	}

	const editComment = (body) => {
		console.log("edit called!");
		axios.put(`/api/videos/${props.match.params.id}/comments/${currId}`, { body, video_id: props.match.params.id })
			.then( res => {
				setComments(comments.filter( c => {
					if(c.id === currId)
						return res.data;
					return c;
				}));
				setForm(!isForm);
				setCurrId(null);
			})
	}

	const toggleForm = (id) => {
		setCurrId(id);
		setForm(!isForm);
	}

	const toggleVidForm = () => {
		setVidForm(!vidForm);
	}

	const renderComments = () => {
		return comments.map( comment => {
			return (<Segment key={comment.id}>
				<List.Header as="h2">
					<User id={comment.user_id}/>
				</List.Header>
				<hr />
				{isForm && currId === comment.id?
						<CommentForm add={editComment} id={props.match.params}/>
					:
						<>
							<List.Description>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{comment.body}
							</List.Description>
							<br />
							<List.Description> {comment.created_at}</List.Description>
						</>
				}
				{ user.user.id === comment.user_id ?
					<>
						<Button color="red" icon basic
									onClick={() => deleteComment(comment.id)}
									>
										<Icon name="trash alternate" />
						</Button>
						<Button color="green" icon basic
									onClick={() => toggleForm(comment.id)}
									>
										<Icon name="pencil" />
						</Button>
					</>
				:
					null
				}
			</Segment>)
		})
	}


	return(
		<Fragment>
			{ vidForm ?
					<VideoForm />
				:
					<Item>
						<Iframe url={video.trailer}
							width="100%vw"
							height="500px"
							id="myId"
							className="myClassname"
							display="initial"
							position="relative"/>
					</Item>
			}
				<Container>
			<h1>	{video.title  }</h1>   
			{ user.user.id === video.user_id ?
				<>
					<Button color="red" icon basic
						onClick={() => deleteVideo(video.id)}
						>
								<Icon name="trash alternate" />
					</Button>            
					<Button color="green" icon basic
						onClick={() => toggleVidForm()}
						>
								<Icon name="pencil" />
					</Button>
				</>
				:
				null
			}            
			</Container>
			<Divider />
			<Container>
				<p>{video.description}</p>
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