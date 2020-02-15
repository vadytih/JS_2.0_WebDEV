// task 1 --------------------
const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];

let button_t1 = document.querySelector('.task-1'),
    elem_t1 = document.createElement('pre');

elem_t1.style.margin = '10px 0px 0px 120px';

button_t1.after(elem_t1);

function f1(arr, out) {
    pushX = '';

    for (let i = 0; i < arr.length; i++) {
        pushX += `${arr[i].join(' ')}<br>`;
    }

    out.innerHTML = pushX;
}

button_t1.onclick = () => {
    f1(a, elem_t1);
}

// task 2 --------------------
let button_t2 = document.querySelector('.task-2'),
    elem_t2 = document.createElement('pre');

elem_t2.style.display = 'inline';
elem_t2.style.marginLeft = '20px';

button_t2.after(elem_t2);

function f2(arr, out) {
    out.textContent = arr[0][2];
}

button_t2.onclick = () => {
    f2(a, elem_t2);
}

// task 3 --------------------
let button_t3 = document.querySelector('.task-3'),
    elem_t3 = document.createElement('pre');

elem_t3.style.display = 'inline';
elem_t3.style.marginLeft = '20px';

button_t3.after(elem_t3);

function f3(arr, out) {
    out.textContent = arr[3][1];
}

button_t3.onclick = () => {
    f3(a, elem_t3);
}

// task 4 --------------------
let button_t4 = document.querySelector('.task-4'),
    elem_t4 = document.createElement('pre');

elem_t4.style.display = 'inline';
elem_t4.style.marginLeft = '20px';

button_t4.after(elem_t4);

function f4(arr, out) {
    out.textContent = arr[3];
}

button_t4.onclick = () => {
    f4(a, elem_t4);
}

// task 5 --------------------
let button_t5 = document.querySelector('.task-5'),
    elem_t5 = document.createElement('pre');

elem_t5.style.display = 'inline';
elem_t5.style.marginLeft = '20px';

button_t5.after(elem_t5);

function f5(arr, out) {
    out.textContent = '';

    for (let i = 0; i < arr.length; i++) {
        out.textContent += `${arr[i][0]} `;
    }
}

button_t5.onclick = () => {
    f5(a, elem_t5);
}

// task 6 --------------------
let button_t6 = document.querySelector('.task-6'),
    elem_t6 = document.createElement('pre');

elem_t6.style.display = 'inline';
elem_t6.style.marginLeft = '20px';

button_t6.after(elem_t6);

function f6(arr, out) {
    let pushX = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            pushX.push(arr[i]);
        }
    }
    out.textContent = `[[${pushX.join('][')}]]`;
}

button_t6.onclick = () => {
    f6(a, elem_t6);
}

// task 7 --------------------
let button_t7 = document.querySelector('.task-7'),
    elem_t7 = document.createElement('pre');

elem_t7.style.display = 'inline';
elem_t7.style.marginLeft = '20px';

button_t7.after(elem_t7);

function f7(arr, out) {
    out.textContent = '';

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            if (!isNaN(arr[i][k])) {
                out.textContent += `${arr[i][k]} `;
            }
        }
    }
}

button_t7.onclick = () => {
    f7(a, elem_t7);
}

// task 8 --------------------
let button_t8 = document.querySelector('.task-8'),
    elem_t8 = document.createElement('pre');

elem_t8.style.display = 'inline';
elem_t8.style.marginLeft = '20px';

button_t8.after(elem_t8);

function f8(arr, out) {
    out.textContent = '';

    for (let i = 0; i < arr.length; i++) {
        out.textContent += `${arr[i].length} `;
    }
}

button_t8.onclick = () => {
    f8(a, elem_t8);
}

// task 9 --------------------
let button_t9 = document.querySelector('.task-9'),
    elem_t9 = document.createElement('pre');

elem_t9.style.display = 'inline';
elem_t9.style.marginLeft = '20px';

button_t9.after(elem_t9);

function f9(arr, out) {
    let pushX = [];
    out.textContent = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let k = arr[i].length - 1; k >= 0; k--) {
            pushX.push(arr[i][k]);
        }
    }

    out.textContent = pushX.join(' ');
}

button_t9.onclick = () => {
    f9(a, elem_t9);
}

// task 10 --------------------
let button_t10 = document.querySelector('.task-10'),
    elem_t10 = document.createElement('pre');

elem_t10.style.marginTop = '10px';
elem_t10.style.marginLeft = '85px';

button_t10.after(elem_t10);

function f10(arr, out) {
    out.textContent = '';

    for (let i = 0; i < arr.length; i++) {
        for (let k = arr[i].length - 1; k >= 0; k--) {
            out.innerHTML += `${arr[i][k]} `;
        }

        out.innerHTML += `<br>`;
    }
}

