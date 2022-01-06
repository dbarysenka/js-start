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

if (personaMovieDB.count < 10) {
    console.log('too little');
} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
    console.log('Sample watcher');
} else if (personaMovieDB.count >= 30) {
    console.log('Movie licker');
} else {
    console.log('errro');
}

console.log(personaMovieDB);

// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('error');
// }

// const num = 51;
// if (num<49) {
//     console.log("error");
// } else if (num>100) {
//     console.log("Too much");
// } else {
//     console.log("Ok!!!");
// }

// (num === 50) ? console.log("ok") : console.log('Error');


// const num = 53;
// switch (num) {
//     case 49:
//         console.log('Error');
//         break;
//     case 51:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Good');
//         break;
//     default:
//         console.log('Not now');
//         break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

