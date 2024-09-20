import movieData from "../data/movie-data.js";
import uniqid from 'uniqid';

const getAll = () => movieData.getAll();

const create = (data) => {
    data.id = uniqid();
    return movieData.create(data);
}

const getOne = async (movieId) => {
    const movies = await movieData.getAll();

    const resultMovie = movies.find(movie => movie.id == movieId);

    return resultMovie;
}

export default {
    getAll,
    create,
    getOne
}