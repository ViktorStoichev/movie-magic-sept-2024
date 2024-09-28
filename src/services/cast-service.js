import Cast from "../models/Cast.js";

const getAll = () => Cast.find();

const create = (data) => Cast.create(data);

export default {
    create,
    getAll
};