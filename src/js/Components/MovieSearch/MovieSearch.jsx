import React from 'react';
import { updateMovie, getMovieData } from './actions';

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleSearchButton = this.handleSearchButton.bind(this);
        this.enter = this.enter.bind(this);
    }

    enter(e){
        if (e.key === 'Enter') {
            this.handleSearchButton
        }
    }

    handleSearchInput(e) {
        const { dispatch } = this.props;
        dispatch(updateMovie(e.target.value));
    }

    handleSearchButton(e) {
        const { dispatch, movieName, movieData } = this.props;
        dispatch(getMovieData(movieName, movieData));
    }

    render() {
        return (
            <div className='movie-search-container'>
                <h1 className='title'>Get Movie Information</h1>
                <label>Enter Movie Name:</label>
                <div className='search-bar'>
                    <input placeholder='Star Wars' onChange={this.handleSearchInput} onKeyDown={this.enter} />
                    <button onClick={this.handleSearchButton}>Search</button>
                </div>
            </div>
        )
    }
}

export default MovieSearch;