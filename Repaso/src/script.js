// 1.-
sessionStorage.setItem("cool_secret", 123);

/*
Respuesta correcta: Cuando el usuario cierra la pestaña.
Los datos almacenados en sessionStorage se eliminan después de cerrar la pestaña.
Si se usó localStorage, los datos habrían estado allí siempre, a menos que por ejemplo localStorage.clear() sea invocado.
*/

// 2.-
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

/*

*/

// 3.-
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

/*

*/

// 4.-
<div onclick="console.log('div')">
    <p onclick="console.log('p')">
        Click here!
  </p>
</div>

/*

*/

// 5.-
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;

/*

*/

// 6.-
console.log(typeof typeof 1);

/*

*/

// 7.-
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

/*

*/

// 8.-
(() => {
    let x, y;
    try {
        throw new Error();
    } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

/*

*/

// 9.-
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

/*

*/