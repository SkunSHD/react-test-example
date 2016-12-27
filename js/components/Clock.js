import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
// const element = <App />;
// ReactDOM.render(
//   element,
//   document.getElementById('app')
// );


// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }