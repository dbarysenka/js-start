"use sctrict";

// alert('Hello world!');


// const result = confirm("Are you here&");
// console.log(result);

// const answer =  prompt('are you ok&', '18', '13');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt("name", "");
// answers[1] = prompt("family name", "");
// answers[2] = prompt("age", "");

// document.write(answers)

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user  = 'Ivan';

// alert(`Shalom, ${user}`);

// console.log(4 + " - object");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(--incr, ++decr);

// console.log(5%2);

// console.log(2 + 2 * 2 === 8);



// const isDenis = false,
//         isSa = false;

// console.log(isDenis || !isSa);

// 1 exercise 

const numberOfFilms =  prompt('How many films did you watched?', '');

// 2 exercise 

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3 exercise

const lastFilm =  prompt('last film that you watched?', ''),
        score =  prompt('score for this film?', '');

personaMovieDB.movies[lastFilm] = score;

console.log(personaMovieDB);