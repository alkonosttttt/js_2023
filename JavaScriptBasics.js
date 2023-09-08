// num = 5;
// let name = "John";
// let admin;
// admin = name;
// alert(1/0);
//
// a = 1+2, 3+4;
// alert(a)

//#1
/*let result = prompt("Какое «официальное» название JavaScript?", );
name = "ECMAScript";
if (result === name) {
    alert("верно");
} else (alert("Не знаете? ECMAScript!"));*/

//#2
/*let result = prompt("введите число");
if (result > 0) {
    alert(1)
} else if (result < 0) {
    alert(-1);
} else (alert(0));*/

//#3
/*let name = prompt("кто там?");
if (name === null) {
    alert("отмена");
} else if (name === "админ") {
    let password = prompt("введите пароль")
    if (password === "я главный") {
        alert("Здравствуйте");
    } else if (password === null) {
        alert("отмена");
    } else if (!(password === "я главный")) {
        alert("неверный пароль");
    }
} else {
    alert("я вас не знаю");
}*/


//#4
/*let i=0;
for (;i<=10;i++) {
    if (i % 2 !== 0) continue
    alert(i);
}*/

//5
/*let i = 0
while (i<3) {
    alert(`number ${i}`);
    i++;
}*/

//6
/*let res = prompt('введите число больше 100');
while (res <= 100) {
    if (res === null) break
    res = prompt('введите число больше 100');
}*/

//7 не решено
/*let num = prompt('введите число');
next:
for(let i=2; i<=num; i++) {
    for(let j = 2; j<i; j++) {
        if (i % j == 0) continue next;
    }
    alert(i)
}*/

//8
/*function pow(x, n) {
    if (n>1 && n % 1 === 0) {
        let result = x;
        for (let i = 1; i<n; i++) {
            result = result*x;
        }
        console.log(result)
        return result;
    }
}

let x = prompt("x");
let n = prompt("n")
alert (pow(x,n));*/


//9
/*let browser = 'Firefox';
if (browser === 'Edge') {
    alert("You've got the Edge!")
} else if (browser === 'Edge' || browser === 'Chrome' || browser === 'Firefox'||browser === 'Safari') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}*/


//10
/*const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}*/

//11
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
     funk = () =>alert("Вы согласились."),
     funk = () =>alert("Вы отменили выполнение.")
);*/

//11.1
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    funk = () =>alert("Вы согласились."),
    funk = () =>alert("Вы отменили выполнение.")
);*/
