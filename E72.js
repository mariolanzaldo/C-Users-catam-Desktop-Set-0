function transform(date){
    console.log(`English-US: ${date}`);
    let validInput = /\d{1,2}-\d{1,2}-\d{4}$/i.exec(date);
    if(!validInput){
        throw new Error ('Invalid Input')
    }

    let arr = date.split("-");
    let x = [arr[1],arr[0],arr[2]];
    let newDate = x.join('-');
    x = [arr[1],arr[0]].join('-');

    const holidays = {"Jour de l'an": "01-01",
                    "Fête du premier mai": "01-03",
                    "Jour de la Victoire": "08-03",
                    "Jour de l'Ascension": "26-05",
                    "Fête nationale": "14-08",
                    'Assomption': "15-09",
                    "La Toussaint": "01-11",
                    "Jour d'armistice": "11-11",
                    "Noël": "25-12"

                };
    let value = Object.values(holidays);
    let keys = Object.keys(holidays);
    for (i=0; i <= value.length;i++){
        if(value[i] === x) {
            newDate = newDate +' ' + keys[i];
        }
    }
    console.log(`French-FRAN: ${newDate}`);
}

transform("05-26-2022");