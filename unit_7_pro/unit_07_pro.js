// Task 1
// Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.


function t1() {
    document.querySelector('.out-1').textContent = 'Vadim';
}

document.querySelector('.b-1').onclick = t1;


// Task 2.

//Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное ей в консоль. Запустите функцию и передайте в качестве имени Sergey.


function t2(name = 'Ivan') {
    return name;
}

document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2('Sergey');
}

// Task 3.
// Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль. Запустите выполнение функции. Убедитесь, что она работает. Теперь создайте кнопку и добавьте на нее событие onclick которое вызывает данную функцию с параметром.

// Если вы напишите, подобный синтаксис elem.onclick = myFunc(11), то увидите, что данная функция - выполняется сразу при загрузке страницы! Действительно, ведь мы поставили скобки. Как передать параметр и не запустить функцию сразу? Довольно хитро:
function myFunc(params) {
    document.querySelector('.out-3').textContent = params * 10;

}

document.querySelector('.b-3').onclick = () => {
    myFunc(22);
}

// Task 4
// Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.

function t4(params) {
    return params;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.b-4').style.backgroundColor = t4('red');
}


// Task 5
// Создайте функцию, которая возвращает ваше имя. Имя вводится с input

const i5 = document.querySelector('.i-5');

function t5(params) {
    return params.value;
}

document.querySelector('.b-5').onclick = () => {
    document.querySelector('.out-5').textContent = t5(i5);
}

// Task 6
// Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.

function t6(a, b) {
    if (a >= b) {
        return a;
    }
    else {
        return b;
    }
}

document.querySelector('.b-6').onclick = () => {
    document.querySelector('.out-6').textContent = t6(5, 10);
}


// Task 7
// Создайте функцию, которая принимает год рождения и возвращает ваш возраст. Текущий год задавать как 2019.
function t7(p1, p2) {
    return `${p1 - p2} лет`;
}

document.querySelector('.b-7').onclick = () => {
    document.querySelector('.out-7').textContent = t7(2019, 1989);
}


// Task 8
// Создайте функцию, которая возвращает случайное число от 1 до 10. По случайным числам читаем все здесь и задаем вопросы в чате.

function t8(min, max) {
    let rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

document.querySelector('.b-8').onclick = () => {
    document.querySelector('.out-8').textContent = t8(1, 10);
}

// Task 11
// Создайте функцию f11, которая возвращает число 5. Создайте функцию которая принимает 2 параметра и перемножает их между собой. В качестве первого параметра передайте f11().

function f11() {

    return 5;
}

function fTop(a, b) {

    return a * b;
}

document.querySelector('.b-11').onclick = () => {
    document.querySelector('.out-11').textContent = fTop(f11(), 5);
}

// Task 12
// Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное в него значение преобразованное в число.

let i12 = document.querySelector('.i-12');

function tuNum(params) {
    console.log(+params.value);
    return +params.value;
}

document.querySelector('.b-12').onclick = () => {
    document.querySelector('.out-12').textContent = tuNum(i12);
}

// Task 13
// Создайте функцию emptyInput - которая принимает в качестве параметра input, удаляет все пробелы введенные до и после значения (trim), и проверяет - если результат равен пустой строке - то возвращает false, если нет - то сам результат с обрезанными пробелами.

function f13(params) {

    return params.value.trim();
}

document.querySelector('.b-13').onclick = () => {
    document.querySelector('.out-13').textContent = f13(document.querySelector('.i-13'));
}

// 14 

function f14(a, b, c) {
    a = Math.floor(0 + Math.random() * (255 + 1 - 0));
    b = Math.floor(0 + Math.random() * (255 + 1 - 0));
    c = Math.floor(0 + Math.random() * (255 + 1 - 0));

    console.log(`rgb(${a}, ${b}, ${c})`);
    return `rgb(${a}, ${b}, ${c})`;
}



document.querySelector('.b-14').onclick = () => {
    document.querySelector('.i-14').value = f14();
    document.querySelector('.out-14').style.backgroundColor = f14();
}