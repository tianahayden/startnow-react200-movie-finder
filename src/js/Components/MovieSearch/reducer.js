const defaultState = {
    movieName: '',
    movieData: [],
    showMovieData: false,
};

export default function MovieSearchReducer(state = defaultState, action) {
    const { payload, type } = action;

    switch (type) {
        case 'UPDATE_MOVIE': {
            return {
                ...state,
                movieName: payload
            }
        }
        case 'GET_MOVIE_DATA_FULFILLED': {
            return {
                ...state,
                movieData: payload,
                showMovieData: true
            }
        }
        default: {
            return state
        }
    }
}