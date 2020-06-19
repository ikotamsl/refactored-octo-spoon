"use strict"

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let film1 = prompt("Какой фильм вы недавно посмотрели?"),
    rate1 = prompt("На сколько оцените его?"),
    film2 = prompt("Какой фильм вы недавно посмотрели?"),
    rate2 = prompt("На сколько оцените его?");

personalMovieDB.movies[film1] = rate1;
personalMovieDB.movies[film2] = rate2;