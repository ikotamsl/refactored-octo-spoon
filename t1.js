"use strict"

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function countTest(obj) {
    if (obj.count < 10)
        console.log("Смотри больше, сука");
    if (obj.count >= 10 && obj.count < 30)
        console.log("Не, ну нормально");
    if (obj.count >= 30)
        console.log("Найди себе уже бабу");
}

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

countTest(personalMovieDB);