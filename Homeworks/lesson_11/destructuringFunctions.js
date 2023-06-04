// Необходимо написать функцию получения ФИО курьера. Параметры принимаем через деструктуринг. Объект courier имеет поля name, surname, patronymic, age, city.
// *Вместо объекта, принимаем массив объектов. **У курьера может не быть отчества
const couriers = [
    {
        name: 'Адольф',
        surname: 'Гитлер',
        age: 134,
        city: 'Росарио'
    },
    {
        name: 'Наполеон',
        surname: 'Бонапарт',
        age: 253,
        city: 'Лонгвуд'
    },
    {
        name: 'Карл',
        surname: 'XII',
        patronymic: 'Карлович',
        age: 340,
        city: 'Халден'
    }
];

const getCourierName = (couriers) => {
    return couriers.map(({name, surname, patronymic}) => {
        if (patronymic) {
            return `${surname} ${name} ${patronymic}`;
        } else return `${surname} ${name}`;
    })
}

console.log(getCourierName(couriers));

//Сделать функцию-конвертер для массива, где первым элементом идет категория, а потом идут элементы категории.

const convert = (exArray) => {
    const [key, ...values] = exArray;
    return {
        [key] : [...values]
    }
}

console.log(convert(['ages', 11, 22, 46]));

//Написать функцию, которая находит максимальное значение. Аргументов может быть произвольное количество.

const getMax = (...numbers) => {
    return Math.max(...numbers);
}

console.log(getMax(1, 15, 2, 100, 7));

//Реализовать функцию, которая определяет палиндромы. Функция принимает одно слово и возвращает true,
// если слово является палиндромом (подсказка: к строке тоже можно применить spread-оператор, метод reverse разрешён)
//Задание со звёздочкой: функция может принимать фразы

function isPalindrom(sameString) {
    const cleanString = sameString.replaceAll(' ', '').toLowerCase();
    const reversedString = [...cleanString].reverse().join('');
    return cleanString === reversedString;
}

console.log(isPalindrom("а роза упала на лапу Азора"))