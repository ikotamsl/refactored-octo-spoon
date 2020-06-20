"use strict"

let numberOfFilms = 0;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) === true) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

function countTest(obj) {
    if (obj.count < 10)
        console.log("Смотри больше, сука");
    if (obj.count >= 10 && obj.count < 30)
        console.log("Не, ну нормально");
    if (obj.count >= 30)
        console.log("Найди себе уже бабу");
}

function showMyFilms(hidden) {
    if  (!hidden)
        console.log(personalMovieDB);
}

// function writeYourGenres () {
//     for (let i = 1; i )
// }

function filmsWatched() {
    for (let i = 0; i < 2; i++) {
        let film = prompt("Какой фильм вы недавно посмотрели?");
        let rate = prompt("На сколько оцените его?");
        if (film != null && rate != null && film.length !== 0 && film.length <= 50) {
            personalMovieDB.movies[film] = rate;
        } else {
            console.log('Вы дибил');
            i--;
        }
    }
}

start();
countTest(personalMovieDB);
filmsWatched();
showMyFilms(personalMovieDB.private);