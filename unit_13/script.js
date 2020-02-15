// task 1 --------------------
const a1 = {
    3: 'hello',
    'one': 'hi'
};

const button_1 = document.querySelector('.task-1'),
    elem_1 = document.createElement('div');

button_1.after(elem_1);

function f1(obj, out) {
    out.style.marginTop = '10px';

    out.innerHTML = '';

    for (let key in obj) {
        out.innerHTML += `${key} - ${obj[key]}<br>`;
    }
}

button_1.onclick = () => {
    f1(a1, elem_1);
}

// task 2 --------------------
const a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

const button_2 = document.querySelector('.task-2'),
    elem_2 = document.createElement('div');

button_2.after(elem_2);

function f2(obj, out) {
    out.textContent = '';
    out.style.marginTop = '10px';

    out.innerHTML = '';

    for (let key in obj) {
        if (obj[key].length > 4) {
            out.innerHTML += `${obj[key]}<br>`;
        }
    }
}

button_2.onclick = () => {
    f2(a2, elem_2);
}

// task 3 --------------------
const a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov',
};

const button_3 = document.querySelector('.task-3'),
    elem_3 = document.createElement('div');

button_3.after(elem_3);

function f3(obj, out) {
    out.textContent = '';
    out.style.marginTop = '10px';

    for (let key in obj) {
        if (key.length > 4) {
            out.innerHTML += `${key} - ${obj[key]}<br>`;
        }
    }
}

button_3.onclick = () => {
    f3(a3, elem_3);
}

// task 4 --------------------
const a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6,
};

const button_4 = document.querySelector('.task-4'),
    elem_4 = document.createElement('div');

button_4.after(elem_4);

function f4(obj, out) {
    out.textContent = '';
    out.style.marginTop = '10px';

    for (let key in obj) {
        if (!isNaN(obj[key])) {
            out.innerHTML += `${key} - ${obj[key]}<br>`;
        }
    }
}

button_4.onclick = () => {
    f4(a4, elem_4);
}

// task 5 --------------------
const a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};

const button_5 = document.querySelector('.task-5'),
    elem_5 = document.createElement('div');

button_5.after(elem_5);

function f5(obj, out) {
    out.style.marginLeft = '20px';
    out.style.display = 'inline';

    let pushX = 0;

    for (let key in obj) {
        pushX += obj[key];
    }

    out.textContent = pushX;
}

button_5.onclick = () => {
    f5(a5, elem_5);
}

// task 6 --------------------
const a6 = {
    'name': 'Исус',
    'age': 33,
    'sex': 'мужской',
    'height': '182 см',
};

const button_6 = document.querySelector('.task-6'),
    elem_6 = document.createElement('div');

button_6.after(elem_6);

function f6(obj, out) {
    out.textContent = '';
    out.style.marginTop = '10px';

    for (let key in obj) {
        out.innerHTML += `${key} -- ${obj[key]}<br>`;
    }
}

button_6.onclick = () => {
    f6(a6, elem_6);
}

// task 7 --------------------
const a7 = {};

const button_7 = document.querySelector('.task-7'),
    input_71 = document.createElement('input'),
    input_72 = document.createElement('input'),
    elem_7 = document.createElement('div');

button_7.textContent = 'enter';

input_71.classList.add('u7-key__input');
input_71.setAttribute = 'type';
input_71.type = 'text';
input_71.setAttribute = 'placeholder';
input_71.placeholder = 'key';

input_72.classList.add('u7-value__input');
input_72.setAttribute = 'type';
input_72.type = 'text';
input_72.setAttribute = 'placeholder';
input_72.placeholder = 'value';
input_72.style.marginLeft = '5px';

button_7.before(input_72);
input_72.before(input_71);
button_7.after(elem_7);

function f7(obj, inputKey, inputValue, out) {
    out.style.marginTop = '10px';
    out.textContent = '';

    let iKey = inputKey.value,
        iValue = inputValue.value;

    if (iKey.trim() != '' && iValue.trim() != '') {
        obj[iKey] = `${iValue}`;
    }

    for (let key in obj) {
        out.innerHTML += `${key}: ${obj[key]}<br>`;
    }

    inputKey.value = '';
    inputValue.value = '';
}

