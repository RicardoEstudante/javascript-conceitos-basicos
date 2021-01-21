// callback é uma função que é passada para ser executada após
// após um certo evento;

//função normal.
const array = [1,2,3];

const arrayModified = array.map(mapear);

console.log(arrayModified);

function mapear(value) {
    return value * 2;
}

// formato com Callback.
const array2 = [2,4,6];

const arrayModified2 = array2.map(function(value2) {
    return value2 * 2;
});

console.log(arrayModified2);
