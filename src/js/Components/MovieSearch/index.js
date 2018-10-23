import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function mapStateToProps(store) {
    return {
        movieName: store.movie.movieName,
        movieData: store.movie.movieData,
        showMovieData: store.movie.showMovieData
    }
}

export default connect(mapStateToProps)(MovieSearch);