button_7.onclick = () => {
    f7(a7, input_71, input_72, elem_7);
}

// task 8 --------------------
const button_8 = document.querySelector('.task-8'),
    input_8 = document.createElement('input');

button_8.textContent = `Delete by key`;

input_8.classList.add('u8-key__input');
input_8.setAttribute = 'type';
input_8.type = 'text';
input_8.setAttribute = 'placeholder';
input_8.placeholder = 'key';

button_8.before(input_8);

function f8(obj, input, out) {
    out.textContent = '';

    let iKey = input.value;

    if (iKey.trim() != '') {
        for (let key in obj) {
            if (iKey == key) {
                delete obj[key];
                input.value = '';
            }
            else {
                input.value = '';
            }
        }

        for (let key in obj) {
            out.innerHTML += `${key}: ${obj[key]}<br>`;
        }
    }
    else {
        input.value = '';

        for (let key in obj) {
            out.innerHTML += `${key}: ${obj[key]}<br>`;
        }
    }
}

button_8.onclick = () => {
    f8(a7, input_8, elem_7);
}

// task 9 --------------------
const button_9 = document.querySelector('.task-9'),
    input_9 = document.createElement('input');

button_9.textContent = `Delete by value`;

input_9.classList.add('u9-delete-value__input');
input_9.setAttribute = 'type';
input_9.type = 'text';
input_9.setAttribute = 'placeholder';
input_9.placeholder = 'value';

button_9.before(input_9);

function f9(obj, input, out) {
    out.textContent = '';

    let iValue = input.value;

    if (iValue.trim() != '') {
        for (let key in obj) {
            if (iValue == obj[key]) {
                delete obj[key];
                input.value = '';
            }
            else {
                input.value = '';
            }
        }

        for (let key in obj) {
            out.innerHTML += `${key}: ${obj[key]}<br>`;
        }
    }
    else {
        input.value = '';

        for (let key in obj) {
            out.innerHTML += `${key}: ${obj[key]}<br>`;
        }
    }
}

button_9.onclick = () => {
    f9(a7, input_9, elem_7);
};

// task 10 --------------------
const button_10 = document.querySelector('.task-10'),
    input_10 = document.createElement('input'),
    elem_10 = document.createElement('div');

button_10.textContent = `Validate by key`;

input_10.classList.add('u10-has-key__input');
input_10.setAttribute = 'type';
input_10.type = 'text';
input_10.setAttribute = 'placeholder';
input_10.placeholder = 'key';

elem_10.style.display = 'inline';
elem_10.style.marginLeft = '20px';

button_10.before(input_10);
button_10.after(elem_10);

function f10(obj, input, out) {
    if (input.value.trim() != '') {
        for (let key in obj) {
            if (input.value == key) {
                out.textContent = 'true';

                input.placeholder = input.value;

                input.value = '';

                break;
            }
            else {
                out.textContent = 'false';

                input.placeholder = input.value;
            }
        }
        input.value = '';
    }
    else {
        out.textContent = '';

        input.value = '';

        input.placeholder = 'key';
    }
}

button_10.onclick = () => {
    f10(a7, input_10, elem_10);
}

// task 11 --------------------
a11 = {
    'red': ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Полетехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатки', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная'],
    'green': ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],
    'blue': ['Героев Днепра', 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Площадь Независимости', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец Украина', 'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки'],
}

const button_11 = document.querySelector('.task-11'),
    elem_11 = document.createElement('div');

button_11.after(elem_11);

function f11(obj, out) {
    for (let key in obj) {
        out.innerHTML += `<hr><ul><b>${key}</b></ul>`;

        for (let i = 0; i < obj[key].length; i++) {
            out.innerHTML += `<li>${obj[key][i]}</li>`;
        }
    }
}

