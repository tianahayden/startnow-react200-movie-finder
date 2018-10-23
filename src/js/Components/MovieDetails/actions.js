import axios from 'axios';

export const getMovieDetails = (value) => {
    return {
        type: 'GET_MOVIE_DETAILS',
        payload: axios.get('/api/details?movie=' + value)
            .then(({ data }) => {
                console.log(data);
                return data;
            }
            )
    }
};