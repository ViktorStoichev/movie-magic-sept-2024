import movieData from "../data/movie-data.js";

const getAll = () => movieData.getMovies();

export default {
    getAll,
}