import Cast from "../models/Cast.js";

const getAll = () => Cast.find();

const getAllWithout = (casts) => {
    const castIds = casts.map(cast => cast.cast._id);

    return Cast.find({ _id: { $nin: castIds } });
};
// const getAllWithout = (castIds) => Cast.find().nin('_id', castIds);

const create = (data) => Cast.create(data);

export default {
    create,
    getAll,
    getAllWithout
};