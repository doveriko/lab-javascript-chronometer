// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    
    const addSeconds = () => {
        this.currentTime++;
        this.setTime();
    }
    setInterval(addSeconds, 1000)
    
};

Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime % 60;
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
        var str = "0" + num;
        return str.slice(-2);
}

Chronometer.prototype.setTime = function () {

    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());

}


// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    intervalId = this.setTime();
    clearInterval(intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
