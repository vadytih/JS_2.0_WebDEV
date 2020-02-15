//  Task 1
document.querySelector('.b-1').onclick = () => {
    let pushX = '';
    console.log('go');

    for (let i = 0; i < 3; i++) {
        for (let k = 1; k <= 5; k++) {
            pushX += `*`;
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-1').innerHTML = pushX;
}

//Task 2
document.querySelector('.b-2').onclick = () => {
    let pushX = '';

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                pushX += `1`;
            }
            else {
                pushX += `0`;
            }
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-2').innerHTML = pushX;
}


//Task 3
document.querySelector('.b-3').onclick = () => {
    let pushX = '';

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

        pushX += `<br>`;
    }

    document.querySelector('.out-3').innerHTML = pushX;
}


//Task 4
document.querySelector('.b-4').onclick = () => {
    let pushX = '';

    for (let i = 0; i <= 3; i++) {
        for (let k = 0; k < i; k++) {
            pushX += `*`;
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-4').innerHTML = pushX;
}


//Task 5
document.querySelector('.b-5').onclick = () => {
    let pushX = '';

    for (let i = 5; i >= 1; i--) {
        for (let k = 0; k < i; k++) {
            pushX += `*`;
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-5').innerHTML = pushX;
}


// Task6
document.querySelector('.b-6').onclick = () => {
    let pushX = '',
        i;

    for (i = 3; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            pushX += `&nbsp;&nbsp;`;
        }
        for (let z = 0; z < 5; z++) {
            pushX += `*`;
        }

        pushX += `<br>`
    }

    document.querySelector('.out-6').innerHTML = pushX;
}


// Task 7
document.querySelector('.b-7').onclick = () => {
    let pushX = '',
        as = +prompt('Число', '3');

    for (let i = 1; i <= as; i++) {
        for (let k = 0; k < i; k++) {
            pushX += `*`;

        }
        pushX += `<br>`;
        if (i == as) {
            for (let z = i - 1; z > 0; z--) {
                for (let j = 0; j < z; j++) {
                    pushX += '*';

                }

                pushX += `<br>`;
            }
        }
    }

    document.querySelector('.out-7').innerHTML = `<br>${pushX}`;
}


// Task 8
document.querySelector('.b-8').onclick = () => {
    let pushX = '';

    for (let i = 1; i <= 5; i++) {
        if (i == 1 || i == 5) {
            for (let k = 0; k < 24; k++) {
                pushX += `&nbsp;`;
            }

            for (let z = 1; z <= 6; z++) {
                pushX += `*`;
            }
        }
        else {
            for (let d = 0; d < 24; d++) {
                pushX += `&nbsp;`;
            }

            for (let j = 1; j <= 6; j++) {
                if (j == 1 || j == 6) {
                    pushX += '*';
                }
                else {
                    pushX += `&nbsp;`;
                }
            }
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-8').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 9
document.querySelector('.b-9').onclick = () => {
    let pushX = '',
        as = prompt('Любой символ', '*');

    for (let i = 1; i <= 5; i++) {
        if (i == 1 || i == 5) {
            for (let k = 0; k < 28; k++) {
                pushX += `&nbsp;`;
            }

            for (let z = 1; z <= 6; z++) {
                pushX += `${as}`;
            }
        }
        else {
            for (let d = 0; d < 28; d++) {
                pushX += `&nbsp;`;
            }

            for (let j = 1; j <= 6; j++) {
                if (j == 1 || j == 6) {
                    pushX += `${as}`;
                }
                else {
                    pushX += `&nbsp;`;
                }
            }
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-9').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 10
document.querySelector('.b-10').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 6; i <= 7; i++) {
        for (let k = 1; k <= 10; k++) {
            pushX += `${k} * ${i} = ${k * i}<br>`;
        }

        pushY += `<pre>${pushX}</pre>`;
        pushX = '';
    }

    document.querySelector('.out-10').innerHTML = `<br>${pushY}`;
}


// Task 11
document.querySelector('.b-11').onclick = () => {
    let pushX = '';

    for (let i = 0; i < 5; i++) {
        for (let k = 0; k <= i; k++) {
            pushX += `${k + 1} `;
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-11').innerHTML = `<pre>${pushX}</pre>`;
}

// Task 12
document.querySelector('.b-12').onclick = () => {
    let pushX = '';

    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j < 24; j++) {
            pushX += ` `;
        }

        for (let k = 1; k <= 10; k++) {
            if (k == 10) {
                pushX += `${i + 1}0`;
            }
            else {
                pushX += `${i}${k} `;
            }
        }

        pushX += '<br>';
    }

    document.querySelector('.out-12').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 13
document.querySelector('.b-13').onclick = () => {
    let pushX = '';

    for (let i = 5; i > 0; i--) {
        for (let j = 0; j < 24; j++) {
            pushX += ` `;
        }

        for (let k = 0; k < i; k++) {
            pushX += `${i - k} `;
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-13').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 14
document.querySelector('.b-14').onclick = () => {
    let pushX = '',
        pushY = '',
        r = 5;

    for (let i = 1; i <= r; i++) {
        for (let k = 0; k < 18; k++) {
            pushX += ` `;
        }

        for (let z = 1; z <= r; z++) {
            if (z > 0 && z <= r - i) {
                pushX += `  `;
            }
            else {
                for (let n = 0; n < i; n++) {
                    for (let y = 0; y < z; y++) {
                        pushY = `${r--} `;
                    }
                    r = 5;
                }
                pushX += `${pushY}`;
                pushY = '';
            }
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-14').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 15
document.querySelector('.b-15').onclick = () => {
    let pushX = '',
        pushY = '',
        r = 5;

    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 19; k++) {
            pushX += ` `;
        }

        for (let k = 1; k <= 5; k++) {
            if (k < 5 - i) {
                pushX += ` X`;
            }
            else {
                for (let n = k; n <= 5; n++) {
                    for (let j = 1; j <= k; j++) {
                        pushY = ` ${r--}`;
                    }
                    r = 5;
                }
                pushX += `${pushY}`;
                pushY = '';
            }
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-15').innerHTML = `<pre>${pushX}</pre>`;
}

// Task 16
document.querySelector('.b-16').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i < 5; i++) {
        for (let k = 0; k <= i; k++) {
            pushX += `${i + 1}  `;
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-16').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 17
document.querySelector('.b-17').onclick = () => {
    let pushX = '',
        pushY = ''
    r = 5;

    for (let i = 1; i <= 5; i++) {
        for (let k = 5 - i; k < 5; k++) {
            pushY += `${r + 1 - i}`;
            r = 5;
            for (let n = 0; n < 2; n++) {
                pushY += ` `;
            }
        }

        pushX += `${pushY}<br>`;
        pushY = '';
    }

    document.querySelector('.out-17').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 18
document.querySelector('.b-18').onclick = () => {
    let pushX = ``;

    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            if (i % 2 != 0) {
                pushX += `${5 - (i - 1)}  `;
            }
            else {
                pushX += `X  `;
            }
        }

        pushX += `<br>`;
    }

    document.querySelector('.out-18').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 19
document.querySelector('.b-19').onclick = () => {
    let pushX = '',
        pushY = '';

    for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3 - i; n++) {
            pushX += ` `;
        }

        for (let k = 0; k < 5 + (i * 2); k++) {
            pushY += `*`;
        }

        pushX += `${pushY}<br>`;
        pushY = '';
    }

    document.querySelector('.out-19').innerHTML = `<pre>${pushX}</pre>`;
}


// Task 20
document.querySelector('.b-20').onclick = () => {
    let pushX = '',
        as = +prompt('Число', '6') / 2;

    for (let i = 1; i <= as; i++) {
        for (let n = 1; n < as + 1 - i; n++) {
            pushX += ` `;
        }
        for (let k = 1; k <= i; k++) {
            pushX += `**`;

        }
        pushX += `<br>`;
        if (i == as) {
            for (let z = i - 1; z > 0; z--) {
                for (let u = as - z; u > 0; u--) {
                    pushX += ` `;
                }
                for (let j = 0; j < z; j++) {
                    pushX += '**';

                }

                pushX += `<br>`;
            }
        }

    }

    document.querySelector('.out-20').innerHTML = `<pre>${pushX}</pre>`;
}