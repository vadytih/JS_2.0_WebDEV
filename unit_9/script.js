// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1(h) {
    let u1 = document.querySelector('.u-1');
    u1.style.width = '200px';
    u1.style.height = `${h}px`;
}

func_1(100);

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    let u2 = document.querySelector('.u-2');

    u2.classList.add('css-1');
}

func_2();


// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

function func_3() {
    let u3 = document.getElementsByClassName('u-3');

    for (let i = 0; i < u3.length; i++) {
        u3[i].onclick = function () {
            this.style.backgroundColor = 'red';
        }
    }
}

func_3();

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

function func_4() {
    let u4 = document.getElementsByClassName('u-4');

    for (let i = 0; i < u4.length; i++) {
        u4[i].onclick = function () {
            this.classList.add('css-2');
        }
    }
}

func_4();

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

function func_5() {
    let u5 = document.getElementsByClassName('u-5');

    for (let i = 0; i < u5.length; i++) {
        u5[i].onclick = function () {
            this.classList.remove('css-3');
        }
    }
}

func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.

function func_6() {
    let u6 = document.querySelector('.u-6');

    u6.classList.toggle('active');
}

document.querySelector('.u-6').onclick = func_6;

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    let u7 = document.getElementsByClassName('css-3');

    return `${u7.length}`;
}

func_7();

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let u1 = document.getElementsByClassName('u-1');

    for (let i = 0; i < u1.length; i++) {
        u1[i].setAttribute(`title`, `test-data`);
    }
}

func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.

function func_9() {
    let u9 = document.getElementsByClassName('u-9');

    for (let i = 0; i < u9.length; i++) {
        u9[i].onclick = function () {
            console.log(`${this.getAttribute('data')}`);
            return this.getAttribute('data');
        }
    }
}

func_9();

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

function func_10() {
    let u10 = document.querySelectorAll('.u-10__button'),
        out = document.querySelector('.u-10__out');

    for (let i = 0; i < u10.length; i++) {
        u10[i].onclick = function () {
            let currenc = this.getAttribute('data-currency');

            switch (currenc) {
                case 'euro':
                    out.innerHTML = `<b>1.2</b>`;
                    break;
                case 'usd':
                    out.innerHTML = `<b>1</b>`;
                    break;
                case 'rub':
                    out.innerHTML = `<b>1.35</b> (100 rub)`;
            }
        }
    }
}

func_10();


// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

function func_11() {
    let u11 = document.getElementsByClassName('u-11__button'),
        out = document.querySelector('.u-11__out');

    for (let i = 0; i < u11.length; i++) {
        u11[i].onclick = function () {
            let currenc = this.getAttribute('data-currency'),
                input11 = +document.querySelector('.u-11__input').value;

            if (currenc == 'euro') {
                out.textContent = `${Math.floor(input11 / 1.2)} евро`;
            }
            else if (currenc == 'usd') {
                out.textContent = `${Math.floor(input11 * 1)} долл.`;
            }
            else if (currenc == 'rub') {
                out.textContent = `${Math.floor(input11 * 65)} руб.`;
            }
            else {
                console.log(`Такой валюты нет`);
            }
        }
    }
}

func_11();

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12(text) {
    let elem = document.createElement('div');

    elem.classList.add('css-4');
    elem.textContent = `${text}`;

    console.log(elem);

    return elem;
}

document.querySelectorAll('p')[24].append(func_12('Hi, Alex! Output Task № 12'));

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13(a) {
    let elem = document.createElement('span');

    elem.classList.add('span-13');
    elem.textContent = a;

    document.querySelector('.u-13').append(elem);
}

func_13(`13`);

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14(a) {
    let elem = document.createElement('span');

    elem.classList.add('span-14');
    elem.textContent = a;

    document.querySelector('.u-14').prepend(elem);
}

func_14('14');

// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15(a) {
    let elem = document.createElement('span');

    elem.classList.add('span-15');
    elem.textContent = a;

    document.querySelector('.u-15').before(elem);
}

func_15('15');

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16(buttonName, consoleText) {
    let button = document.createElement('button');

    button.classList.add('u-16');
    button.textContent = buttonName;

    button.onclick = () => {
        console.log(consoleText);
    }

    document.querySelector('.u-16__out').append(button);
}

func_16('Push', 'u-16');

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17(text) {
    let elem = document.createElement('p');

    elem.textContent = text;

    document.querySelector('.u-17').replaceWith(elem);
}

func_17('17');

// TASK 19. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

function func_18() {
    let u18 = document.getElementsByClassName('out-18');

    for (let i = 0; i < u18.length; i++) {
        u18[i].onclick = function () {
            return this.remove(this);
        }
    }
}

func_18()

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(text) {
    let elem = document.createElement('li');

    elem.textContent = text;

    document.querySelector('.u-19').append(elem);
}

func_19('текст');

// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

function func_20() {
    const ul_20 = document.querySelector('.u-20');

    let elem = document.createElement('div'),
        error;

    elem.innerHTML = `<input type="text" class="u-20_input_text" placeholder="Введите слово">`;
    elem.innerHTML += `<button class="u-20_button">Push</button>`;
    elem.innerHTML += `<label><input class="u-20_input_check" type="checkbox"><span>Важное</span></label>`,

        ul_20.before(elem);

    document.querySelector('.u-20_button').onclick = () => {
        let u20_li = document.createElement('li');

        let u20_check = document.querySelector('.u-20_input_check'),
            u20_text = document.querySelector('.u-20_input_text');

        if (u20_text.value.trim() === '') {

            if (document.querySelectorAll('.error-js').length == 0) {
                error = document.createElement('span');
                error.classList.add('error-js');
                error.style.border = "2px solid rgb(248, 73, 102)";
                error.style.padding = "5px 10px";
                error.style.marginLeft = "20px";
                error.style.color = "rgb(248, 73, 102)";
                error.innerHTML = `&#9668;&#9668;&#9668; Поле не может быть пустым`;

                elem.append(error);
            }

            u20_text.value = '';
        }
        else {
            if (document.querySelectorAll('.error-js').length > 0) {
                error.remove(error);
            }

            if (u20_check.checked) {
                u20_li.classList.add('css-5');
                u20_check.click();
            }

            u20_li.innerHTML = `<span>${u20_text.value}</span>`;

            ul_20.prepend(u20_li);

            u20_text.value = '';
        }

    }
}

func_20();





