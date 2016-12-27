import React from 'react'

// export default class CoolForm extends React.Component {
//   render() {
//     return (
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }

export default class CoolForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      textareaValue: 'Please write an essay about your favorite DOM element.'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleTextareaChange(event) {
    this.setState({textareaValue: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
        <br />
        <textarea placeholder={this.state.textareaValue} onChange={this.handleTextareaChange} />
      </form>
    );
  }
}