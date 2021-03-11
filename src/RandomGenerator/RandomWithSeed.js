const seedRandom = require
function RandomWithSeed(data, num, sd) {
    seedrandom(sd);
    let lst = [];
    for (i = 0; i < num; i++){
        let x = Math.floor(Math.random() * Math.floor(data))
    }
}



module.exports = RandomWithSeed;
