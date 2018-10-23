import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function mapStateToProps(store) {
    return {
        movieName: store.movie.movieName,
        movieData: store.movie.movieData
    }
}

export default connect(mapStateToProps)(MovieSearch);