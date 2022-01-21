import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state={ post:{} }
  
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => { return response.json()})
      .then(result => {
      this.setState({post:result})})
  }
  render(){
    
    return <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{this.state.post.id}</th>
            <td>{this.state.post.title}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  }
}
export default App;
