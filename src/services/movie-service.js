import movieData from "../data/movie-data.js";
import uniqid from 'uniqid';

const getAll = () => movieData.getAll();

const create = (data) => {
    data.id = uniqid();
    return movieData.create(data);
}

export default {
    getAll,
    create
}