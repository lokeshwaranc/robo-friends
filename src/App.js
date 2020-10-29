import React, { Component } from 'react';

import CardList from './containers/cartlist.container';
import SearchBox from './components/searchbox.component';
import Scroll from './components/scroll.component';
import ErrorBoundary from './components/error-boundary.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({robots: data}));
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
    console.log(e.target.value);

  }

  render(){
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot =>(
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    ));
    console.log(filteredRobots);
      return !robots.length?  <h1>Loading</h1>:
     (
      <div className='tc'>
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
      </div>
     )
      
  }
}

export default App;
