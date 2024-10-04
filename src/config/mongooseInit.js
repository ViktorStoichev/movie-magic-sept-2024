import { connect } from "mongoose";

const databaseUrl = 'mongodb://localhost:27017/magic-movies';

export default async function mongooseInit() {
    try {
        const url = process.env.DB_URL || databaseUrl
        await connect(url, {dbName: 'movie-magic'});
        console.log('Successfully connected to database!' + url);
    } catch (error) {
        console.log('Cannot connect to database!' + error.message);
    }
}