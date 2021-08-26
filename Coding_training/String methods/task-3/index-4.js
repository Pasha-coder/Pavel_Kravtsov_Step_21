let spam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте'];

function isHereSpam(string) {
    let foundSpam;
    let newString = string.toLowerCase();
        for (let n = 0; n < spam.length; n++) {
           foundSpam = newString.includes(spam[n]);
           if (foundSpam === true) {
               break;
           }
        }; 
    return foundSpam;
};