button_11.onclick = () => {
    f11(a11, elem_11);
}

// task 12 --------------------
const button_12 = document.querySelector('.task-12'),
    select_12 = document.createElement('select'),
    elem_12 = document.createElement('div'),
    button_reverse = document.createElement('button');

button_12.textContent = 'Go';
button_reverse.textContent = 'reverse';

select_12.classList.add('u12-branch');

button_12.before(select_12);
button_12.after(button_reverse);
button_reverse.after(elem_12);

for (let key in a11) {
    select_12.innerHTML += `<option value = '${key}'>${key}</option>`;
}

function f12(obj, select, out) {
    for (let key in obj) {
        if (select.value == key) {
            out.innerHTML = `<ul class = 'ul-task-12'><b>${key}</b></ul>`;
            for (let i = 0; i < obj[key].length; i++) {
                out.innerHTML += `<li class = 'li-task-12'>${obj[key][i]}</li>`;
            }

            document.querySelector('.ul-task-12').style.color = `${key}`;
            document.querySelector('.ul-task-12').style.textTransform = `capitalize`;
            break;
        }
    }
}

button_12.onclick = () => {
    f12(a11, select_12, elem_12);
}

button_reverse.onclick = () => {
    f13(a11, select_12, elem_12);
}

// task 13 --------------------
const button_13 = document.querySelector('.task-13');

button_13.textContent = 'reverse';

function f13(obj, select, out) {
    const newArr = [];

    for (let key in obj) {
        if (select.value == key) {
            for (let i = obj[key].length - 1; i >= 0; i--) {
                newArr.push(obj[key][i]);
            }

            out.innerHTML = `<ul class = 'ul-task-13'><b>${key}</b></ul>`;

            document.querySelector('.ul-task-13').style.color = `${key}`;
            document.querySelector('.ul-task-13').style.textTransform = `capitalize`;

            break;
        }

        delete newArr;
    }

    for (let i = 0; i < newArr.length; i++) {
        out.innerHTML += `<li class = 'li-task-12 js-revers'>${newArr[i]}</li>`;
    }
}

button_13.onclick = () => {
    f13(a11, select_12, elem_12);
}

// task 14 --------------------
const button_14 = document.querySelector('.task-14'),
    select_14 = document.createElement('select'),
    elem_14 = document.createElement('div'),
    select_14_arr = [];

select_14.classList.add('u14-find-station');
elem_14.classList.add('out-14');
elem_14.style.marginLeft = '20px';
elem_14.style.display = 'inline';

for (let key in a11) {
    for (let i = 0; i < a11[key].length; i++) {
        select_14_arr.push(a11[key][i]);
    }
}

select_14_arr.sort();

for (let i = 0; i < select_14_arr.length; i++) {
    select_14.innerHTML += `<option value = '${select_14_arr[i]}'>${select_14_arr[i]}</option>`;
}

button_14.before(select_14);
button_14.after(elem_14);

function f14(obj, select, out) {
    for (let key in obj) {
        for (let i = 0; i < obj[key].length; i++) {
            if (select.value == obj[key][i]) {
                out.textContent = key;
                out.style.color = `${key}`;

                break;
            }
        }
    }
}

button_14.onclick = () => {
    f14(a11, select_14, elem_14)
}

// task 15 --------------------
const button_15 = document.querySelector('.task-15'),
    select_151 = document.createElement('select'),
    select_152 = document.createElement('select'),
    elem_15 = document.createElement('div');

button_15.textContent = 'Go';

elem_15.style.display = 'inline';
elem_15.style.marginLeft = '20px';

select_152.style.marginLeft = '2px';

for (let i = 0; i < select_14_arr.length; i++) {
    select_151.innerHTML += `<option value = '${select_14_arr[i]}'>${select_14_arr[i]}</option>`;
    select_152.innerHTML += `<option value = '${select_14_arr[i]}'>${select_14_arr[i]}</option>`;
}

button_15.before(select_152);
select_152.before(select_151);
button_15.after(elem_15);

