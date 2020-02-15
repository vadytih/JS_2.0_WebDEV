// task 1 --------------------
document.querySelector('.task-1').onclick = () => {
    alert('Task-1');
}

//task 2 --------------------
document.querySelector('.task-2').onclick = () => {
    alert('Task-2');
}

//task 3 --------------------
document.querySelector('.task-3').onclick = () => {
    alert('Task-3');
}

//task 4 --------------------
document.querySelector('.b-4').onclick = () => {
    let input4 = document.querySelector('.i-4'),
        div4 = document.querySelector('.out-4');

    if (input4.checked) {
        div4.innerHTML = input4.checked;
        //div4.innerHTML = 'true';
    }
    else {
        div4.innerHTML = input4.checked;
        //div4.innerHTML = 'false';
    }
}

//task 5 --------------------
document.querySelector('.b-5').onclick = () => {
    let input5 = document.querySelector('.i-5'),
        div5 = document.querySelector('.out-5');

    if (input5.checked) {
        div5.innerHTML = `${input5.value}`;
    }
    else {
        div5.innerHTML = `${input5.checked}`;
    }
}

//task 6 --------------------
document.querySelector('.b-6').onclick = () => {
    // let input6 = document.querySelector('.i-6').value;
    alert(document.querySelector('.i-6').value);
}

//task 7 --------------------
document.querySelector('.b-7').onclick = () => {
    let input7 = document.querySelector('.i-7').value;

    if (input7.length >= 6) {
        alert(input7);
    }
    else {
        console.log('Пароль не может быть меньше 6 символов!')
    }
}

//task 8 --------------------
document.querySelector('.b-8').onclick = () => {
    document.querySelector('.out-8').innerHTML = `<br><input type="text" class="in-i-8" value="Hello world!"> <button class="in-b-8">button in Task-8</button>`;

    document.querySelector('.in-b-8').onclick = () => {
        alert(document.querySelector('.in-i-8').value);
    }
}

//task 9 --------------------
document.querySelector('.b-9').onclick = () => {
    let input9 = document.querySelector('.i-9');

    if (input9.checked) {
        alert(input9.value);
    }
    else {
        alert(input9.checked);
    }
}

//task 10 --------------------
document.querySelector('.b-10').onclick = () => {
    document.querySelector('.div-10').style.backgroundColor = document.querySelector('.i-10').value;
}

//task 11 --------------------
document.querySelector('.b-11').onclick = () => {
    document.querySelector('.i-112').value = document.querySelector('.i-111').value;
}

//task 12 --------------------
document.querySelector('.b-12').onclick = () => {
    document.querySelector('.out-12').innerHTML = document.querySelector('.i-12').value;
}

//task 13 -------------------
let input13 = document.querySelector('.i-13'),
    span13 = document.querySelector('.s-13'); // находит 1 раз и дальше использует (смысл нагружался браузер поиском этого СПАН и ИНПУТА). С ДИВ и Баттон такой необходимости нет так как  нет такого потока перезатирайний =)) такая логика =))

span13.innerHTML = input13.value; // зачем хардкодить в разметке ) сделаем вывод значение по умолчанию через JS =). КУРС ПРОСТО ПУШКА! СПАСИБО!!!! LICKE!!!! LICKE!!! LICKE!!!!

input13.oninput = () => {
    span13.innerHTML = input13.value;
}

document.querySelector('.b-13').onclick = () => {
    document.querySelector('.out-13').innerHTML = input13.value;
}

//task 14 -------------------
document.querySelector('.b-14').onclick = () => {
    document.querySelector('.out-14').innerHTML = `<p>${document.querySelector('.ta-14').value}</p>`;
}

//task 15 -------------------
document.querySelector('.b-15').onclick = () => {
    let input15 = document.querySelector('.i-15').value;

    document.querySelector('.ta-15').value = input15;
    document.querySelector('.out-15').innerHTML = input15; // вывод на страницу
}

//task 16 -------------------
document.querySelector('.b-16').onclick = () => {
    document.querySelector('.out-16').innerHTML = document.querySelector('.s-16').value;
}

//task 17 ------------------- Эту задачу пока не делаем!!!!!

//task 18 -------------------
document.querySelector('.s-18').onchange = () => {
    document.querySelector('.out-18').innerHTML = document.querySelector('.s-18').value;
}

//task 19 -------------------
document.querySelector('.b-19').onclick = (event) => {
    event.preventDefault();
    console.log(document.querySelector('.i-191').value + ' ' + document.querySelector('.i-192').value);
}

//task 20 -------------------
document.querySelector('.b-20').onclick = (event) => {
    event.preventDefault();

    let form20 = document.querySelector('.f-20');

    console.log(form20.elements.i201.value + ' ' + form20.elements.i202.value);
}