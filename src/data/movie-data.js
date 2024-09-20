import fs from 'fs/promises';
import path from 'path';
const databasePath = path.resolve('./src/database.json');

async function getDatabase() {
    const jsonResult = await fs.readFile(databasePath, {encoding: 'utf-8'});
    const data = JSON.parse(jsonResult);

    return data;
}

function saveDatabase(data) {
    return fs.writeFile(databasePath, JSON.stringify(data, {}, 2));
}

async function getAll() {
    const database = await getDatabase();
    return database.movies;
}

async function create(movieData) {
    const database = await getDatabase();

    database.movies.push(movieData);

    return saveDatabase(database);
}

export default {
    getAll,
    create
}