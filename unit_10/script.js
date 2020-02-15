// task 1 --------------------
let arrT1 = ['Vadim', 'Aleks', 30, true, 21, 'Pavel', false, 'Home'];

function f1(a) {
    console.log(a);
}

document.querySelector('.task-1').onclick = () => {
    f1(arrT1);
}

// task 2 --------------------
const arrT2 = ['Vadim', 'Aleks', 30, true, 21, 'Pavel', false, 'Home'];
let elem_t2 = document.createElement('div');

function f2(a, out) {
    elem_t2.innerHTML = a;

    out.after(elem_t2);
}

document.querySelector('.task-2').onclick = function () {
    f2(arrT2, this);
}

// task 3 --------------------
const a_t3 = [2, 'hello', 17, 34, 'privet'];
let elem_t3 = document.createElement('div');

function f3(a, out) {
    elem_t3.innerHTML = `${a.length}`;

    out.after(elem_t3);
}

document.querySelector('.task-3').onclick = function () {
    f3(a_t3, this);
}



// task 4 --------------------
const a_t4 = [2, 'hello', 17, 34, 'privet'];
let elem_t4 = document.createElement('div');

function f4(a, out) {
    console.log(`${a[0]} ${a[3]}`);
    elem_t4.innerHTML = `<span>${a[8]}</span>`;

    out.after(elem_t4);
}

document.querySelector('.task-4').onclick = function () {
    f4(a_t4, this);
}

// task 5 --------------------
const a_t5 = [2, 'hello', 17, 34, 'privet'];
let elem_t5 = document.createElement('div');

function f5(a, out) {
    elem_t5.textContent = `${a[0] + a[2] + a[3]}`;

    out.after(elem_t5);
}

document.querySelector('.task-5').onclick = function () {
    f5(a_t5, this);
}

// task 6 --------------------
const a_t6 = ['Вадим', 'рыба', `3 марта`];
let elem_t6 = document.createElement('div');

function f6(a, out) {
    elem_t6.textContent = a;

    out.after(elem_t6);
}

document.querySelector('.task-6').onclick = function () {
    f6(a_t6, this);
}

// task 7 --------------------
let b_t7 = ['one', 1, 2, 'two'],
    elem_t7 = document.createElement('div');

b_t7.push('hi', 'foo', 'bar');

function f7(a, out) {
    elem_t7.textContent = a;

    out.after(elem_t7);
}

document.querySelector('.task-7').onclick = function () {
    f7(b_t7, this);
}

// task 8 --------------------
let b_t8 = ['one', 1, 2, 'two'],
    elem_t8 = document.createElement('div');

b_t8.splice(-1, 0, 3.14); // от конца массива
b_t8.splice(4, 0, 17.6); // от начала массива
b_t8.splice(-1, 0, 5);

function f8(a, out) {
    elem_t8.innerHTML = `[${a}]<br> длинна массива: ${a.length}`;

    console.log(a);
    console.log(`длинна массива: ${a.length}`);
    out.after(elem_t8);
}

document.querySelector('.task-8').onclick = function () {
    f8(b_t8, this);
}

// task 9 --------------------
let arr_t9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    elem_t9 = document.createElement('div');

function f9(a, out) {
    elem_t9.innerHTML = `3 элемент = ${a[3]} <br> 7 элемент = ${a[7]}`;

    console.log(a);
    out.after(elem_t9);
}

document.querySelector('.task-9').onclick = function () {
    f9(arr_t9, this);
}

// task 10 --------------------
let arr_t10 = [],
    elem_t10 = document.createElement('div');

arr_t10[0] = `я`;
arr_t10[5] = `учу`;
arr_t10[9] = `JS`;

function f10(a, out) {
    elem_t10.innerHTML = `${a} <br>длинна массива: ${a.length}`;

    console.log(`${a} | длинна массива: ${a.length}`);
    out.after(elem_t10);
}

document.querySelector('.task-10').onclick = function () {
    f10(arr_t10, this);
}

// task 11 --------------------
const c_t11 = [77, 88, 99, 66];
let elem_t11 = document.createElement('div');

function f11(a, out) {
    elem_t11.innerHTML = `исходный ${a}`;

    let x = a[0];
    a[0] = a[2];
    a[2] = x;

    elem_t11.innerHTML += `<br>результат ${a}`;

    out.after(elem_t11);
}

document.querySelector('.task-11').onclick = function () {
    f11(c_t11, this);
}

