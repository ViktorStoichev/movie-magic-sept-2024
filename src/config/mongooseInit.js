import { connect } from "mongoose";

const databaseUrl = 'mongodb://localhost:27017/magic-movies';

export default async function mongooseInit() {
    try {
        await connect(databaseUrl);
        console.log('Successfully connected to database!');
    } catch (error) {
        console.log('Cannot connect to database!' + error.message);
    }
}