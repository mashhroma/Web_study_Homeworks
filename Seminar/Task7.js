// Один покупатель старинных уникальных часов хочет приобрести для музея 
// двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
// ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
// бюджет. Необходимо выяснить получится ли это.
 
function f(clockArr, money) {
    for (let i = 0; i < clockArr.length - 1; i++) {
        for (let j = i + 1; j < clockArr.length; j++) {
            if (Math.round((clockArr[i] + clockArr[j]) * 100) / 100 == money) {
                return true;
            }
        }
    }
    return false;
}
 
console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true