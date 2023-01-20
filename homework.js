//////////////////////
// Day 3 JavaScript //
//////////////////////
console.log('JS Day 3 Exercises');
console.log('********************')
//_________________________________//

///////////////////////////
// Exercise 1 - Closures // 
///////////////////////////
console.log('Exercise 1')
console.log('`````````````````````')
// Update the createAdder function below so that
// the below code works as intended

function createAdder(a){
    var adder = function(b){
        return a + b;
        }
    return adder;
};

const addEight = createAdder(8);

console.log('addEight(10)'); // 18
console.log(addEight(10)); 

console.log('addEight(17)'); // 25
console.log(addEight(17)); 

console.log('addEight(50)'); // 58
console.log(addEight(50)); 

console.log('addEight(100)'); // 108
console.log(addEight(100)); 

console.log('addEight(92)'); // 100
console.log(addEight(92)); 

console.log('`````````````````````')

const addThree = createAdder(3);

console.log('addThree(10)'); // 13
console.log(addThree(10));
console.log('addThree(17)'); // 20
console.log(addThree(17));
console.log('addThree(50)'); // 53
console.log(addThree(50));
console.log('addThree(100)'); // 103
console.log(addThree(100));
console.log('addThree(92)'); // 95
console.log(addThree(92));

//_________________________________//

///////////////////////////
// Exercise 2 - Promises //
///////////////////////////
console.log('Exercise 2')
console.log('`````````````````````')

// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
};

async function printMovieInfo (movieName){
    try {
        var movie = await getMovieInfo(movieName);
        console.log(`${movie.director} directed ${movie.title}. An epic tale of ${movie.description} that lasts ${movie.runtime} minutes.`)
        } catch (err) {
            console.warn(`*Warning* Due to its short length, ${movieName} is inaccessible`);
        
    }
};

// Example 1
console.log('INPUT')
console.log('```````')
console.log('printMovieInfo("Indiana Jones and the Dark Knight")');
console.log('  ')
console.log('OUTPUT')
console.log('```````')

printMovieInfo('Indiana Jones and the Dark Knight');
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
printMovieInfo('ET');
// Output: *Warning* ET cannot be accessed because it it too short