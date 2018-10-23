import { combineReducers } from 'redux';
import MovieSearchReducer from './Components/MovieSearch/reducer';

const rootReducer = combineReducers({
    movie: MovieSearchReducer
});

export default rootReducer;
