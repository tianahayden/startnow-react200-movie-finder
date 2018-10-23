import React from 'react';
import { Link } from 'react-router-dom'
import { updateMovie, getMovieData } from './actions';

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleSearchButton = this.handleSearchButton.bind(this);
        this.enter = this.enter.bind(this);
    }

    enter(e) {
        if (e.key === 'Enter') {
            this.handleSearchButton
        }
    }

    handleSearchInput(e) {
        const { dispatch } = this.props;
        dispatch(updateMovie(e.target.value));
    }

    handleSearchButton() {
        const { dispatch, movieName } = this.props;
        dispatch(getMovieData(movieName));
    }

    render() {
        const { movieData, showMovieData } = this.props
        return (
            <div className='container'>
                <h1 className='ms-title'>Get Movie Information</h1>
                <label>Enter Movie Name:</label>
                <div className='ms-search-bar'>
                    <input placeholder='Star Wars' onChange={this.handleSearchInput} onKeyDown={this.enter} />
                    <button onClick={this.handleSearchButton}>Search</button>
                </div>
                {(showMovieData) &&
                    <div className='ms-results'>
                        {movieData.Search.map((movie, index) =>
                            <div className='ms-indiv-result' key={index}>
                                <img className='ms-poster' src={`${movie.Poster}`} />
                                <div className='ms-movie'>
                                    <div>{movie.Title}</div>
                                    <div>{movie.Year}</div>
                                </div>
                                <Link to={`/movie/${movie.imdbID}`} className='ms-movie-button'>More Information</Link>
                            </div>
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default MovieSearch;