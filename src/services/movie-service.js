import Movie from "../models/Movie.js";

// TODO: Refactor using database filtration
const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        moviesQuery.find({ title: { $regex: filter.search, $options: 'i' }});
    }

    if (filter.genre) {
        moviesQuery.find({ genre: filter.genre.toLowerCase() });
    }

    if (filter.year) {
        console.log(moviesQuery.year);
        console.log(filter.year);
        
        moviesQuery.find({ year: filter.year });
        // moviesQuery.where('year').equals(filter.year);
    }

    return moviesQuery;
}

const create = (movie, ownerId) => Movie.create({...movie, owner: ownerId});

const getOne = (movieId) => Movie.findById(movieId).populate('casts.cast');

const attach = (movieId, castId, character) => {
    // First method
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    // Second method
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: { cast: castId, character } } });
}

export default {
    getAll,
    create,
    getOne,
    attach
}