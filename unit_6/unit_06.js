//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
document.querySelector('.b-1').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            pushX += '*';
        }

        pushY += `${pushX}_`;
        pushX = '';
    }

    document.querySelector('.out-1').innerHTML = `<pre>${pushY}</pre>`;

}

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
document.querySelector('.b-2').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 1; i <= 3; i++) {
        for (let k = 0; k < 3; k++) {
            pushX += `*_`;
        }

        pushY += `${i}<br>${pushX}<br>`;
        pushX = '';
    }
    document.querySelector('.out-2').innerHTML = `<pre>${pushY}</pre>`;
}


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
document.querySelector('.b-3').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            pushX += `*_`;
        }

        pushY += `${pushX}<br>`;
        pushX = '';
    }

    document.querySelector('.out-3').innerHTML = `<pre>${pushY}</pre>`;
}

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>
document.querySelector('.b-4').onclick = () => {
    let pushX = '',
        i = 0,
        k = 10;

    for (i; i <= 10; i++) {
        if (i % 2 == 0) {
            pushX += `${i}_${k - i}_`;
        }
        else {
            for (k; k > 0; k--) {
                pushX += `${i}_${k - i}_`;
                break;
            }
        }
    }

    document.querySelector('.out-4').innerHTML = `<pre>${pushX}</pre><br>***Самая сложная задача!!!***`;
}




//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
document.querySelector('.b-5').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i < 3; i++) {
        for (let k = 1; k <= 6; k++) {
            if (k % 2 != 0) {
                pushX += `1`;
            }
            else {
                pushX += `0`;
            }
        }

        pushY += `${pushX}<br>`;
        pushX = '';
    }

    document.querySelector('.out-5').innerHTML = `<pre>${pushY}</pre>`;
}

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
document.querySelector('.b-6').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i < 3; i++) {
        for (let k = 1; k <= 6; k++) {
            if (k % 3 == 0) {
                pushX += `x`;
            }
            else if (k % 2 == 0) {
                pushX += `0`;
            }
            else {
                pushX += `1`;
            }
        }

        pushY += `${pushX}<br>`;
        pushX = '';
    }

    document.querySelector('.out-6').innerHTML = `<pre>${pushY}</pre>`;
}



//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
document.querySelector('.b-7').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i <= 4; i++) {
        for (let k = 0; k < i; k++) {
            pushX += `*`;
        }

        pushY += `${pushX}<br>`;
        pushX = '';
    }

    document.querySelector('.out-7').innerHTML = `${pushY}`;
}



//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
document.querySelector('.b-8').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 5; i >= 1; i--) {
        for (let k = 1; k <= i; k++) {
            pushX += `*`;
        }

        pushY += `${pushX}<br>`;
        pushX = ``;
    }

    document.querySelector('.out-8').innerHTML = `<pre>${pushY}</pre>`;
}



//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
document.querySelector('.b-9').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            pushX += `${k} `;
        }

        pushY += `${pushX}<br>`;
        pushX = '';
    }

    document.querySelector('.out-9').innerHTML = `<pre>${pushY}</pte>`;
}



//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
document.querySelector('.b-10').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            if (k < 10) {
                pushX += `${i}${k} `;
            }
            else {
                pushX += `${k * (i + 1)}`;
            }
        }

        pushY += `${pushX}<br>`;
        pushX = '';
    }

    document.querySelector('.out-10').innerHTML = `<pre>${pushY}</pre>`;
}
