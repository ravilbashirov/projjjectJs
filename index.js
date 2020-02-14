let money = prompt('Ваш бюджет на месяц?', '');
console.log(money)
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
console.log(time)

let appData = {
    bugjet: money,
    timeData: time,
    expenses: {"a" : "b"},
    optionalExpenses : {},
    income : [],
    savings: false,   
}   

let a = prompt(' Введите обязательную статью расходов в этом месяце','');
    b = prompt('Во сколько обойдется?','');
    c = prompt('Во сколько обойдется?','');
    d = prompt('Во сколько обойдется?','');

appData.expenses.a = b;
appData.expenses.c = d;

alert(appData.bugjet/30)

