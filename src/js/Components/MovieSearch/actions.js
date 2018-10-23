import axios from 'axios';

export const updateMovie = (value) => {
    return {
        type: 'UPDATE_MOVIE',
        payload: value
    }
};

export const getMovieData = (value) => {
    return {
        type: 'GET_MOVIE_DATA',
        payload: axios.get('/api?movie=' + value)
            .then(({ data }) => {
                console.log(data);
                return data;
            }
            )
    }
};