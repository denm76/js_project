'use strict';

let numberOfFilms; 

function start(){
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
  {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");
  }
}

//start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms(){
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
}

//rememberMyFilms();

function detectPersonalLevel()
{
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
}

//detectPersonalLevel();

function showMyDB(flag){
  if(!flag){
    console.log(personalMovieDB);
  }
}

function writeYourGenres(){
  for(let i=0; i<3; i++){ 
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
  }
}

//showMyDB(personalMovieDB.privat);
//writeYourGenres();

const obj = {
  'name':'Jhon',
  'surname':'Down',
  colors:{
    bg:'yellow',
    title:'black'
  },
   showObj: function (){
    console.log(obj);
  }
};

for(let key in obj){
  console.log(`Property ${key} has value ${obj[key]}`);
}

console.log(Object.keys(obj));//На выходе массив ключей объекта
console.log(Object.keys(obj).length);
obj.showObj();

const{ bg, title} = obj.colors;//Деструктуризация объекта
console.log(title);

