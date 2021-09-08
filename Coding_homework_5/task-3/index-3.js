let time = {
    hours: 0,
    minutes: 59,
    seconds: 59,
}

function showTime() {
    return `${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`;
}

function addSeconds(seconds) {
    for (let i = 0; i < seconds; i++) {
        time.seconds += 1;
        if (time.seconds === 60) {
            time.seconds = 0;
            time.minutes++;
            if (time.minutes === 60) {
                time.minutes = 0;
                time.hours++;
                if (time.hours === 24) {
                    time.hours = 0;
                };
            };
        };
    };

    return showTime();
};

function addMinutes(minutes) {
    for (let i = 0; i < minutes; i++) {
        time.minutes += 1;
        if (time.minutes === 60) {
            time.minutes = 0;
            time.hours++;
            if (time.hours === 24) {
                time.hours = 0;
            };
        };
    };

    return showTime();
};

function addHours(hours) {
    for (let i = 0; i < hours; i++) {
        time.hours += 1;
        if (time.hours === 24) {
            time.hours = 0;
        };
    };

    return showTime();
};

console.log(addHours(24))

