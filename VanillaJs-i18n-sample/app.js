var init = function () {
    $.i18n.init({
        //lng: 'en-US',
        lng: 'ko-KR',
        debug: true,
        useLocalStorage: false,
        localStorageExpirationTime: 86400000, // in ms, default 1 week
        ns: {
            namespaces: ['A', 'B'],
            defaultNs: 'A'
        },
        //resGetPath: 'js/locales/translation.json'
        resStore: {
            "en-US": {
                "A": {
                    "apple": "Apple",
                    "banana": "Banana",
                    "orange": "Orange"
                },
                "B": {
                    "car": "Car",
                    "airplane": "Airplane",
                    "bicycle": "Bicycle"
                }
            },
            "ko-KR": {
                "A": {
                    "apple": "사과",
                    "banana": "바나나",
                    "orange": "오렌지"
                },
                "B": {
                    "car": "자동차",
                    "airplane": "비행기",
                    "bicycle": "자전거"
                }
            }
        }
    }, function () {
        console.log("translation !");
        $('.translation').i18n();
    });
}


var changeLang = function (lang) {
    $.i18n.setLng(lang);
    $('.translation').i18n();
}

init();
