import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Image, Header, Item, ItemContent, ItemDescription } from 'semantic-ui-react';

const User = (props) => {
	const [user, setUser] = useState({});
	useEffect(() => {
		axios.get(`/api/users/${props.id}`)
			.then(res => {
				setUser(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, [])

	return (
		<>
			<Item>
				<ItemContent>
					<Image verticalAlign='top' circular src={require('./images/utoob_logo.png')} size='mini'/>
				</ItemContent>
				<ItemDescription>
					<Header as="h3">{user.name}</Header>
				</ItemDescription>
			</Item>
		</>
	)
}

export default User;