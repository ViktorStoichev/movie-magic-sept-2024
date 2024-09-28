import Movie from "../models/Movie.js";

// TODO: Refactor using database filtration
const getAll = async (filter = {}) => {
    let movies = await Movie.find().lean();

    if (filter.search) {
        movies = movies.filter(movie => movie.title.toLowerCase().startsWith(filter.search.toLowerCase()));
    }

    if (filter.genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    if (filter.year) {
        movies = movies.filter(movie => movie.year === filter.year);
    }

    return movies;
}

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).populate('casts');

const attach = (movieId, castId) => {
    // First method
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    // Second method
    return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
}

export default {
    getAll,
    create,
    getOne,
    attach
}