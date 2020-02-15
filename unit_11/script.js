// task 1 --------------------
let arr1 = [];

let button_t1 = document.querySelector('.task-1'),
    input_t1 = document.createElement('input'),
    elem_t1 = document.createElement('div'),
    butt_pop = document.createElement('button'),
    butt_shift = document.createElement('button'),
    butt_unshift = document.createElement('button');

button_t1.classList.add('u-2_push');
button_t1.textContent = 'push';

butt_pop.textContent = 'pop';
butt_shift.textContent = 'shift';
butt_unshift.textContent = 'unshift';

input_t1.classList.add('u-1');
input_t1.setAttribute = 'type';
input_t1.type = 'text';
input_t1.setAttribute = 'placeholder';
input_t1.placeholder = 'новый элемент масcива';

elem_t1.classList.add('out-1');
elem_t1.style.marginTop = '10px';

button_t1.before(input_t1);
button_t1.after(butt_pop);
butt_pop.after(butt_shift);
butt_shift.after(butt_unshift)
butt_unshift.after(elem_t1);

function f1(arr, input, out) {
    if (input_t1.value.trim() != '') {
        arr.push(input.value);

        elem_t1.textContent = arr;
        input.value = '';
    }
    else {
        input.value = '';
    }
}

button_t1.onclick = () => {
    f1(arr1, input_t1);
}

butt_pop.onclick = () => {
    f2(arr1);
}

butt_shift.onclick = () => {
    f3(arr1);
}

butt_unshift.onclick = () => {
    f4(arr1, input_t1)
}

// task 2 --------------------
let button_t2 = document.querySelector('.task-2');

button_t2.classList.add('u2__pop');
button_t2.textContent = 'pop';

function f2(arr) {
    arr.pop();

    elem_t1.textContent = arr;
}

button_t2.onclick = () => {
    f2(arr1);
}

// task 3 --------------------
let button_t3 = document.querySelector('.task-3');

button_t3.classList.add('u-3__shift');
button_t3.textContent = 'shift';

function f3(arr) {
    arr.shift();

    elem_t1.textContent = arr;
}

button_t3.onclick = () => {
    f3(arr1);
}

// task 4 --------------------
let button_t4 = document.querySelector('.task-4');

button_t4.classList.add('u-4__unshift');
button_t4.textContent = 'ubshift';

function f4(arr, input) {
    if (input.value.trim() != '') {
        arr.unshift(input.value);

        elem_t1.textContent = arr;
        input.value = '';
    }
    else {
        input.value = '';
    }
}

button_t4.onclick = () => {
    f4(arr1, input_t1)
}

// task 5 --------------------
let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

let button_t5 = document.querySelector('.task-5'),
    input_t51 = document.createElement('input'),
    input_t52 = document.createElement('input'),
    elem_t5 = document.createElement('div');

button_t5.style.marginLeft = '10px';
button_t5.textContent = 'splice';

input_t51.setAttribute = 'type';
input_t51.type = 'number';
input_t51.setAttribute = 'placeholder';
input_t51.placeholder = 'индекс';
input_t51.style.width = '70px';

input_t52.setAttribute = 'type';
input_t52.type = 'number';
input_t52.setAttribute = 'placeholder';
input_t52.placeholder = 'колл.';
input_t52.style.width = '70px';
input_t52.style.marginLeft = '5px';

elem_t5.classList.add('out-5');
elem_t5.style.marginLeft = '20px';
elem_t5.style.display = 'inline';

button_t5.before(input_t51);
button_t5.before(input_t52);
button_t5.after(elem_t5);

function f5(arr, index, amount) {
    arr.splice(+index, +amount);

    elem_t5.textContent = `Результат: [${arr}]`;
}

button_t5.onclick = () => {
    f5(arr5, input_t51.value, input_t52.value);
}

// task 6 --------------------
let arr6 = [];

let button_t6 = document.querySelector('.task-6'),
    input_t6 = document.createElement('input'),
    elem_t6 = document.createElement('div');

