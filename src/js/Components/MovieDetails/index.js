import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';

function mapStateToProps(store) {
    return {
        movieDetails: store.movieDetails.movieDetails
    }
}

export default connect(mapStateToProps)(MovieDetails);