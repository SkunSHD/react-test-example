import React from 'react'

function UserGreeting(props) {
  return <h3>Welcome back!</h3>;
}

function GuestGreeting(props) {
  return <h3>Please sign up.</h3>;
}

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


// export default class Greeting extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {isLoggedIn: this.props.isLoggedIn}
//   }

//   render() {
//     let greeting = ''

//     if (this.state.isLoggedIn) {
//       greeting = <h1>Welcome back!</h1>
//     }
//     greeting =  <h1>Please sign up.</h1>

//     return (
//       <div>
//         { greeting }
//       </div>
//     )
//   }
// }