button_t6.textContent = 'push';

input_t6.setAttribute = 'type';
input_t6.type = 'text';
input_t6.setAttribute = 'placeholder';
input_t6.placeholder = 'новый элемент';

elem_t6.style.display = 'inline';
elem_t6.style.marginLeft = '20px';

button_t6.before(input_t6);
button_t6.after(elem_t6);

function funcPush(arr, input, out) {
    if (input.value.trim() != '') {
        arr[arr.length] = input.value;

        out.textContent = arr;

        input.value = '';
    }
    else {
        input.value = '';
    }
}

button_t6.onclick = function () {
    funcPush(arr6, input_t6, elem_t6);
}

// task 7 --------------------
let arr7 = [];

let button_t7 = document.querySelector('.task-7'),
    input_t7 = document.createElement('input'),
    button_pop = document.createElement('button'),
    elem_t7 = document.createElement('div');

button_t7.textContent = 'push';

input_t7.setAttribute = 'type';
input_t7.type = 'text';
input_t7.setAttribute = 'placeholder';
input_t7.placeholder = 'новый элемент';

button_pop.textContent = 'pop';

elem_t7.style.display = 'inline';
elem_t7.style.marginLeft = '20px';

button_t7.before(input_t7);
button_t7.after(button_pop);
button_pop.after(elem_t7);

function funcPop(arr, out) {
    if (-1 < arr.length - 1) {
        --arr.length;

        out.textContent = arr;
    }
    else {
        out.textContent = `массив пуст`;
    }
}

button_t7.onclick = () => {
    funcPush(arr7, input_t7, elem_t7);
}

button_pop.onclick = () => {
    funcPop(arr7, elem_t7);
}

// task 8 --------------------
let arr8 = [];

let button_t8 = document.querySelector('.task-8'),
    input_t8 = document.createElement('input'),
    button_shift = document.createElement('button'),
    elem_t8 = document.createElement('div');

button_t8.textContent = 'push';

input_t8.setAttribute = 'type';
input_t8.type = 'text';
input_t8.setAttribute = 'placeholder';
input_t8.placeholder = 'новый элемент';

button_shift.textContent = 'shift';

elem_t8.style.display = 'inline';
elem_t8.style.marginLeft = '20px';

button_t8.before(input_t8);
button_t8.after(button_shift);
button_shift.after(elem_t8);


function funcShift(arr, out) {
    let newArr = [];
    if (0 < arr.length) {
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i + 1];
        }

        --arr.length;

        for (let k = 0; k < newArr.length; k++) {
            arr[k] = newArr[k];
        }

        out.textContent = arr;
    }
    else if (0 == arr.length) {
        console.log('hi');

        out.textContent = `массив пуст`;
    }

    newArr.length = 0;
}

button_t8.onclick = () => {
    funcPush(arr8, input_t8, elem_t8);
}

button_shift.onclick = () => {
    funcShift(arr8, elem_t8);
}

// task 9 --------------------
let arr9 = [];

let button_t9 = document.querySelector('.task-9'),
    input_t9 = document.createElement('input'),
    elem_t9 = document.createElement('div');

button_t9.textContent = 'unshift';

input_t9.setAttribute = 'type';
input_t9.type = 'text';
input_t9.setAttribute = 'placeholder';
input_t9.placeholder = 'новый элемент';

elem_t9.style.display = 'inline';
elem_t9.style.marginLeft = '20px';

button_t9.before(input_t9);
button_t9.after(elem_t9);

function funcUnShift(arr, input, out) {
    let newArr = [];

    if (input.value.trim() != '') {
        for (let i = 0; i < arr.length; i++) {
            newArr[i + 1] = arr[i];
        }

        newArr[0] = input.value;

        for (let k = 0; k < newArr.length; k++) {
            arr[k] = newArr[k];
        }

        input.value = '';
    }
    else {
        input.value = '';
    }

    newArr.length = 0;

    out.textContent = arr;
}

