import React from 'react';
import { Link } from 'react-router-dom'
import { getMovieDetails } from './actions';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch(getMovieDetails(id));
  }

  render() {
    const { movieDetails } = this.props;
    return (
      <div className='container'>
        <Link to={'/'}>Go Back</Link>
        <h1 className='md-title'>Movie Details</h1>
        <div className='md-movie-details'>
          <div className='image-parent'>
            <img id='poster' src={`${movieDetails.Poster}`} />
          </div>
          <div className='md-movie-text'>
            <h3 id='movieTitle'>{movieDetails.Title}</h3>
            <div className='md-movie-group'>
              <p id='released'>Released {movieDetails.Released}</p>
              <p id='runtime'>{movieDetails.Runtime}</p>
              <p id='rated'>{movieDetails.Rated}</p>
            </div>
            <p>{movieDetails.Plot}</p>
            <p>{movieDetails.Awards}</p>
            <ul>
              <li>
                <label>Metascore </label>{movieDetails.Metascore}/100
              </li>
              <li>
                <label>IMDB </label>{movieDetails.imdbRating}/10
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails;