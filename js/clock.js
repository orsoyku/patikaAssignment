let ready = () => {
    var name = prompt("Please enter your name");
    if (name != null) {
        document.getElementById("myName").innerHTML = name
    }
}

document.addEventListener("DOMContentLoaded", ready);
let showTime = () => {
    let time = new Date();
    var day = time.getDay();

    var dayList = ["Pazar", "Pazartesi", "Salı", "Çarşamba ", "Perşembe", "Cuma", "Cumartesi"];
    var currentHours = time.getHours();
    var currentMinutes = time.getMinutes();
    var currentSeconds = time.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    time = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + dayList[day]
    document.getElementById('myClock').innerHTML = time;
};



