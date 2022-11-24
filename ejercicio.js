const fibonacci = (num) => {
  array = [0, 1];
  for (let i = 1; i <= num; i++) {
    const suma = array[i] + array[i - 1];
    array.push(suma);
  }
  return array;
};

let resultado = fibonacci(10);
console.log(resultado);
