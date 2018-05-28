const Program = require('../entities/Program');
const Genre = require('../entities/Genre');
const Movie = require('../entities/Movie');

const createMovie = (title, genreString, length) => {
    const genre = new Genre(genreString);
    return new Movie(title, genre, length);
}

const createProgram = (date) => {
    return new Program(date);
}

module.exports = {createMovie, createProgram};