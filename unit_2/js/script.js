// task 1 Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7,
    b = 9;

console.log(a * b);

// task 2 Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7,
    d = 9;

console.log(a / d);

// task 3 Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
let e = 3,
    f = 5,
    div3 = document.querySelector('.three');

div3.innerHTML = e + f;

//Task 4 Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
let e1 = '3',
    f1 = 5,
    div4 = document.querySelector('.four');

div4.innerHTML = e1 + f1;

//Task 5 Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
let e2 = 3,
    f2 = 0,
    div5 = document.querySelector('.five');

div5.innerHTML = e2 / f2;

//Task 6 Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
let e3 = 3,
    f3 = 'Hello',
    div6 = document.querySelector('.six');

div6.innerHTML = e3 + f3;

//Task 7 Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
let e4 = 3,
    f4 = 'Hello',
    div7 = document.querySelector('.seven');

div7.innerHTML = e4 * f4;

//Task 8 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let input8 = document.querySelector('input'),
    button8 = document.querySelector('button');

button8.onclick = function () {
    console.log(input8.value);
}

//Task 9 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let input9 = document.querySelector('.input-nine'),
    button9 = document.querySelector('.button-nine'),
    div9 = document.querySelector('.nine');

button9.onclick = function () {
    div9.innerHTML = `<span>${input9.value}</span>`;
    input9.value = '';
}

//Task 10 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let input10 = document.querySelector('.input-ten'),
    button10 = document.querySelector('.button-ten'),
    div10 = document.querySelector('.ten');

button10.onclick = function () {
    div10.innerHTML = `<span>${input10.value * 10}<span>`;
}

//Task 11 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
let input11 = document.querySelector('.input-eleven'),
    button11 = document.querySelector('.button-eleven'),
    div11 = document.querySelector('.eleven');

button11.onclick = function () {
    div11.innerHTML = `<span>${input11.value + 10}</span>`
}

//Task 12 Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let inputTwelve1 = document.querySelector('.input-twelve-1'),
    inputTwelve2 = document.querySelector('.input-twelve-2'),
    button12 = document.querySelector('.button-twelve'),
    div12 = document.querySelector('.twelve');

button12.onclick = function () {
    div12.innerHTML = `<span>Hello ${inputTwelve1.value + ' ' + inputTwelve2.value}</span>`
}

//Task 13 Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
let inputThirteen1 = document.querySelector('.input-thirteen-1'),
    inputThirteen2 = document.querySelector('.input-thirteen-2'),
    button13 = document.querySelector('.button-thirteen'),
    div13 = document.querySelector('.thirteen');

button13.onclick = function () {
    div13.innerHTML = `<span>${(+inputThirteen1.value) + (+inputThirteen2.value)}</span>`;
}

//Task 14 Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
document.querySelector('.input-fourteen').value = 'Hello';

//Task 15 Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
let y = document.querySelector('.input-fifteen');
y.style.border = '2px solid red';

//Task 16 Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
let inputSixteen1 = document.querySelector('.input-sixteen-1'),
    inputSixteen2 = document.querySelector('.input-sixteen-2'),
    button16 = document.querySelector('.button-sixteen'),
    div16 = document.querySelector('.sixteen');

button16.onclick = function () {
    div16.innerHTML = `<span>${(+inputSixteen1.value) + (+inputSixteen2.value)}</span>`;
}

//Task 17 Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let input17 = document.querySelector('.input-seventeen'),
    button17 = document.querySelector('.button-seventeen'),
    div17 = document.querySelector('.seventeen'),
    t;

button17.onclick = function () {
    t = input17.value;
    t = parseInt(t);
    console.log(t);
}

//Task 18 Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод
let input18 = document.querySelector('.input-eighteen'),
    button18 = document.querySelector('.button-eighteen'),
    div18 = document.querySelector('.eighteen');
// t1;

button18.onclick = function () {
    t = parseFloat(input18.value);
    console.log(t); //console.log(t1); переменная t была создана в Task 17, но это не мешает нам испольщовать переменную t так как она находится в данном документе.
}

//Task 19 Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let inputNineteen1 = document.querySelector('.input-nineteen-1'),
    inputNineteen2 = document.querySelector('.input-nineteen-2'),
    button19 = document.querySelector('.button-nineteen'),
    div19 = document.querySelector('.nineteen');

button19.onclick = function () {
    div19.innerHTML = `<span>${parseInt(inputNineteen1.value) + parseInt(inputNineteen2.value)}</span>`;
}

//Task 20 Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let inputTwenty1 = document.querySelector('.input-twenty-1'),
    inputTwenty2 = document.querySelector('.input-twenty-2'),
    inputTwenty3 = document.querySelector('.input-twenty-3'),
    inputTwenty4 = document.querySelector('.input-twenty-4'),
    button20 = document.querySelector('.button-twenty'),
    div20 = document.querySelector('.twenty'),
    name,
    surname,
    age,
    profession;

button20.onclick = function () {
    name = inputTwenty1.value;
    surname = inputTwenty2.value;
    age = inputTwenty3.value;
    profession = inputTwenty4.value;

    div20.innerHTML = `<span>Уважаемый ${name + ' ' + surname}, вам ${age} лет, по професси вы ${profession}.</span>`;
}