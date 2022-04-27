function transform(date) {
    const validInput = /\d{1,2}-\d{1,2}-\d{4}$/i.exec(date);
    const holidays = {
        "Jour de l'an": "01-01",
        "Fête du premier mai": "01-03",
        "Jour de la Victoire": "08-03",
        "Jour de l'Ascension": "26-05",
        "Fête nationale": "14-08",
        'Assomption': "15-09",
        "La Toussaint": "01-11",
        "Jour d'armistice": "11-11",
        "Noël": "25-12"
    };
    const keys = Object.keys(holidays);

    if (!validInput) {
        throw new Error('Invalid Input')
    }

    let arr = date.split("-");
    let x = [arr[1], arr[0], arr[2]];
    let newDate = x.join('-');
    x = [arr[1], arr[0]].join('-');
    let matchDay = keys.find(function (key) {
        return holidays[key] === x;
    });
    if (matchDay !== undefined) {
        return `French-FRAN: ${newDate}` + ' ' + `${matchDay}`;
    } else {
        return `French-FRAN: ${newDate}`;
    }
}
console.log(transform("05-26-2022"));
