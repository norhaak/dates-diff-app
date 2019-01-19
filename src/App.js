import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleSubmit = event => {
    event.preventDefault()
      let startDate = event.target.elements.startDate.value
      let endDate = event.target.elements.endDate.value
  }

  render() {
    return (
      <div className="App">
        <h1>Dates Diff App</h1>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <label>
            Start Date:
            <input type="text" name="startDate" />
          </label>
          <label>
            End Date:
            <input type="text" name="endDate" />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
       {/*  <div className="App-result">
          There are days between {startDate} and {endDate}.
        </div> */}
      </div>
    );
  }
}

export default App;