button_t9.onclick = () => {
    funcUnShift(arr9, input_t9, elem_t9);
}

// task 10 --------------------
let arr10 = [2, 4, 6, 8, 10, 'hello'];

let button_t10 = document.querySelector('.task-10');
elem_t10 = document.createElement('div');

button_t10.textContent = 'reverse';

elem_t10.classList.add('out-10');
elem_t10.style.display = 'inline';
elem_t10.style.marginLeft = '20px';

button_t10.after(elem_t10);

function f10(arr) {
    arr.reverse();

    elem_t10.textContent = `Результат: [${arr}]`;
}

button_t10.onclick = () => {
    f10(arr10);
}

// task 11 --------------------
let arr11 = [0, 2, 3, 7, 8, 5, 11, 'hello'];

let button_t11 = document.querySelector('.task-11'),
    input_t11 = document.createElement('input'),
    elem_t11 = document.createElement('div');

button_t11.classList.add('u-11__button');
button_t11.textContent = 'indexOf';

input_t11.setAttribute = 'type';
input_t11.type = 'text';
input_t11.setAttribute = 'placeholder';
input_t11.placeholder = 'что ищем?';
input_t11.classList.add('u-11__input');

elem_t11.classList.add('out-11');
elem_t11.style.display = 'inline';
elem_t11.style.marginLeft = '20px';

button_t11.before(input_t11);
button_t11.after(elem_t11);

function f11(arr, input, out) {
    if (input.value.trim() != '') {
        if (isNaN(input.value)) {
            out.textContent = arr.indexOf(input.value.trim());

            input.placeholder = input.value.trim();

            input.value = '';
        }
        else {
            out.textContent = arr.indexOf(+input.value);

            input.placeholder = input.value.trim();

            input.value = '';
        }
    }
    else {
        input.placeholder = 'что ищем?';

        out.textContent = '';
    }
}

button_t11.onclick = () => {
    f11(arr11, input_t11, elem_t11);
}

// task 12 --------------------
let arr12 = [0, 2, 3, 7, 8, 5, 11, 'hello'];

let button_t12 = document.querySelector('.task-12'),
    input_t12 = document.createElement('input'),
    elem_t12 = document.createElement('div');

button_t12.textContent = 'indexOf';

input_t12.setAttribute = 'type';
input_t12.type = 'text';
input_t12.setAttribute = 'placeholder';
input_t12.placeholder = 'что ищем?';

elem_t12.classList.add('out-12');
elem_t12.style.display = 'inline';
elem_t12.style.marginLeft = '20px';

button_t12.before(input_t12);
button_t12.after(elem_t12);

function funcIndexOf(arr, input, out) {
    if (input.value.trim() != '') {
        if (!isNaN(input.value)) {
            for (let i = 0; i < arr.length; i++) {
                if (+input.value == arr[i]) {
                    out.textContent = i;

                    input.placeholder = input.value;
                    input.value = '';

                    break;
                }
                else {
                    out.textContent = -1;

                    input.placeholder = input_t12.value;
                }
            }
            input.value = '';
        }
        else {
            for (let k = 0; k < arr.length; k++) {
                if (input.value == arr[k]) {
                    out.textContent = k;

                    input.placeholder = input.value;
                    input.value = '';

                    break;
                }
                else {
                    out.textContent = -1;

                    input.placeholder = input.value;
                }
            }
            input.value = '';
        }
    }
    else {
        input.placeholder = 'что ищем?';

        out.textContent = '';
    }
}

button_t12.onclick = () => {
    funcIndexOf(arr12, input_t12, elem_t12);
}

// task 13 --------------------
let arr13 = [0, 2, 3, 7, 8, 5, 11, 'hello'];

let button_t13 = document.querySelector('.task-13'),
    elem_t13 = document.createElement('pre');

button_t13.textContent = 'reverse';
elem_t13.textContent = `            let arr13 = [${arr13}]`;

button_t13.before(elem_t13);

