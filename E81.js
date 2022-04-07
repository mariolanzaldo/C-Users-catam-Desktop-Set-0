function random(){
let array = [`Hi!`,
            `Random sentences will be displayed`,
            `Every 1 min`,
            `Enjoy funny JS features`,
            `(:`
            ];
let rand;
let index = Math.floor(Math.random()*(array.length - 1));
rand = array[index];
console.log(rand);
setTimeout (random,1000*60);
}

random();