'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "1"),
      b = prompt("Насколько оцените его?", "1"),
      c = prompt("Один из последних просмотренных фильмов?", "1"),
      d = prompt("Насколько оцените его?", "1");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

