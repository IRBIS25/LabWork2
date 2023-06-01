//1 задание

function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(min(3,5));

//2 задание

let name = "Кирилл";
let admin;

admin = name;

console.log(admin);

//3 задание

function yourAge() {
    while (true) {
        let age = prompt('Укажите ваш возраст', 'Введите возраст');
        if (confirm('Вам ' + age + ' лет?')) {
            break;
        }
    } 
}

yourAge();

//-----------------------------------------

let lastName;

document.getElementById("change-last-name").addEventListener("click", change);

function change() {
    lastName = document.getElementById("last-name-input").value;
    document.getElementById("last-name").innerHTML = '<p class="last-name">' + lastName + '</p>';
    document.getElementById("last-name-input").value = '';
}

