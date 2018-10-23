import { combineReducers } from 'redux';
import MovieSearchReducer from './Components/MovieSearch/reducer';
import MovieDetailsReducer from './Components/MovieDetails/reducer';

const rootReducer = combineReducers({
    movie: MovieSearchReducer,
    movieDetails: MovieDetailsReducer
});

export default rootReducer;
