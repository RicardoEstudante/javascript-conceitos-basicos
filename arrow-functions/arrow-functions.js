const array = [1,2,3];

const arrayModified = array.map(mapear);

console.table(arrayModified);

function mapear(value) {
    return value * 2;
}

// formato com arrows functions
const array2 = [2,3,4];

const arrayModified2 = array2.map((value2)=> {
    return value2 * 2;
});

console.table(arrayModified2);

// arrow funcitions com 1 unico parentes
const array3 = [3,4,5];

const arrayModified3 = array3.map(value3=> {
    return value3 * 2;
});
console.table(arrayModified3);

//com uma unica linha
const array4 = [4,5,6];

const arrayModified4 = array4.map(value4=> value4 * 2);
console.table(arrayModified4);




  