button_t10.onclick = () => {
    f10(a, elem_t10);
}

// task 11 --------------------
let button_t11 = document.querySelector('.task-11'),
    elem_t11 = document.createElement('pre');

elem_t11.style.marginTop = '10px';
elem_t11.style.marginLeft = '85px';

button_t11.after(elem_t11);

function f11(out) {
    let arr = [];

    out.textContent = '';

    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            for (let z = 0; z < 8; z++) {
                if (z % 2 == 0) {
                    arr.push(1);
                }
                else {
                    arr.push(0);
                }
            }
        }
        else {
            for (let z = 0; z < 8; z++) {
                if (z % 2 == 0) {
                    arr.push(0);
                }
                else {
                    arr.push(1);
                }
            }
        }
    }

    let n = 0;

    for (let k = 0; k < 8; k++) {
        for (let q = 0; q < 8; q++) {
            out.innerHTML += `${arr[n++]}`;
        }

        out.innerHTML += `<br>`;
    }
}

button_t11.onclick = () => {
    f11(elem_t11);
}

// task 12 --------------------
let button_t12 = document.querySelector('.task-12'),
    elem_t12 = document.createElement('div'),
    option_1 = document.createElement('sapn');

button_t12.style.display = 'block';

function f12(out) {
    option_1.textContent = ' v1';

    elem_t12.style.marginTop = '10px';
    elem_t12.style.marginLeft = '85px';
    elem_t12.style.width = '82px';
    elem_t12.style.fontSize = '0';
    elem_t12.style.display = 'inline-block';
    elem_t12.style.border = '1px solid black';

    button_t12.after(elem_t12);
    out.after(option_1);

    out.textContent = '';

    let arr = [];

    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            for (let z = 0; z < 8; z++) {
                if (z % 2 == 0) {
                    arr.push(1);
                }
                else {
                    arr.push(0);
                }
            }
        }
        else {
            for (let z = 0; z < 8; z++) {
                if (z % 2 == 0) {
                    arr.push(0);
                }
                else {
                    arr.push(1);
                }
            }
        }
    }

    for (let g = 0; g < arr.length; g++) {
        if (+arr[g] == 1) {
            out.innerHTML += `<div class ="null"></div>`;
        }
        else {
            out.innerHTML += `<div class ="one"></div>`;
        }
    }

    let elem_null = document.getElementsByClassName('null'),
        elem_one = document.getElementsByClassName('one');

    for (let p = 0; p < elem_null.length; p++) {
        elem_null[p].style.display = 'inline-block';
        elem_null[p].style.width = '10px';
        elem_null[p].style.height = '10px';
        elem_null[p].style.backgroundColor = 'black';
        elem_null[p].style.border = '1px solid black';
    }

    for (let m = 0; m < elem_null.length; m++) {
        elem_one[m].style.display = 'inline-block';
        elem_one[m].style.width = '10px';
        elem_one[m].style.height = '10px';
        elem_one[m].style.backgroundColor = 'white';
        elem_one[m].style.border = '1px solid white';

    }
}

// v2. Доболнительный вариант решения
let elem_t12_v2 = document.createElement('div'),
    option_2 = document.createElement('sapn');

function f12_v2(out) {
    option_2.textContent = ' v2';

    elem_t12_v2.style.marginLeft = '85px';
    elem_t12_v2.style.fontSize = '0';
    elem_t12_v2.style.display = 'inline-block';
    elem_t12_v2.style.border = '1px solid black';

    option_1.after(elem_t12_v2);
    out.after(option_2);

    out.textContent = '';

    let arr = [],
        i = 0;

    while (i++ < 8) {
        switch (i % 2) {
            case 0:
                let z = 0;

                while (z++ < 8) {
                    switch (z % 2) {
                        case 0:
                            arr.push(1);
                            break;
                        default:
                            arr.push(0);
                    }
                }
                break;

            case 1:
                let u = 0;

                while (u++ < 8) {
                    switch (u % 2) {
                        case 0:
                            arr.push(0);
                            break;
                        default:
                            arr.push(1);
                    }
                }
        }
    }

    let k = 0;

    while (k < 8) {
        out.innerHTML += `<div class = "elem_Y"></div>`;

        k++;
    }

    let elemY = document.getElementsByClassName('elem_Y');

    let y = 0,
        x = 0;

    while (y < elemY.length) {
        while (x < 8) {
            elemY[y].innerHTML += `<div class = "elem_X"></div>`;

            x++;
        }

        x = 0;
        y++;
    }


    let elemX = document.getElementsByClassName('elem_X');
    let g = 0;

    while (g < elemX.length) {
        switch (arr[g]) {
            case 0:
                elemX[g].style.display = 'inline-block';
                elemX[g].style.width = '10px';
                elemX[g].style.height = '10px';
                elemX[g].style.backgroundColor = 'white';
                elemX[g].style.border = '1px solid white';
                break;

            case 1:
                elemX[g].style.display = 'inline-block';
                elemX[g].style.width = '10px';
                elemX[g].style.height = '10px';
                elemX[g].style.backgroundColor = 'black';
                elemX[g].style.border = '1px solid black';
        }

        g++;
    }
}

