
let number = prompt('Введите число')
number = parseFloat(number) 
if(number >= 0 ) {
console.log(number)
}
else if (number < 0) {
console.log(-number)
}
else {
alert('Вы ввели не число')
}