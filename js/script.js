'use strict';






const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start : function (){
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "1");
    while (this.count == '' || this.count == null || isNaN(this.count))
    {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "1");
    }
  },
  rememberMyFilms : function (){
    let counter = 0;
    while (counter<2) {
      const a = prompt("Один из последних просмотренных фильмов?", "1"),
            b = prompt("Насколько оцените его?", "1");
      if(a!='' && a!=null && b!='' && b!=null && a.length<=50){
        this.movies[a]=b;
      }
      else{
        alert("Введены неправильные данные, попробуйте ещё раз!");
        continue;
      }
    counter++;
  }
  },
  detectPersonalLevel : function ()
    {
        if(this.count<10)
        {
          document.write('Мало!');
        }
        else if(this.count>=10 && this.count<=30)
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
    },
    showMyDB : function (flag){
      if(!flag){
        console.log('єто',this);
      }
    },
    writeYourGenres : function (){
      for(let i=0; i<3; i++){ 
        let choice = prompt(`Ваш любимый жанр под номером ${i+1}`);
        if(choice != null && choice != '' && choice != ' '){
          this.genres[i] = choice;
        }
        else{
          console.log('Неправильные данные!');
          i--;
        }
          
      }
      this.genres.forEach((element, index)=>{
          console.log(`Любимый жанр № ${index+1} это ${element}`);
      });
    },
    toggleVisibleMyDB : function(){
      this.privat = !this.privat;  
    }

};


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();

