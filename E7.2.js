function transform(date) {
    const validInput = /\d{1,2}-\d{1,2}-\d{4}$/i.exec(date);
    const holidays = {
        "01-01": "Jour de l'an",
        "01-03": "Fête du premier mai",
        "08-03": "Jour de la Victoire",
        "26-05": "Jour de l'Ascension",
        "14-08": "Fête nationale",
        '15-09': "Assomption",
        "01-11": "La Toussaint",
        "11-11": "Jour d'armistice",
        "25-12": "Noël"
    };
    const keys = Object.keys(holidays);

    if (!validInput) {
        throw new Error('Invalid Input')
    } else {
        let arr = date.split("-");
        let x = [arr[1], arr[0], arr[2]];
        let newDate = x.join('-');
        x = [arr[1], arr[0]].join('-');

        let matchDay = holidays[x] ? " " + holidays[x] : " ";
        return `French-FRAN: ${newDate}` + ' ' + `${matchDay}`;
    }
}
console.log(transform("12-25-2022"));
