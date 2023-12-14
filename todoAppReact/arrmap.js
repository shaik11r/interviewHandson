const array = [1, 2, 3, 4, 5];

const square = (n) => {
  return n * n;
};
const squareofallArray = (square) => {
  for (let i = 0; i < array.length; i++) {
    console.log(square(array[i]));
  }
};
squareofallArray(square);
console.log(array.map(square));
console.log(
  array.map((n) => {
    return n * n;
  })
);

const filterarray = array.filter((element) => {
  return element < 5;
});
console.log(filterarray);

const reducedArray = array.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(reducedArray);

let arrCelsius = [0, -40, 200];
const arrFarenhit = arrCelsius.map((val) => {
  return (val * 9) / 5 + 32;
});
console.log(arrFarenhit);

const arrCelsius2 = [0, 100];
const arrofObjects = arrCelsius2.map((val) => {
  return {
    c: val,
    f: (val * 9) / 5 + 32,
  };
});
console.log(arrofObjects);
