// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
// <script>
// let product = "Бананы";

// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>

const product = "Бананы";

switch (key) {
    case "Мандарины":
        alert('Мандарины стоят 100 руб/кг.');
        break;
    case "Бананы":
    case "Груши":
        alert('Бананы и груши стоят 70 руб/кг.');
        break;
    default:
        alert('Нет такого продукта.');
        break;
}