function f15(obj, select1, select2, out) {
    const obj_1 = {
        'key': null,
        'arr_num': null,

    },
        obj_2 = {
            'key': null,
            'arr_num': null,
        };

    for (let key in obj) {
        for (let i = 0; i < obj[key].length; i++) {
            if (select1.value == obj[key][i]) {
                obj_1.key = key;
                obj_1.arr_num = i;
            }

            if (select2.value == obj[key][i]) {
                obj_2.key = key;
                obj_2.arr_num = i;
            }
        }
    }

    if (obj_1.key == obj_2.key) {
        if (obj_1.arr_num > obj_2.arr_num) {
            out.textContent = `${obj_1.arr_num - obj_2.arr_num - 1}`;
            out.style.color = `${obj_1.key}`;
        }
        else if (obj_2.arr_num > obj_1.arr_num) {
            out.textContent = `${obj_2.arr_num - obj_1.arr_num - 1}`;
            out.style.color = `${obj_2.key}`;
        }
        else {
            out.textContent = 'Выбрана одна и таже станция';
            out.style.color = `${obj_1.key}`;
        }
    }
    else {
        out.textContent = 'Разные ветки';
        out.style.color = 'black';
    }
}

button_15.onclick = () => {
    f15(a11, select_151, select_152, elem_15);
}

// task 16 --------------------
const button_16 = document.querySelector('.task-16'),
    elem_16 = document.createElement('div'),
    select_16 = document.createElement('select');

elem_16.style.display = 'inline-block';

select_16.classList.add('u16-select');
select_16.style.minWidth = '190px';

for (let key in a11) {
    elem_16.innerHTML += `<label class = 'lab-task-16'><input type = 'radio' class = 'u16-radio' name = 'line' value = '${key}'</label><span>${key}</span>`;
}

button_16.replaceWith(elem_16);
elem_16.before(select_16);

const radioButton = document.getElementsByName('line'),
    label = document.getElementsByClassName('lab-task-16');

for (let i = 0; i < label.length; i++) {
    label[i].style.marginLeft = '10px';
}

function f16(obj, radio, out) {
    const option = document.querySelectorAll('.option-task-16');

    if (option.length > 0) {
        for (let i = 0; i < option.length; i++) {
            option[i].remove();
        }
    }

    for (let key in obj) {
        if (radio.value == key) {
            for (let i = 0; i < obj[key].length; i++) {
                out.innerHTML += `<option class = 'option-task-16'>${obj[key][i]}</option>`;
            }
        }
    }
}

for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].onclick = function () {
        f16(a11, this, select_16);
    }
}

radioButton[0].click();

// task 17 --------------------
const a17 = {
    'red': [['Академгородок', 0], ['Житомирская'], ['Святошин'], ['Нивки'], ['Берестейская'], ['Шулявская'], ['Полетехнический институт'], ['Вокзальная'], ['Университет'], ['Театральная', 1, ['green', 3]], ['Крещатки', 1, ['blue', 7]], ['Арсенальная'], ['Днепр'], ['Гидропарк'], ['Левобережная'], ['Дарница'], ['Черниговская'], ['Лесная', 0]],
    'green': [['Сырец', 0], ['Дорогожичи'], ['Лукьяновская'], ['Золотые ворота', 1, ['red', 9]], ['Дворец спорта', 1, ['blue', 8]], ['Кловская'], ['Печерская'], ['Дружбы народов'], ['Выдубичи'], ['Славутич'], ['Осокорки'], ['Позняки'], ['Харьковская'], ['Вырлица'], ['Бориспольская'], ['Красный хутор', 0]],
    'blue': [['Героев Днепра', 0], ['Минская'], ['Оболонь'], ['Почайна'], ['Тараса Шевченко'], ['Контрактовая площадь'], ['Почтовая площадь'], ['Площадь Независимости', 1, ['red', 9]], ['Площадь Льва Толстого', 1, ['green', 4]], ['Олимпийская'], ['Дворец Украина'], ['Лыбедская'], ['Демиевская'], ['Голосеевская'], ['Васильковская'], ['Выставочный центр'], ['Ипподром'], ['Теремки', 0]],
};