function funcReverse(arr, out) {
    let newArr = [];

    for (let i = 0; i <= arr.length; i++) {
        newArr[arr.length - 1 - i] = arr[i];
    }

    for (let k = 0; k < arr.length; k++) {
        arr[k] = newArr[k];
    }

    out.textContent = `            let arr13 = [${arr}]`;
    newArr.length = 0;
}

button_t13.onclick = () => {
    funcReverse(arr13, elem_t13);
}

// task 14 --------------------
let button_t14 = document.querySelector('.task-14'),
    elem_t14 = document.createElement('div'),
    input_t14 = document.createElement('input');

elem_t14.style.display = 'inline';
elem_t14.style.marginLeft = '20px';

input_t14.setAttribute = 'type';
input_t14.type = 'number';
input_t14.setAttribute = 'placeholder';
input_t14.placeholder = 'длинна массива?';

button_t14.before(input_t14);
button_t14.after(elem_t14);

function f14(input, out) {
    let arr = [];

    for (let i = 0; i < +input.value; i++) {
        arr[i] = Math.floor(0 + Math.random() * (100 - 0 + 1));
    }

    out.textContent = arr;
}

button_t14.onclick = () => {
    f14(input_t14, elem_t14);
}

// task 15 --------------------
let arr15 = [68, 59, 55, 31, 38, 86, 49, 81, 55, 69, 100];

let button_t15 = document.querySelector('.task-15'),
    pre15 = document.createElement('pre'),
    elem_t15 = document.createElement('div');

pre15.textContent = `              arr15 = [${arr15}]`;

elem_t15.style.display = 'inline';
elem_t15.style.marginLeft = '20px';

button_t15.before(pre15);
button_t15.after(elem_t15);

function f15(arr, out) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i]);
        }

        out.textContent = `newArr = [${newArr}]`;
    }
}

button_t15.onclick = () => {
    f15(arr15, elem_t15);
}

// task 16 --------------------
let arr16_1 = [3, 5, 7],
    arr16_2 = [2, 4, 6];

let button_t16 = document.querySelector('.task-16'),
    elem_t16 = document.createElement('div');

button_t16.classList.add('u-16__button');
button_t16.textContent = 'concat';

elem_t16.classList.add('out-16');
elem_t16.style.display = 'inline';
elem_t16.style.marginLeft = '20px';

button_t16.after(elem_t16);

function f16(arr1, arr2, out) {
    let arr = arr1.concat(arr2);

    out.textContent = arr;
}

button_t16.onclick = () => {
    f16(arr16_1, arr16_2, elem_t16);
}

// task 17 --------------------
let arr17_1 = [3, 5, 7],
    arr17_2 = [2, 4, 6];

let button_t17 = document.querySelector('.task-17'),
    elem_t17 = document.createElement('div');

button_t17.textContent = 'concat v1';

elem_t17.style.display = 'inline';
elem_t17.style.marginLeft = '20px';

function funcConcat(arr1, arr2, out) {
    let lengthArr1 = arr1.length;

    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    out.textContent = `${arr1} (v1)`;

    arr1.length = lengthArr1;
}

button_t17.onclick = () => {
    funcConcat(arr17_1, arr17_2, elem_t17);
}

// task 17 ---- дополнительный вариант решения
let arrXpro = [];

arrXpro.push(arr17_1, arr17_2);

let button_t17_pro = document.createElement('button');

button_t17_pro.textContent = 'cancat v2';
button_t17_pro.style.marginLeft = '20px';

button_t17.after(button_t17_pro);
button_t17_pro.after(elem_t17);

function funcConcatPro(arrX, out) {
    let PushX = [];
    for (let i = 0; i < arrX.length; i++) {
        if (typeof (arrX[i]) == 'object' && arrX[i].length > 0) { // проверку на объекты не буду пока делать... толь на массив:
            for (let k = 0; k < arrX[i].length; k++) {
                PushX.push(arrX[i][k]);
            }
        }
        else {
            PushX.push(arrX[i]);
        }
    }
    out.textContent = `${PushX} (v2)`;
}

