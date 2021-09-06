let time = {
    hours: 23,
    minutes: 59,
    seconds: 0,
}

function showTime() {
    console.log(`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`);
}

function addSeconds(seconds) {
    if (time.seconds === 0 && seconds === 60) {
        time.seconds = 0;
        time.minutes++;
        if (time.minutes === 60) {
            time.minutes = 0;
            time.hours++;
            if (time.hours === 24) {
                time.hours = 0;
            };
        };
        return showTime();
    } else {
    let count = 0;
    for (let i = 0; i < 60; i++) {
        time.seconds += 1;
        count++;
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
            break;
        };
    };

    time.seconds += seconds - count; 
       
    return showTime();
    };
};

function addMinutes(minutes) {
    if (time.minutes === 0 && minutes === 60) {
        time.minutes = 0;
        time.hours++;
        if (time.hours === 24) {
            time.hours = 0;
        };
        return showTime();
    } else {
        let count = 0;
        for (let i = 0; i < 60; i++) {
            time.minutes += 1;
            count++;
            if (time.minutes === 60) {
                time.minutes = 0;
                time.hours++;
                if (time.hours === 24) {
                    time.hours = 0;
                };
            };
            break;
        };

        time.minutes += minutes - count; 
        
        return showTime();
    };
};

function addHours(hours) {
    if (time.hours === 0 && hours === 24) {
        time.hours = 0;
        return showTime();
    } else {  
        let count = 0;
        for (let i = 0; i < 24; i++) {
            time.hours += 1;
            count++;
            if (time.hours === 24) {
                time.hours = 0; 
            };
            break;
        };
        
        time.hours += hours - count; 
        
        return showTime();
    };
};

console.log(addSeconds(60));