const button_17 = document.querySelector('.task-17'),
    elem_17 = document.createElement('div');

button_17.after(elem_17);

function f17(obj, out) {
    out.textContent = '';

    for (let key in obj) {
        out.innerHTML += `<hr><ul style = 'color: ${key}'><b>${key}</b></ul>`;
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i].length > 1) {
                if (obj[key][i][1] == 0) {
                    out.innerHTML += `<li style = 'color: ${key}'>${obj[key][i][0]} - <b>(конечная)</b></li>`;
                }
                else if (obj[key][i][1] == 1) {
                    out.innerHTML += `<li style = 'color: ${key}'><b>${obj[key][i][0]}</b> - <span style = 'color: ${obj[key][i][2][0]}'><b>${obj[obj[key][i][2][0]][obj[key][i][2][1]][0]}</b></span></li>`;
                }
                else {
                    alert('Ошибка! Сообщите администратору!');
                }
            }
            else {
                out.innerHTML += `<li style = 'color: ${key}'>${obj[key][i][0]}</li>`;
            }
        }
    }
}

button_17.onclick = () => {
    f17(a17, elem_17);
}

// task 18 --------------------
const button_18 = document.querySelector('.task-18'),
    elem_18 = document.createElement('div');

button_18.after(elem_18);

function f18(obj, out) {
    out.innerHTML = '<ul><b>Cтанции с переходами</b></ul>';

    for (let key in obj) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i][1] == 1) {
                out.innerHTML += `<li>${obj[key][i][0]}</li>`;
            }
        }
    }

}

button_18.onclick = () => {
    f18(a17, elem_18);
}

