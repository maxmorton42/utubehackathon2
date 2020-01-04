import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item fitted='vertically'>
            <Image verticalAlign='middle' circular src={require('./images/utoob_logo.png')} size='mini'
            />
          </Menu.Item>
          <Menu.Item
            fitted='vertically'
            verticalAlign='middle'
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu fixed='top' size='large' text pointing secondary>
          <Link to='/'>
            <Menu.Item
            
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            >
            <Image verticalAlign='middle' src={require('./images/utoob_icon.png')} size='small' />
            </Menu.Item>
          </Link>
          { this.rightNavItems() }
        </Menu>
      </div>
    );
  };
};

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    );
  };
};

export default withRouter(ConnectedNavbar);
