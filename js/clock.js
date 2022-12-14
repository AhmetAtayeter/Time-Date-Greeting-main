let yourName = prompt("Adiniz nedir?");
let input = document.querySelector("#myName")
input.innerHTML = `${yourName}`

let day = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()
let hour = new Date().getHours()
let minute = new Date().getMinutes()
let second = new Date().getSeconds()
let day2 = new Date().getUTCDay()
if (day2 == 1) {
    day2 = 'Pazartesi'
}else if(day2 == 2){
    day2 = 'Salı'
}else if(day2 == 3){
    day2 = 'Çarşamba'
}else if(day2 == 4){
    day2 = 'Perşembe'
}else if(day2 == 5){
    day2 = 'Cuma'
}else if(day2 == 6){
    day2 = 'Cumartesi'
}else if(day2 == 7){
    day2 = 'Pazar'
}
if (month < 10){
    month = "0" + month
}
if (day < 10){
    day = "0" + day
}
if (hour < 10){
    hour = "0" + hour
}
if (minute < 10){
    minute = "0" + minute
}
if (second < 10){
    second = "0" + second
}
let date = day + "." + month + "." + year
let clock = hour + ":" + minute + ":" + second
let tarih = document.querySelector("#myClock")
tarih.innerHTML = `${date}  ${clock} ${day2}`

function refreshTime() {
    day = new Date().getDate()
    month = new Date().getMonth()
    year = new Date().getFullYear()
    hour = new Date().getHours()
    minute = new Date().getMinutes()
    second = new Date().getSeconds()
    day2 = new Date().getUTCDay()
    if (day2 == 1) {
        day2 = 'Pazartesi'
    }else if(day2 == 2){
        day2 = 'Salı'
    }else if(day2 == 3){
        day2 = 'Çarşamba'
    }else if(day2 == 4){
        day2 = 'Perşembe'
    }else if(day2 == 5){
        day2 = 'Cuma'
    }else if(day2 == 6){
        day2 = 'Cumartesi'
    }else if(day2 == 7){
        day2 = 'Pazar'
    }
    if (month < 10){
        month = "0" + month
    }
    if (day < 10){
        day = "0" + day
    }
    if (hour < 10){
        hour = "0" + hour
    }
    if (minute < 10){
        minute = "0" + minute
    }
    if (second < 10){
        second = "0" + second
    }
    date = day + "." + month + "." + year
    clock = hour + ":" + minute + ":" + second
    tarih.innerHTML = `${date}  ${clock} ${day2}`
}

setInterval(refreshTime, 1000);