// task 19 --------------------
const a19 = {
    'Azerbaijan': {
        'capital': 'Baku',
        'population': 9565000,
        'area': 86600,
    },
    'Armenia': {
        'capital': 'Yerevan',
        'population': 3262200,
        'area': 29800,
    },
    'Bahrain': {
        'capital': 'Manama',
        'population': 791000,
        'area': 665,
    },
    'Georgia': {
        'capital': 'Tbilisi',
        'population': 4114400,
        'area': 69700,
    },
    'Israel': {
        'capital': 'Jerusalem',
        'population': 7746000,
        'area': 20770 + 22072,
    },
    'Jordan': {
        'capital': 'Amman',
        'population': 6316000,
        'area': 92300,
    },
    'Iraq': {
        'capital': 'Baghdad',
        'population': 30747000,
        'area': 437072,
    },
    'Iran': {
        'capital': 'Tehran',
        'population': 1648000,
        'area': 74196000,
    },
    'Yemen': {
        'capital': 'Sana',
        'population': 23580000,
        'area': 527970,
    },
    'Qatar': {
        'capital': 'Doha',
        'population': 1409000,
        'area': 11437,
    },
    'Cyprus': {
        'capital': 'Nicosia',
        'population': 801851,
        'area': 9250,
    },
    'Kuwait': {
        'capital': 'Kuwait-city',
        'population': 2985000,
        'area': 17818,
    },
    'Lebanon': {
        'capital': 'Beirut',
        'population': 4224000,
        'area': 10452,
    },
    'United Arab  Emirates': {
        'capital': 'abu-dhabi',
        'population': 4599000,
        'area': 83600,
    },
    'Oman': {
        'capital': 'Muscat',
        'population': 2845000,
        'area': 309500,
    },
    'Saudi Arabia ': {
        'capital': 'Riyadh',
        'population': 25721000,
        'area': 2218000,
    },
    'Syria': {
        'capital': 'Damascus',
        'population': 21906000,
        'area': 185180,
    },
    'Turkey': {
        'capital': 'Ankara',
        'population': 73723000,
        'area': 780580,
    },
    'Afghanistan': {
        'capital': 'Kabul',
        'population': 28150000,
        'area': 647500,
    },
    'Kazakhstan': {
        'capital': 'Astana',
        'population': 16593000,
        'area': 2724900,
    },
    'Kyrgyzstan': {
        'capital': 'Bishkek',
        'population': 5482000,
        'area': 198500,
    },
    'Tajikistan': {
        'capital': 'Dushanbe',
        'population': 6952000,
        'area': 143100,
    },
    'Turkmenia': {
        'capital': 'Ashgabat',
        'population': 5110000,
        'area': 491200,
    },
    'Uzbekistan': {
        'capital': 'Tashkent',
        'population': 28639000,
        'area': 447400,
    },
    'Bangladesh': {
        'capital': 'Dhaka',
        'population': 162221000,
        'area': 144000,
    },
    'Bhutan': {
        'capital': 'Thimphu',
        'population': 697000,
        'area': 47000,
    },
    'India': {
        'capital': 'new-Delhi',
        'population': 1217831000,
        'area': 3287590,
    },
    'Maldives': {
        'capital': 'Male',
        'population': 309000,
        'area': 298,
    },
    'Nepal': {
        'capital': 'Katmandu',
        'population': 29331000,
        'area': 140800,
    },
    'Pakistan': {
        'capital': 'Islamabad',
        'population': 173949000,
        'area': 803940,
    },
    'Sri-lanka': {
        'capital': 'Sri-Jayawardenepura-Kotte',
        'population': 20238000,
        'area': 65610,
    },
    'China': {
        'capital': 'Beijing',
        'population': 1347290000,
        'area': 9596960,
    },
    'Democratic Peoples Republic Of Korea': {
        'capital': 'Pyongyang',
        'population': 24051706,
        'area': 120540,
    },
    'Republic of korea': {
        'capital': 'Seoul',
        'population': 49773145,
        'area': 99274,
    },
    'Mongolia': {
        'capital': 'Ulaanbaatar',
        'population': 2671000,
        'area': 1564116,
    },
    'Russia': {
        'capital': 'Moscow',
        'population': 141900000 + 37600000,
        'area': 17098246 + 13119600,
    },
    'Japan': {
        'capital': 'Tokyo',
        'population': 127960000,
        'area': 377835,
    },
    'Brunei': {
        'capital': 'Bandar-Seri-Begawan',
        'population': 400000,
        'area': 5770,
    },
    'Vietnam': {
        'capital': 'Hanoi',
        'population': 85789573,
        'area': 329560,
    },
    'Indonesia': {
        'capital': 'Jakarta',
        'population': 231369500,
        'area': 1919460,
    },
    'Cambodia': {
        'capital': 'Phnom Penh',
        'population': 14805000,
        'area': 181040,
    },
    'Laos': {
        'capital': 'Vientiane',
        'population': 6320000,
        'area': 236800,
    },
    'Malaysia': {
        'capital': 'Kuala lumpur',
        'population': 28306700,
        'area': 329758,
    },
    'Myanmar': {
        'capital': 'Nay Pyi Taw',
        'population': 50020000,
        'area': 678500,
    },
    'Singapore': {
        'capital': 'Singapore',
        'population': 4987600,
        'area': 692.7,
    },
    'Thailand': {
        'capital': 'Bangkok',
        'population': 63525062,
        'area': 514000,
    },
    'East Timor': {
        'capital': 'Dili',
        'population': 1134000,
        'area': 15007,
    },
    'Philippines': {
        'capital': 'Manila',
        'population': 102000000,
        'area': 300000,
    },
    'Waziristan': {
        'capital': 'Van',
        'population': 791087,
        'area': 11585,
    },
    'The Shan Sta te': {
        'capital': 'Taunggyi',
        'population': 4702000,
        'area': 155800,
    },
    'Abkhazia': {
        'capital': 'Sukhumi',
        'population': 242862,
        'area': 8598,
    },
    'Azad Kashmir ': {
        'capital': 'Muzaffarabad',
        'population': 4567982,
        'area': 13297,
    },
    'State Of Palestine': {
        'capital': 'Ramallah',
        'population': 4016416,
        'area': 6020,
    },
    'Turkish Repu blic Of Northern Cyprus': {
        'capital': 'Lefkosa',
        'population': 200000,
        'area': 3355,
    },
    'Republic Of  South Ossetia': {
        'capital': 'Tskhinvali',
        'population': 72000,
        'area': 3900,
    },
};

