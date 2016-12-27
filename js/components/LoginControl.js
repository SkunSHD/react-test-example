import React from 'react'
import Greeting from './LoginControl/Greeting'
import { Greetings } from './LoginControl/Greeting'
import { LoginButton, LogoutButton } from './LoginControl/LoginButtons'
import NumberList from './NumberList'


export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = '';
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        { button }
        <NumberList numbers={[1,2,3,4,5]}/>
      </div>
    );
  }
}