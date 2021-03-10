const seedRandom = require('seedrandom');
function randomListDec(a,b,length,sd){
    if(Number.isInteger(a)){
        return randomListInt(a, b, length, sd);
    }
    let lst = [];
    seedRandom(sd, {global: true});
    for (i = 0; i < length; i++) {
        let num = (Math.random() * (b - a) + b);
        lst.push(num);
    }
    return lst;
}
function randomListInt(a,b,length,sd){
    let lst = [];
    seedRandom(sd, {global: true});
    for (i = 0; i < length; i++) {
        a = Math.ceil(a);
        b = Math.floor(b);
        let num = (Math.floor(Math.random() * (b - a) + a));
        lst.push(num);
    }
    return lst;
}

module.exports = randomListInt;
module.exports = randomListDec;