const button_19 = document.querySelector('.task-19'),
    elem_19 = document.createElement('div');

elem_19.style.marginTop = '10px';

button_19.after(elem_19);

function f19(obj, out) {
    out.textContent = '';
    // Вывд будет по веншую... в алфовитном порядке! 
    let pushX = '';
    const pushY = [];

    for (let cantry in obj) {
        pushX += `<b>${cantry}</b>: `;

        for (let info in obj[cantry]) {
            pushX += `${info}: ${obj[cantry][info]}, `;
        }

        pushX = pushX.split([]);
        pushX.length = pushX.length - 2; // убираю из сформированной строкри крайнею запятую и пробел - могу а, значит надо ДЛЯ КРАСОТЫ =) 
        pushX = pushX.join('');

        pushY.push(`<span>${pushX}</span>`);

        pushX = '';
    }

    pushY.sort();

    for (let i = 0; i < pushY.length; i++) {
        out.innerHTML += `${pushY[i]}<br>`;
    }
}

button_19.onclick = () => {
    f19(a19, elem_19);
}

// task 20 --------------------
const button_20 = document.querySelector('.task-20'),
    select_20 = document.createElement('select'),
    elem_20 = document.createElement('div');

elem_20.style.marginTop = '10px';

function pushInSelect(obj, out) {
    const pushX = [];
    let pushY = '';

    for (let key in obj) {
        pushX.push(key);
    }

    pushX.sort();

    for (let i = 0; i < pushX.length; i++) {
        pushY += `<option value = '${pushX[i]}'>${pushX[i]}</option>`;
    }

    out.innerHTML = pushY;

    pushX.length = 0; // думаю это должно освобождать немного памяти на слуай если вдруг список былбы намного больше ... верный ход?
    pushY = null;
}

pushInSelect(a19, select_20);

button_20.before(select_20);
button_20.after(elem_20);

function f20(obj, select, out) {
    out.textContent = '';
    let pushX = '',
        numX,
        x = 0,
        y = 3,
        z = 3;

    for (let key in obj) {
        if (select.value == key) {
            pushX += (`<h3>${key}</h3>`);

            for (let info in obj[key]) {
                if (info == 'area') {
                    numX = `${obj[key][info]}`;
                    numX = numX.split([]);

                    for (let i = numX.length - 1; i > 0; i -= 3) {
                        x -= z++;

                        numX.splice(x, 0, ' ');
                    }

                    numX = numX.join('');

                    numX = numX.trim();

                    pushX += (`<sapn style = 'text-transform: capitalize;'>${info}: ${numX} <span style = 'text-transform: lowercase;'>km</span><span style = 'font-size: 11px; vertical-align: top;'>2</span></span><br>`);

                    numX = null;
                    x = 0;
                    z = 0;
                }
                else if (info == 'population') {
                    numX = `${obj[key][info]}`;
                    numX = numX.split([]);

                    for (let i = numX.length - 1; i > 0; i -= 3) {
                        x -= y++;

                        numX.splice(x, 0, ' ');
                    }

                    numX = numX.join('');

                    numX = numX.trim();

                    pushX += (`<sapn style = 'text-transform: capitalize;'>${info}: ${numX} <span style = 'text-transform: lowercase;'>people</span></span><br>`);

                    numX = null;
                    x = 0;
                    y = 0;
                }
                else {
                    pushX += (`<sapn style = 'text-transform: capitalize;'>${info}: ${obj[key][info]}</span><br>`);
                }
            }

            break;
        }
    }

    out.innerHTML += pushX;

    pushX = '';
}

button_20.onclick = () => {
    f20(a19, select_20, elem_20);
}