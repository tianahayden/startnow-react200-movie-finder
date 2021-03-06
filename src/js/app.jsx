import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

import MovieDetails from './Components/MovieDetails'
import MovieSearch from './Components/MovieSearch';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Route exact path='/' component={ MovieSearch } />
          <Route path='/movie/:id' component={ MovieDetails } />
        </div>
      </Router>
    )
  }
}
