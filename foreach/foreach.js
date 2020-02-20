let array = [1,2,3,4,5,6,7,8,9];

for (let number of array) {
    // console.log(number[array]);
}

array.forEach((num , index) => {
    return array[index] = num;
});

let doubled = array.map(num => {
    return num * 2;
});

//percorre vetores
for (let i = 0; i <  array.length -1; i++) {
    console.log(array[i]);
}

let array1 = [10,20,30,40,50,60,70,80,90];
for(let i in array){
    console.log(array1);
}
