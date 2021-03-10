const seedRandom = require('seedrandom');

function randomListDec(a,b,length,sd){
    let lst = [];
    seedRandom(sd, {global: true});
    for (i = 0; i < length; i++) {
        let num = (Math.random() * (b - a) + b);
        lst.push(num);
    }
    return lst;
}
module.exports = randomListDec;