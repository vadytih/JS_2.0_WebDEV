//  Task 1
document.querySelector('.b-1').onclick = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//Task 2
document.querySelector('.b-2').onclick = () => {
    for (let i = 1; i <= 10; i++) {
        document.querySelector('.out-2').innerHTML += i + ' ';
    }
}

//Task 3
document.querySelector('.b-3').onclick = () => {
    for (let i = 10; i >= 0; i--) {
        document.querySelector('.out-3').innerHTML += i + ' ';
    }
}

//Task 4 
document.querySelector('.b-4').onclick = () => {
    for (let i = 0; i <= 10; i += 2) {
        document.querySelector('.out-4').innerHTML += i + ' ';
    }
}

//Task 5
document.querySelector('.b-5').onclick = () => {
    for (let i = 21; i >= 0; i -= 3) {
        document.querySelector('.out-5').innerHTML += i + ' ';
    }
}

//Task 6
document.querySelector('.b-6').onclick = () => {
    let hX = '',
        pushX = '';

    for (let i = 1; i <= 6; i++) {
        hX = '';

        for (let i = 1; i <= 6; i++) {
            hX += '******' + '\n';
        }

        pushX += hX + '<br>';
    }
    document.querySelector('.out-6').innerHTML = pushX;
}

//Task 7
document.querySelector('.b-7').onclick = () => {
    let input7 = +document.querySelector('.i-7').value,
        pushX = '';

    if (input7 > 0) {
        for (let i = input7; i >= 0; i--) {
            pushX += i + ' ';
        }
    }
    else if (input7 < 0) {
        for (let i = input7; i <= 0; i++) {
            pushX += i + ' ';
        }
    }
    else {
        pushX = 0;
    }

    document.querySelector('.out-7').innerHTML = pushX;
}

//Task 8
document.querySelector('.b-8').onclick = () => {
    let input81 = +document.querySelector('.i-81').value,
        input82 = +document.querySelector('.i-82').value,
        pushX = '';

    for (let i = input81; i <= input82; i++) {
        pushX += i + ' ';
    }

    document.querySelector('.out-8').innerHTML = pushX;
}

//Task 9
document.querySelector('.b-9').onclick = () => {
    let input91 = +document.querySelector('.i-91').value,
        input92 = +document.querySelector('.i-92').value,
        pushX = '';
    if (input92 > input91) {
        for (let i = input91; i <= input92; i++) {
            pushX += i + ' ';
        }

        document.querySelector('.out-9').innerHTML = pushX;
    }
    else {
        alert('Ошибка, второй число должно быть больше');
    }

}

//Task 10
document.querySelector('.b-10').onclick = () => {
    let pushX = '';
    for (let i = 1901; i <= 1950; i++) {
        if (i % 2 == 0) {
            pushX += i + ' ';
        }
    }
    document.querySelector('.out-10').innerHTML = pushX;
}

//Task 11
document.querySelector('.b-11').onclick = () => {
    let arrX = document.getElementsByClassName('one');
    document.querySelector('.out-11').innerHTML = arrX.length;
}

//Task 12
document.querySelector('.b-12').onclick = () => {
    let arrX = document.getElementsByClassName('one');

    for (let i = 0; i < arrX.length; i++) {
        arrX[i].style.backgroundColor = 'orange';
    }
}

//Task 13
document.querySelector('.b-13').onclick = () => {
    let arrX = document.querySelectorAll('.one'),
        pushX = '';
    for (let i = 0; i < arrX.length; i++) {
        pushX += arrX[i].textContent + '\n';
    }

    document.querySelector('.out-13').innerHTML = pushX;
}

//Task 14 
document.querySelector('.b-14').onclick = () => {
    let arrX = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < arrX.length; i++) {
        arrX[i].placeholder = 'Ввидите данные';
    }

}

//Task 15
document.querySelector('.b-15').onclick = () => {
    let arrX = document.querySelectorAll('input[type="text"]');

    console.log(arrX.length);
}

//Task 16
document.querySelector('.b-16').onclick = () => {
    let arrX = document.querySelectorAll('input[name="p1"]');

    for (let i = 0; i < arrX.length; i++) {
        if (arrX[i].checked) {
            document.querySelector('.out-16').innerHTML = arrX[i].value;
        }
    }
}

//Task 17
let itemX = '';
document.querySelector('.b-17').onclick = () => {
    document.querySelector('input[name="p1"]').click();
}

//Task 18
document.querySelector('.b-18').onclick = () => {
    let arrX = document.querySelectorAll('input[name="p1"]');

    for (let i = 0; i < arrX.length; i++) {
        arrX[i].value = i;
    }
}

document.querySelector('.b-181').onclick = () => {
    let arrX = document.querySelectorAll('input[name="p1"]'),
        pushX = '';

    for (let i = 0; i < arrX.length; i++) {
        pushX += arrX[i].value + ' ';
    }

    document.querySelector('.out-18').innerHTML = pushX;
}

//Task 19
document.querySelector('.b-19').onclick = () => {
    let arrX = document.querySelectorAll('input[name="p2"]');

    for (let i = 0; i < arrX.length; i++) {
        if (arrX[i].checked == true && arrX[i].value == 5) {
            document.querySelector('.out-19').innerHTML = true;
            break;
        }
        else {
            document.querySelector('.out-19').innerHTML = false;
        }
    }
}

//Task 20

// document.querySelector('input[name="p3"].checked').oninput = () => {
//     console.log('sdfsd');
//     let arrX = ocument.querySelectorAll('input[name"p3"]');
//     for (let i = 0; i < arrX.length; i++) {
//         arrX[i].oninput = (value) => {
//             console.log('feeee');
//         }
//     }

// }

let arrXX = document.querySelectorAll('input[name="p3"]');

for (let i = 0; i < arrXX.length; i++) {
    arrXX[i].oninput = (event) => {
        console.log('был изменен input № ' + (i + 1));
    }
}





