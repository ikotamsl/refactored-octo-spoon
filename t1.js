"use strict";

let numberOfFilms = 0;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) === true) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    countTest: function (obj) {
        if (obj.count < 10)
            console.log("Смотри больше, сука");
        if (obj.count >= 10 && obj.count < 30)
            console.log("Не, ну нормально");
        if (obj.count >= 30)
            console.log("Найди себе уже бабу");
    },
    showMyFilms: function (hidden) {
        if  (!hidden)
            console.log(personalMovieDB);
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
                i--;
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
        })
    },

    filmsWatched: function () {
        for (let i = 0; i < 2; i++){
            let film = prompt("Какой фильм вы недавно посмотрели?");
            let rate = +prompt("На сколько оцените его?");
            if (film != null && rate != null && film.length !== 0 && film.length <= 50 && isNaN(rate) === true) {
                personalMovieDB.movies[film] = rate;
            } else {
                console.log('Вы дибил');
                i--;
            }
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.private = !personalMovieDB.private;
    }
};


personalMovieDB.start();
personalMovieDB.countTest(personalMovieDB);
personalMovieDB.filmsWatched();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyFilms(personalMovieDB.private);
personalMovieDB.writeYourGenres();
