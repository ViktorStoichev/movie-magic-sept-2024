import fs from 'fs/promises';
import path from 'path';

async function getDatabase() {
    const databasePath = path.resolve('./src/database.json')
    const jsonResult = await fs.readFile(databasePath, {encoding: 'utf-8'});
    const data = JSON.parse(jsonResult);

    return data;
}
async function getMovies() {
    const database = await getDatabase();
    return database.movies;
}

export default {
    getMovies,
}