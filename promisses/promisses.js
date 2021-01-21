// Uma Promise tem dois parâmetros (resolve, reject) onde o primeiro é chamado se a promessa retornou sucesso, e o segundo se rejeitou 

const isTrue = true; 

let promise = new Promise((resolve, reject) => { 
    if (isTrue) {
        resolve(num + 1);
    }else {
        reject(new AppError("é false"))
    }
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("I have completed"), 2000);
});
