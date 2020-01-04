import React from 'react';
import Home from './components/Home';
import MyLikedVideos from './components/MyLikedVideos'
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import Video from './components/Video';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, Divider, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
		<Divider hidden/>
		<Divider hidden/>
		<Divider hidden/>
		<Divider hidden/>
		<Divider hidden/>
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path='/my_likedvids' component={MyLikedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;