// task 12 --------------------
let arr_t12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function f12(a) {
    let x = a[0];
    a[0] = a[a.length - 1];
    a[a.length - 1] = x;

    console.log(a);
}

document.querySelector('.task-12').onclick = () => {
    f12(arr_t12);
}

// task 13 --------------------
let d_t13 = ['y', 4, 22, 'o'],
    elem_t13 = document.createElement('div');

function f13(a, out) {
    let pushX = '';

    for (let i = 0; i < a.length; i++) {
        pushX += `${a[i]} `;
    }

    elem_t13.textContent = pushX;
    out.after(elem_t13);
}

document.querySelector('.task-13').onclick = function () {
    f13(d_t13, this);
}

// task 14 --------------------
let e_t14 = [1, 2, 3, 'hello', 66],
    button = document.querySelector('.task-14');

button.textContent += ` v1`;

elem_t14 = document.createElement('div');
elem_t14.style.display = "inline";
elem_t14.style.marginLeft = "20px";

function f14(a, out) {
    let pushX = '';

    for (let i = 0; i < a.length; i++) {
        pushX += `${a[i]} `;
    }

    elem_t14.textContent = `${pushX} (v1)`;
    out.after(elem_t14);
}

button.onclick = () => {
    f14(e_t14.reverse(), buttonV2);
}

// task 14 Другой спооб решения задачи
let buttonV2 = document.createElement('button');

buttonV2.classList.add('task-14-v2');
buttonV2.textContent = `button v2`;
buttonV2.style.marginLeft = "10px";
button.after(buttonV2);

function f14_v2(a, out) {
    let pushY = [],
        pushX = '',
        z = 0;

    for (let i = 0; i < a.length; i++) {
        pushY.push(a[a.length - ++z]);
    }

    for (let i = 0; i < a.length; i++) {
        a[i] = pushY[i];

        pushX += `${a[i]} `;
    }

    elem_t14.textContent = `${pushX} (v2)`;
    out.after(elem_t14);
}

document.querySelector('.task-14-v2').onclick = function () {
    f14_v2(e_t14, this);
}

// task 15 --------------------
let d_t15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78],
    elem_t15 = document.createElement('div');

function f15(a, out) {
    let pushX = '';

    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            pushX += `${a[i]} `;
        }
    }

    elem_t15.textContent = pushX;
    out.after(elem_t15);
}

document.querySelector('.task-15').onclick = function () {
    f15(d_t15, this);
}

// task 16 --------------------
let d_t16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78],
    elem_t16 = document.createElement('div'),
    a1 = [],
    a2 = [];

function f16(a, out) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            a1.push(a[i]);
        }
        else {
            a2.push(a[i]);
        }
    }

    elem_t16.innerHTML = `a1 = [${a1}]<br> a2 = [${a2}]`;
    out.after(elem_t16);

    a1.length = 0;
    a2.length = 0;
}

document.querySelector('.task-16').onclick = function () {
    f16(d_t16, this);
}

// task 17 --------------------
let e_t17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0],
    elem_t17 = document.createElement('div');

function f17(a, out) {
    let pushX = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] == 0) {
            pushX++;
        }
    }

    elem_t17.textContent = `всего ${pushX} элемента равных 0`;

    out.after(elem_t17);
}

document.querySelector('.task-17').onclick = function () {
    f17(e_t17, this);
}

// task 18 --------------------
let elem_t18 = document.createElement('div');

function f18(a, out) {
    let value = 0,
        index;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > value) {
            value = a[i];
            index = i;
        }
    }

    elem_t18.textContent = `индекс ${index}, значение ${value}`;

    out.after(elem_t18);
}

document.querySelector('.task-18').onclick = function () {
    f18(e_t17, this);
}

// task 19 --------------------
let f_t19 = [-3, 0, 45, 22, 123, -485, 98, 34],
    elem_t19 = document.createElement('div');

function f19(a, out) {
    let value = a[0],
        index;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > value) {
            value = a[i];
            index = i;
        }
    }

    elem_t19.textContent = `индекс ${index}, значение ${value}`;

    out.after(elem_t19);
}

document.querySelector('.task-19').onclick = function () {
    f19(f_t19, this);
}

// task 20 --------------------
let elem_t20 = document.createElement('div');

function f20(a, out) {
    let summ = 0;

    for (let i = 0; i < a.length; i++) {
        summ += a[i];
    }

    elem_t20.textContent = summ;

    out.after(elem_t20);
}

document.querySelector('.task-20').onclick = function () {
    f20(f_t19, this);
}