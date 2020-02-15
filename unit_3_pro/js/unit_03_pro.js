// Task 1.
// Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль.
let a = 4;

if (a == 4) {
    console.log('Yas a = 4');
}
else {
    console.log('No a != 4');
}

// Task 2.
// Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.
let b = 10,
    c = 10;

if (b > c) {
    console.log('b = ' + b);
}
else if (c > b) {
    console.log('c = ' + c);
}
else {
    console.log('(c = ' + c + ')' + ' = ' + '(b = ' + b + ')' + ' => равенство');
}

// Task 3.
// Используя else if добавьте в предыдущую задачу проверку на равенство.

// Task 4.
// Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны".

function f4() {
    let input41 = +document.querySelector('.i-41').value,
        input42 = +document.querySelector('.i-42').value,
        div4 = document.querySelector('.out-4');

    if (input41 > input42) {
        div4.innerHTML = input41;
    }
    else if (input42 > input41) {
        div4.innerHTML = input42;
    }
    else {
        div4.innerHTML = `Равенство ${input41} = ${input42}`;
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
// Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения больше или равен 2000 - выводит в консоль возраст пользователя.

function f5() {
    let input5 = +document.querySelector('.i-5').value,
        div5 = document.querySelector('.out-5');

    if (input5 >= 2000 && input5 < 2015) {
        div5.innerHTML = `Тебе ${2019 - input5} лет. Поздравляю!`;
    }
    else if (input5 >= 2015 && input5 < 2018) {
        div5.innerHTML = `Тебе ${2019 - input5} года, малыш.`;
    }
    else if (input5 >= 2018 && input5 <= 2019) {
        div5.innerHTML = `Тебе ${2019 - input5} год, ляля.`;
    }
    else if (input5 > 2019) {
        div5.innerHTML = `Увы ты еще не родился`;
    }
    else {
        div5.innerHTML = `${input5} - введенный год рождения`;
    }
}

document.querySelector('.b-5').onclick = f5;

// Task 6.
// Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует.

function f6() {
    let input6 = +document.querySelector('.i-6').value,
        div6 = document.querySelector('.out-6');

    if (input6 >= 1 && input6 <= 32) {
        div6.innerHTML = `Квартира № ${input6} существует`;
    }
    else {
        div6.innerHTML = `Квартира № ${input6} не существует`
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число.

function f7() {
    let input7 = +document.querySelector('.i-7').value,
        div7 = document.querySelector('.out-7');

    if (input7 > 0) {
        div7.innerHTML = `Больше 0`;
    }
    else if (input7 < 0) {
        div7.innerHTML = `Меньше 0`;
    }
    else {
        div7.innerHTML = `Равнство`;
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % . И проверить. Если остаток от деления 0 - то число четное, если нет - не четное.

function f8() {
    let input8 = +document.querySelector('.i-8').value % 2,
        div8 = document.querySelector('.out-8');

    if (input8 == 0) {
        div8.innerHTML = `Четное`;
    }
    else {
        div8.innerHTML = `Не четное`;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9.
// Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите в степень из второго input. Результат выведите на страницу. Как возвести в степень? Читаем!

function f9() {
    let input91 = document.querySelector('.i-91').value,
        inpit92 = document.querySelector('.i-92').value,
        div9 = document.querySelector('.out-9');

    if (input91 != '' && inpit92 != '') {
        input91 = +input91;
        inpit92 = +inpit92;

        div9.innerHTML = Math.pow(input91, inpit92);
    }
    else {
        div9.innerHTML = `Оба поля должны быть заолнены числами`;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10.
// Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello...

function f10() {
    let input10 = document.querySelector('.i-10').value.trim();

    if (input10 == '') {
        alert('Имя нужнно обязательно!');
        input10 = document.querySelector('.i-10').value = '';
    }
    else {
        alert('Hello ' + input10);
    }
}

document.querySelector('.b-10').onclick = f10;

// Task 11.
// Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, если нет - сообщение с содержимым input.

// Task 12.
// Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. Для решения используйте switch.

function f12() {
    let input12 = +document.querySelector('.i-12').value,
        div12 = document.querySelector('.out-12');

    if (input12 >= 1 && input12 <= 3) {
        switch (input12) {
            case 1:
                div12.innerHTML = `Один`;
                break;
            case 2:
                div12.innerHTML = `Два`;
                break;
            case 3:
                div12.innerHTML = `Три`;
        }
    }
    else {
        div12.innerHTML = `Используй число от 1 до 3`;
        document.querySelector('.i-12').value = '';
    }
}

document.querySelector('.b-12').onclick = f12;

// Task 13.
// Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома.

function f13() {
    let input13 = +document.querySelector('.i-13').value,
        div13 = document.querySelector('.out-13');

    if (input13 >= 1 && input13 <= 5) {
        div13.innerHTML = `Улица 1`;
    }
    else if (input13 >= 6 && input13 <= 11) {
        div13.innerHTML = `Улица 2`;
    }
    else if (input13 >= 12 && input13 <= 20) {
        div13.innerHTML = `Улица 3`;
    }
    else {
        div13.innerHTML = `Такого дома нет`;
    }
}

document.querySelector('.b-13').onclick = f13;

// Task 14.
// Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. Больше 600 - смертность 100%. Вывод результатов сделайте на страницу.

function f14() {
    let input14 = +document.querySelector('.i-14').value,
        div14 = document.querySelector('.out-14');
    if (input14 >= 0 && input14 <= 1000) {
        if (input14 >= 0 && input14 <= 25) {
            div14.innerHTML = `не обнаруживается`;
        }
        else if (input14 > 25 && input14 <= 50) {
            div14.innerHTML = `снижение числа лимфоцитов`;
        }
        else if (input14 > 50 && input14 <= 100) {
            div14.innerHTML = `вялость, рвота`;
        }
        else if (input14 > 100 && input14 <= 150) {
            div14.innerHTML = `смертроность 5%`;
        }
        else if (input14 > 150 && input14 <= 350) {
            div14.innerHTML = `смертность 50% за 30 суток`;
        }
        else if (input14 > 350 && input14 <= 600) {
            div14.innerHTML = `смертность 90% за 2 недели`;
        }
        else if (input14 > 600) {
            div14.innerHTML = `смертность 100%`;
        }
        else { }
    }
    else {
        div14.innerHTML = `допустимое значение от 0 до 1000`;
    }
}
document.querySelector('.b-14').onclick = f14;

// Task 15.
// Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y.Изучите результат.

let x = 1,
    y = 0;

console.log(x && y);
console.log(x || y);

// Task 16.
// В Казахстане, налог на объем двигателя составляет:
function f16() {
    let input16 = document.querySelector('.i-16').value,
        div16 = document.querySelector('.out-16');

    if (input16 != '') {
        input16 = +input16;
        if (input16 >= 0) {
            if (input16 >= 0 && input16 <= 499) {
                div16.innerHTML = `2525 тенге`;
            }
            else if (input16 >= 500 && input16 <= 1199) {
                div16.innerHTML = `5050 тенге`;
            }
            else if (input16 >= 1200 && input16 <= 1599) {
                div16.innerHTML = `8275 тенге`;
            }
            else if (input16 >= 1600 && input16 <= 1899) {
                div16.innerHTML = `9675 тенге`;
            }
            else if (input16 >= 1900 && input16 <= 1999) {
                div16.innerHTML = `11075 тенге`;
            }
            else {
                div16.innerHTML = `15000 тенге`;
            }
        }
        else {
            div16.innerHTML = `Объем не может быть отритцательным`;
        }
    }
    else {
        div16.innerHTML = `Поле не может быть пустым. Ввидите объем`;
    }
}

document.querySelector('.b-16').onclick = f16;

// Task 17.
// Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.

function f17() {
    let input17 = +document.querySelector('.i-17').value,
        select17 = document.querySelector('.s-17').value,
        div17 = document.querySelector('.out-17');

    if (select17 == 'usd') {
        div17.innerHTML = `${input17 / 2.0457}`;
    }
    else if (select17 == 'eur') {
        div17.innerHTML = `${input17 / 2.2646}`;
    }
    else if (select17 == 'uah') {
        div17.innerHTML = `${input17 / 8.4482 * 100}`;
    }
    else {
        div17.innerHTML = `Не допустимое значение.`;
    }
}

document.querySelector('.b-17').onclick = f17;

// Task 18.
// Проделайте предыдущую задачу с помощью switch case.

function f18() {
    let input18 = +document.querySelector('.i-18').value,
        select18 = document.querySelector('.s-18').value,
        div18 = document.querySelector('.out-18');

    switch (select18) {
        case 'usd':
            div18.innerHTML = `${input18 / 2.0457}`;
            break;
        case 'eur':
            div18.innerHTML = `${input18 / 2.2646}`;
            break;
        case 'uah':
            div18.innerHTML = `${input18 / 8.4482 * 100}`;
            break;
        default:
            div17.innerHTML = `Не допустимое значение.`;
    }
}

document.querySelector('.b-18').onclick = f18;

// Task 19.
// Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.

function f19() {
    let input191 = +document.querySelector('.i-191').value,
        input192 = +document.querySelector('.i-192').value,
        select19 = document.querySelector('.s-19').value,
        div19 = document.querySelector('.out-19');

    if (select19 == '+') {
        div19.innerHTML = input191 + input192;
    }
    else if (select19 == '-') {
        div19.innerHTML = input191 - input192;
    }
    else if (select19 == '*') {
        div19.innerHTML = input191 * input192;
    }
    else if (select19 == '/') {
        div19.innerHTML = input191 / input192;
    }
    else {
        div19.innerHTML = `Не верное значение`;
    }
}

document.querySelector('.b-19').onclick = f19;

// Task 20.
// Проделайте предыдущую задачу с помощью switch case.

function f20() {
    let input201 = +document.querySelector('.i-201').value,
        input202 = +document.querySelector('.i-202').value,
        select20 = document.querySelector('.s-20').value,
        div20 = document.querySelector('.out-20');

    switch (select20) {
        case '+':
            div20.innerHTML = input201 + input202;
            break;
        case '-':
            div20.innerHTML = input201 - input202;
            break;
        case '*':
            div20.innerHTML = input201 * input202;
            break;
        case '/':
            div20.innerHTML = input201 / input202;
            break;
        default:
            div19.innerHTML = `Не верное значение`;
    }
}

document.querySelector('.b-20').onclick = f20;