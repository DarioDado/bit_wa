import * as data from './data.js';
import * as ui from './ui.js';


const setEventListeners = () => {
    const createMovieButton = document.querySelector("#create-movie"),
        createProgramButton = document.querySelector("#create-program"),
        addMovieToProgramButton = document.querySelector("#add-movie");

    createMovieButton.addEventListener("click", createMovieHandler);
    createProgramButton.addEventListener("click", createProgramHandler);
    addMovieToProgramButton.addEventListener("click", addMovieToProgramHandler);
}


const createMovieHandler = () => {
    const movieErrorElement = document.querySelector("#movie-error");
    //collect data
    const { title, length, genre } = ui.collectMovieData();
    //validate data
    if (!data.isValidateMovie(title, length, genre)) {
        movieErrorElement.textContent = "Invalid input!";
        return;
    }
    //create Movie and add it to Festival.listOfAllMovies
    const createdMovie = data.createMovie(title, length, genre);
    const index = data.addMovie(createdMovie);
    //update ui
    ui.updateMovieList(createdMovie, index);
    ui.clearInputs();
}



const createProgramHandler = () => {
    const programErrorElement = document.querySelector("#program-error");
    //collect form data
    const { date } = ui.collectProgramData();
    //validate data
    if (!data.isValidProgram(date)) {
        programErrorElement.textContent = "Invalid input!";
        return;
    }
    //create Program and add it to Festival.ListOfAllPrograms
    const createdProgram = data.createProgram(date);
    const index = data.addProgram(createdProgram);
    //update ui
    ui.updateProgramList(createdProgram, index);
}



const addMovieToProgramHandler = () => {
    //collect data
    const { movieIndex, programIndex } = ui.collectAddMovieFormData();
    //add Movie to Program
    const { program, oldProgramData } = data.addMovieToProgram(movieIndex, programIndex);
    //update ui data
    ui.updateProgramData(program, oldProgramData);
}

export const initHomepage = () => {
    setEventListeners();
}

