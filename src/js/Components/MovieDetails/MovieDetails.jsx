import React from 'react';
import { Link } from 'react-router-dom'
import { getMovieDetails } from './actions';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch(getMovieDetails(id));
  }

  render() {
    const { movieDetails } = this.props;
    return (
      <div>
        <h1>Movie Detail Container</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
        <Link to={'/'}>Go Back</Link>
        <p>{movieDetails.Title}</p>
        <p>{movieDetails.Year}</p>
        <p>{movieDetails.Plot}</p>
      </div>
    )
  }
}

export default MovieDetails;