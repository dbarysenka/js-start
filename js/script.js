"use sctrict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films did you watched?', '');
    
    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watched?', '');
    }
}

// start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){

    for (let i = 0; i < 2; i++) {
        const lastFilm =  prompt('last film that you watched?', ''),
                score =  prompt('score for this film?', '');
                
        if (lastFilm != null && score != null && lastFilm != '' && lastFilm.length < 50) {
            personaMovieDB.movies[lastFilm] = score;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
             
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        console.log('too little');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
        console.log('Sample watcher');
    } else if (personaMovieDB.count >= 30) {
        console.log('Movie licker');
    } else {
        console.log('errro');
    }

}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personaMovieDB);

    }
}

showMyDB(personaMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personaMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}`);
    }
}

writeYourGenres();