button_t17_pro.onclick = () => {
    funcConcatPro(arrXpro, elem_t17);
}

// task 18 --------------------
let arr18 = [3, 5, 7, 11, 12, 13, 14, 'hello'];

let button_t18 = document.querySelector('.task-18'),
    input_t18 = document.createElement('input'),
    elem_t18 = document.createElement('div');

button_t18.classList.add('u-18__button');
button_t18.textContent = 'includes';

input_t18.setAttribute = 'type';
input_t18.type = 'text';
input_t18.setAttribute = 'placeholder';
input_t18.placeholder = 'что ищем?';

elem_t18.classList.add('out-18');
elem_t18.style.display = 'inline';
elem_t18.style.marginLeft = '20px';

button_t18.before(input_t18);
button_t18.after(elem_t18);

function f18(arr, input, out) {
    if (input.value.trim() != '') {
        if (!isNaN(input.value)) {
            out.textContent = arr.includes(+input.value);

            input.placeholder = input.value;
            input.value = '';
        }
        else {
            out.textContent = arr.includes(input.value);

            input.placeholder = input.value;
            input.value = '';
        }
    }
    else {
        out.textContent = '';

        input.placeholder = 'что ищем?';
        input.value = '';
    }
}

button_t18.onclick = () => {
    f18(arr18, input_t18, elem_t18);
}

// task 19 --------------------
let arr19 = [3, 5, 7, 11, 12, 13, 14, 'hello'];

let button_t19 = document.querySelector('.task-19'),
    pre_t19 = document.createElement('pre'),
    input_t19 = document.createElement('input'),
    elem_t19 = document.createElement('div');

button_t19.textContent = 'includes';

pre_t19.textContent = `             let arr19 = [${arr19}]`;

input_t19.setAttribute = 'type';
input_t19.type = 'text';
input_t19.setAttribute = 'placeholder';
input_t19.placeholder = 'что ищем?';

elem_t19.style.display = 'inline';
elem_t19.style.marginLeft = '20px';

button_t19.before(input_t19);
input_t19.before(pre_t19);
button_t19.after(elem_t19);

function funcIncludes(arr, input, out) {
    if (input.value.trim() != '') {
        if (!isNaN(input.value)) {
            for (let i = 0; i < arr.length; i++) {
                if (+input.value == arr[i]) {
                    out.textContent = true;

                    input.placeholder = input.value;
                    input.value = '';
                    break;
                }
                else {
                    out.textContent = false;

                    input.placeholder = input.value;
                }
            }
            input.value = '';
        }
        else {
            for (let k = 0; k < arr.length; k++) {
                if (input.value == arr[k]) {
                    out.textContent = true;

                    input.placeholder = input.value;
                    input.value = '';
                    break;
                }
                else {
                    out.textContent = false;

                    input.placeholder = input.value;
                }
            }
            input.value = '';
        }
    }
    else {
        out.textContent = '';

        input.placeholder = 'что ищем?';
        input.value = '';
    }
}

button_t19.onclick = () => {
    funcIncludes(arr19, input_t19, elem_t19);
}

// task 20 --------------------
let arr20 = [55, 45, 8, 'Hello', 52, 47, 89, 32, 0, 'Vadim', 27, 69, 11, 64, 58, 23, 23];

let button_t20 = document.querySelector('.task-20'),
    pre_t20 = document.createElement('pre'),
    elem_t20 = document.createElement('div');

button_t20.textContent = 'join';

pre_t20.textContent = `let arr20 = [${arr20}]`;

elem_t20.style.display = 'inline';
elem_t20.style.marginLeft = '20px';

button_t20.before(pre_t20);
button_t20.after(elem_t20);

function f20(arr, out) {
    out.textContent = arr.join(', ');
}

button_t20.onclick = () => {
    f20(arr20, elem_t20);
}


