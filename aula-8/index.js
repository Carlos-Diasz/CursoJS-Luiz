const name = 'Carlos';
const surName = 'Dias';
const yearsOld = 17;
const weight =  68;
const height = 1.90;

let imc = (weight / (height**2));
imc = imc.toFixed(2);
let yearOfBirth = (2024 - yearsOld);

console.log(`${name} ${surName} tem ${yearsOld} anos, pesa ${weight} Kg tem ${height} de altura e seu IMC é de ${imc}
${name} ${surName} nasceu em ${yearOfBirth}`);