let programação = ['Heloa', 'Maria Rafaela', 'Maria Eduarda', 'Diego', 'João Victor', 'Gabriel', 'Luana', 'Thauane', 'Aline', 'Lucas'];

let segurança = ['Leonardo', 'Miguel', 'João Paulo', 'Rafael'];

//Tirando o Rafael
segurança.pop();

//Adicionando o Rafael
programação.push('Rafael');

console.log('Time de programação:', programação);
console.log('#############################')
console.log('Time de segurança:', segurança);

let funcionarios = programação.concat(segurança);

console.log(funcionarios);
