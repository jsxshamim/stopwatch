let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let isCounting = false;

const cnt = document.getElementById("count");
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");

const start = () => {
    console.log(count);
    isCounting = true;
    stopwatch();
};
const reset = () => {
    console.log("reset");
    isCounting = false;
    cnt.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
};
const stop = () => {
    console.log("stop");
    isCounting = false;
};

const stopwatch = () => {
    if (isCounting) {
        count = count + 1;

        cnt.innerHTML = count < 10 ? "0" + count : count;
        sec.innerHTML = second < 10 ? "0" + second : second;
        min.innerHTML = minute < 10 ? "0" + minute : minute;
        hr.innerHTML = hour < 10 ? "0" + hour : hour;

        if (count === 100) {
            count = 0;
            second = second + 1;
            if (second > 60) {
                second = 1;
                minute = minute + 1;
                if (minute > 60) {
                    minute = 1;
                    hour = hour + 1;
                }
            }
        }

        setTimeout(() => {
            stopwatch();
        }, 10);
    }
};