button_t12.onclick = () => {
    f12(elem_t12);
    f12_v2(elem_t12_v2);
}

// task 13 --------------------
document.querySelector('.task-13').onclick = function () {
    const elem_t13 = document.createElement('div');
    const b = [[, 4], , , [, , 5]];

    elem_t13.textContent = `результат в консоле...`;

    console.log(`Task 13 --------------------`);
    console.log(b);

    console.log(`b[0][1] == ${b[0][1]}`);
    console.log(`b[3][2] == ${b[3][2]}`);

    this.after(elem_t13);
}

// task 14 --------------------
document.querySelector('.task-14').onclick = function () {
    const elem_t14 = document.createElement('div');
    const c = [[, 4], , 5];

    elem_t14.textContent = `результат в консоле...`;

    console.log(`Task 14 --------------------`);
    console.log(c);

    console.log(`c[0][1] == ${c[0][1]}`);
    console.log(`c[2] == ${c[2]}`);

    this.after(elem_t14);
}

// task 15 --------------------
document.querySelector('.task-15').onclick = function () {
    const elem_t15 = document.createElement('div');
    const d = [[, 4], , [, , , 5], , , , [4, 5]];

    elem_t15.textContent = `результат в консоле...`;

    console.log(`Task 15 --------------------`);
    console.log(d);

    console.log(`d[0][1] == ${d[0][1]}`);
    console.log(`d[2][3] == ${d[2][3]}`);
    console.log(`d[6] == [${d[6]}]`);

    this.after(elem_t15);
}

// task 16 --------------------
document.querySelector('.task-16').onclick = function () {
    const elem_t16 = document.createElement('div');
    const e = [[, 4], , [, , , 5], , , , [[, 6]]];

    elem_t16.textContent = `результат в консоле...`;

    console.log(`Task 16 --------------------`);
    console.log(e);

    console.log(`e[0][1] == ${e[0][1]}`);
    console.log(`e[2][3] == ${e[2][3]}`);
    console.log(`e[6][0][1] == ${e[6][0][1]}`);

    this.after(elem_t16);
}

// task 17 --------------------
document.querySelector('.task-17').onclick = function () {
    const elem_t17 = document.createElement('div');
    const f = [[, [, , , 4]], , [, [, 5]], , , , [[, 6]]];

    elem_t17.textContent = `результат в консоле...`;

    console.log(`Task 17 --------------------`);
    console.log(f);

    console.log(`f[0][1][3] == ${f[0][1][3]}`);
    console.log(`f[2][1][1] == ${f[2][1][1]}`);
    console.log(`f[6][0][1] == ${f[6][0][1]}`);

    this.after(elem_t17);
}

// task 18 --------------------
document.querySelector('.task-18').onclick = function () {
    const elem_t18 = document.createElement('div');
    const g = [[, [, , , 4]], , [, [, , , 5]], , , , [[, 6]]];

    elem_t18.textContent = `результат в консоле...`;

    console.log(`Task 18 --------------------`);
    console.log(g);

    console.log(`g[0][1][3] == ${g[0][1][3]}`);
    console.log(`g[2][1][3] == ${g[2][1][3]}`);
    console.log(`g[6][0][1] == ${g[6][0][1]}`);
    console.log(`g[3] == g[5] (${g[3] == g[5]}!) =)`);

    this.after(elem_t18);
}

// task 19 --------------------
let button_t19 = document.querySelector('.task-19'),
    elem_t19 = document.createElement('div');

button_t19.after(elem_t19);

function f19(arr) {
    pushX = 0;

    elem_t19.style.display = 'inline';
    elem_t19.style.marginLeft = '20px';

    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (!isNaN(arr[i][k])) {
                pushX += arr[i][k];
            }
        }
    }

    elem_t19.textContent = `Сумма всех числе из массива 'a' = ${pushX}`;
}

button_t19.onclick = () => {
    f19(a);
}

