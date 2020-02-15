let divCity = document.querySelector('.app_city'),
    selectCantry = document.createElement('select'),
    selectCity = document.createElement('select');

selectCantry.classList.add('count');
selectCantry.style.display = 'block';

selectCity.classList.add('city');
selectCity.style.display = 'block';
selectCity.style.marginTop = '5px';
selectCity.style.width = '100%';

divCity.prepend(selectCantry);
selectCantry.after(selectCity);


app_city();

function app_city() {

    fetch('../unit_14_API/json/country.json')
        .then(function (resp) { return resp.json() })
        .then(function (countryObj) {
            const optionsCountry = document.getElementsByClassName('count-opt');

            if (optionsCountry.length > 0) {
                selectCantry.innerHTML = '';
            }

            for (let country in countryObj) {
                selectCantry.innerHTML += `<option class = "count-opt" value = "${country}" date = "${countryObj[country][1]}">${countryObj[country][0]}</option>`;
            }

            function cityList(select = selectCantry.value) {

                for (let country in countryObj) {
                    if (select == country) {
                        fetch(`/unit_14_API/json/${country}.json`)
                            .then(function (resp) { return resp.json() })
                            .then(function (cityObj) {
                                let pushCity = '',
                                    optionsCity = document.getElementsByClassName('city-opt');

                                if (optionsCity.length > 0) {
                                    for (let k = optionsCity.length; k >= 0; k--) {
                                        selectCity.innerHTML = '';
                                    }
                                }

                                let arrSort = [];

                                for (let x = 0; x < cityObj.length; x++) {
                                    arrSort.push(cityObj[x].name);
                                }

                                arrSort.sort();

                                for (let j = 0; j < arrSort.length; j++) {
                                    for (let k = 0; k < cityObj.length; k++) {
                                        if (arrSort[j] == cityObj[k].name) {
                                            pushCity += `<option class = "city-opt" value = "${cityObj[k].id}">${cityObj[k].name}</option>`;
                                        }
                                    }

                                }

                                selectCity.innerHTML = pushCity;

                                selectCity.value = countryObj[country][1];

                                dataOutput(countryObj[country][1])
                            })

                            .catch(function () {
                                // catch any errors
                            });
                        break;
                    }
                }
                selectCantry.onchange = () => {
                    cityList(selectCantry.value);
                }
            }
            cityList();
        })
        .catch(function () {
            // catch any errors
        });

}

function dataOutput(select = selectCity.value) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${select}&appid=2a2e00d554a25014b375d062cb5c760b`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.app__out_city').textContent = data.name;
            document.querySelector('.app__out_temp').innerHTML = `${Math.round(data.main.temp - 273)}&deg;`;
            document.querySelector('.app__out_icon').innerHTML = `<img src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png" width="150" height="150">`;


            selectCity.onchange = () => {
                dataOutput(selectCity.value);
            }
        })
        .catch(function () {
            // catch any errors
        });
    console.log(select);
}
dataOutput();
