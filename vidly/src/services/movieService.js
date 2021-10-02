import http from './httpService';
import {getGenre} from './genreService';

const apiEndPoint =  '/movies'

export function getMovies() {
    return http.get(apiEndPoint);
}

export function getMovie(id) {
    return http.get(apiEndPoint + '/' + id);
}

export function deleteMovie(id) {
    return http.delete(apiEndPoint+ '/' + id);
}

export function saveMovie(movie) {
    if(movie._id)
    {
        const body = {...movie}
        delete body._id;
        return http.put(apiEndPoint + '/' + movie._id, body);
    }
    
    return http.post(apiEndPoint, movie);
}