// task 20 --------------------
let arr_o1 = [[1, 1, 1], [0, 0, 0], [0, 0, 0]],
    arr_o2 = [[0, 0, 0], [1, 1, 1], [0, 0, 0]],
    arr_o3 = [[0, 0, 0], [0, 0, 0], [1, 1, 1]],
    arr_o4 = [[1, 0, 0], [1, 0, 0], [1, 0, 0]],
    arr_o5 = [[0, 1, 0], [0, 1, 0], [0, 1, 0]],
    arr_o6 = [[0, 0, 1], [0, 0, 1], [0, 0, 1]],
    arr_o7 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
    arr_o8 = [[0, 0, 1], [0, 1, 0], [1, 0, 0]];

let arr20 = [];

arr20.push(arr_o1, arr_o2, arr_o3, arr_o4, arr_o5, arr_o6, arr_o7, arr_o8);

let button_t20 = document.querySelector('.task-20'),
    elem_t20 = document.createElement('div'),
    span20 = document.createElement('span');

elem_t20.classList.add('out-20');

button_t20.after(span20);
span20.after(elem_t20);

function f20(arr, out) {
    span20.style.marginLeft = '20px';
    span20.style.marginTop = '10px';
    span20.style.display = 'block';
    span20.innerHTML = `Массивы выведены в консоль!!!!<br><br> 
    a[0][0], a[0][1], a[0][2] - занята первая линия<br>
    a[1][0], a[0][1], a[0][2] - занята вторая линия<br>
    a[2][0], a[0][1], a[0][2] - занята третья линия<br>
<br>
    a[0][0], a[1][0], a[2][0] - занят первый столбец<br>
    a[0][1], a[1][1], a[2][1] - занят второй столбец<br>
    a[0][2], a[1][2], a[2][2] - занят третий столбец<br>
<br>
    a[0][0], a[1][1], a[2][2] - диагональ &#8726;<br>
    a[0][2], a[1][1], a[2][0] - диагональ / <br>`;

    out.textContent = '';

    out.style.marginTop = '20px';

    let optionX;
    let elemsY;

    for (let i = 0; i < arr.length; i++) {
        out.innerHTML += `<div class= "option option_${i}"></div>`;
        optionX = document.querySelector(`.option_${i}`);

        for (let k = 0; k < 3; k++) {
            optionX.innerHTML += `<div class = "option_${i} elem_Yt elem_Yt${k}"></div>`;
        }

        elemsY = document.getElementsByClassName(`option_${i} elem_Yt`);

        for (let k = 0; k < elemsY.length; k++) {
            for (let n = 0; n < 3; n++) {
                elemsY[k].innerHTML += `<div class = "option_${i} elem_Yt${k} elem_Xt"></div>`;
                elemsY[k].style.display = 'block';
            }
        }

        optionX.style.display = 'inline-block';
        optionX.style.marginLeft = '20px';
        optionX.style.marginTop = '10px';
    }

    // растановка выигрышных комбинаций
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            for (let g = 0; g < arr[i][k].length; g++) {
                if (arr[i][k][g] == 1) {
                    document.getElementsByClassName(`option_${i} elem_Yt${k} elem_Xt`)[g].textContent = `X`;
                }
            }
        }
    }

    // отрисовка полей
    let option = document.getElementsByClassName('option');

    for (let i = 0; i < option.length; i++) {
        option[i].style.display = 'inline-block';
        option[i].style.marginLeft = '20px';
        option[i].style.marginTop = '10px';
        option[i].style.fontSize = '0';
        option[i].style.backgroundColor = 'whitesmoke';
    }

    let elemY = document.getElementsByClassName('elem_Yt');

    for (let i = 0; i < elemY.length; i++) {
        elemY[i].style.display = 'block';
    }

    for (let i = 0; i < elemY.length; i += 3) {
        elemY[i].style.borderBottom = '2px solid black';
    }

    for (let i = elemY.length - 1; i > 0; i -= 3) {
        elemY[i].style.borderTop = '2px solid black';
    }

    let elemX = document.getElementsByClassName('elem_Xt');

    for (let i = 0; i < elemX.length; i++) {
        elemX[i].style.width = '40px';
        elemX[i].style.height = '40px';
        elemX[i].style.display = 'inline-block';
        elemX[i].style.fontSize = '20px';
        elemX[i].style.textAlign = 'center';
        elemX[i].style.verticalAlign = 'middle';
        elemX[i].style.paddingTop = '10px';
    }

    for (let i = 0; i < elemX.length; i += 3) {
        elemX[i].style.borderRight = '2px solid black';
    }

    for (let i = elemX.length - 1; i > 0; i -= 3) {
        elemX[i].style.borderLeft = '2px solid black';
    }

    // вывод массивов в кансоль
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}

button_t20.onclick = () => {
    f20(arr20, elem_t20);
}