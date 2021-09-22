'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
let counter = 0;
while (counter<2) {
  const a = prompt("Один из последних просмотренных фильмов?", "1"),
        b = prompt("Насколько оцените его?", "1");
  if(a!='' && a!=null && b!='' && b!=null && a.length<=50){
    personalMovieDB.movies[a]=b;
  }
  else{
    alert("Введены неправильные данные, попробуйте ещё раз!");
    continue;
  }
  counter++;
}

if(personalMovieDB.count<10)
{
  document.write('Мало!');
}
else if(personalMovieDB.count>=10 && personalMovieDB.count<=30)
{
  document.write('Classic!');
}
else if(personalMovieDB.count>30)
{
  document.write('Good!');
}
else{
  document.write('Something wrong!');
}