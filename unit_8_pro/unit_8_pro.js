//  Task 1
function f1() {
    let pushX = '',
        i = 0;

    while (i <= 100) {
        pushX += `${i} `;

        i++;
    }

    return pushX;
}

document.querySelector('.b-1').onclick = () => {
    document.querySelector('.out-1').textContent = f1();
}


// Task 2
let i21 = document.querySelector('.i-21'),
    i22 = document.querySelector('.i-22');

function f2(a, b) {
    let pushX = '';

    while (a <= b) {
        pushX += `${a} `;

        a++;
    }

    return pushX;
}

document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').textContent = f2(+i21.value, +i22.value);
}

// Task 3
let i31 = document.querySelector('.i-31'),
    i32 = document.querySelector('.i-32');

function f3(a, b) {
    let pushX = '';

    if (a >= b) {
        while (a >= b) {
            pushX += `${a} `;

            a--;
        }
    }
    else {
        while (b >= a) {
            pushX += `${b} `;

            b--;
        }
    }

    return pushX;
}

document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').textContent = f3(+i31.value, +i32.value);
}

// Task 4
let i41 = document.querySelector('.i-41'),
    i42 = document.querySelector('.i-42'),
    i43 = document.querySelector('.i-43');

function f4(a, b, shag) {
    let pushX = '';

    if (a >= b) {
        while (a >= b) {
            pushX += `${a} `;

            a -= shag;
        }
    }
    else {
        while (b >= a) {
            pushX += `${b} `;

            b -= shag;
        }
    }

    return pushX;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').textContent = f4(+i41.value, +i42.value, +i43.value);
}

// Task 5
function f5(a, b) {
    let pushX = 0;

    while (a <= b) {
        console.log(`${pushX} + ${a} = ${pushX + a}`);
        pushX += a;

        a++;
    }

    return pushX;
}

document.querySelector('.b-5').onclick = () => {
    document.querySelector('.out-5').textContent = f5(0, 20);
}

// Task 6
let i61 = document.querySelector('.i-61'),
    i62 = document.querySelector('.i-62');

function f6(a, b) {
    let pushX = 0;

    if (a <= b) {
        while (a <= b) {
            console.log(`${pushX} + ${a} = ${pushX + a}`);
            pushX += a;

            a++;
        }
    }
    else {
        pushX = 'false';
    }

    return pushX;
}


document.querySelector('.b-6').onclick = () => {
    document.querySelector('.out-6').textContent = f6(+i61.value, +i62.value);
}

// Task 7
let i71 = document.querySelector('.i-71'),
    i72 = document.querySelector('.i-72');

function f7(a, b) {
    let pushX = 1;

    if (a <= b) {
        while (a <= b) {
            console.log(`${pushX} * ${a} = ${pushX * a}`);
            pushX *= a;

            a++;
        }
    }
    else {
        pushX = 'false';
    }

    return pushX;
}


document.querySelector('.b-7').onclick = () => {
    document.querySelector('.out-7').textContent = f7(+i71.value, +i72.value);
}


// Task 8 
function f8(a) {
    let pushX = 0;
    while (a <= 1000000) {

        a *= 2;
        pushX++;
        console.log(`${pushX} день, монет ${a}`)
    }

    return `${pushX}`;
}

document.querySelector('.b-8').onclick = () => {
    document.querySelector('.out-8').textContent = f8(333);
}

// Task 9
let i91 = document.querySelector('.i-91'),
    i92 = document.querySelector('.i-92');

function f9(a, b) {
    let pushX = '';

    while (a <= b) {
        if (a % 2 == 0) {
            pushX += `0 `;
        }
        else {
            pushX += `${a} `;
        }

        a++;
    }

    return pushX;
}

document.querySelector('.b-9').onclick = () => {
    document.querySelector('.out-9').textContent = f9(+i91.value, +i92.value);
}

// Task 10
function f10(a) {
    let pushX = '',
        i = 1;

    while (i <= 6) {
        if (i % 2 == 0) {
            pushX += `*<br>`;
        }
        else {
            pushX += `**<br>`;
        }

        i++;
    }

    return pushX;
}

document.querySelector('.b-10').onclick = () => {
    document.querySelector('.out-10').innerHTML = f10(6);
}

// Task 11
function f11(a) {
    let pushX = '',
        i = 0;

    while (i <= a) {
        if (i == 0 || i == a) {
            pushX += `${a} `;
        }
        else {
            pushX += `${i} ${a - i} `;
        }

        i++;
    }

    return pushX;
}

document.querySelector('.b-11').onclick = () => {
    document.querySelector('.out-11').textContent = f11(10);
}

// Task 12
let a = -2;

do {
    console.log(`do while work`);
    a++;

} while (a < 0);

let b = -2;

while (b < 0) {
    console.log(`while work`);
    b++;
}


// Task 13
function f13(a) {
    let pushX = '';

    do {
        pushX += `${a} `;

        a--;

    } while (a >= 0);

    return pushX;
}

document.querySelector('.b-13').onclick = () => {
    document.querySelector('.out-13').textContent = f13(100);
}


// Task 14
function f14(a, b) {
    let pushX = 1;

    do {
        pushX++;
        a += a + (a * 0.3);

        console.log(`${pushX} день, добыто ${a}`);
    } while (a <= b);

    return pushX;
}

document.querySelector('.b-14').onclick = () => {
    document.querySelector('.out-14').textContent = f14(5, 132);
}

// Task 15
function f15(a, b, k) {
    pushX = 1;

    do {
        pushX++;

        a += a + b;
        console.log(`${pushX} день, добыто ${a}`);

    } while (a <= k);

    return pushX;
}

document.querySelector('.b-15').onclick = () => {
    document.querySelector('.out-15').textContent = f15(1.1, 0.3, 568);
}


// Task 16
function f16() {
    let pT16 = document.getElementsByClassName('task-16'),
        k = pT16.length,
        i = 0;

    do {
        pT16[i].textContent = ++i;

    } while (i < k);
}

document.querySelector('.b-16').onclick = f16;

// Task 17
function f17() {
    let pT17 = document.getElementsByClassName('task-17'),
        i = 0,
        k = pT17.length;

    do {
        pT17[i++].textContent = k--;

    } while (k > 0);
}

document.querySelector('.b-17').onclick = f17;

// Task 18
function f18(a) {
    let i = 1,
        pushX = i;

    do {
        pushX += `*${i += a}`;

    } while (i < 19);

    return pushX;
}

document.querySelector('.b-18').onclick = () => {
    document.querySelector('.out-18').textContent = f18(2);
}

// Task 19
function f19(a) {
    let pushX = '',
        i = 1,
        k = 1;

    do {
        do {
            if (k == i) {
                pushX += `1`;
            }
            else {
                pushX += `*`;
            }

            k++;
        } while (k <= a);

        k = 1;
        pushX += `<br>`;
        i++;
    } while (i <= a);

    return `<pre>${pushX}</pre>`;
}

document.querySelector('.b-19').onclick = () => {
    document.querySelector('.out-19').innerHTML = f19(4);
}
