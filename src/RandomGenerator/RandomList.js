function randomListDec(a,b,length,sd){
    if(Number.isInteger(a)){
        return randomListInt(a, b, length, sd);
    }
    let lst = [];
    math.seed(sd);
    for (i = 0; i < length; i++) {
        let num = function(min, max) {
            return Math.random() * (max - min) + min;
        }
        lst.push(num);
    }
    return lst;
}
function randomListInt(a,b,length,sd){
    let lst = [];
    math.seed(sd);
    for (i = 0; i < length; i++) {
        let num = function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        lst.push(num);
    }
    return lst;
}

module.exports = randomListInt;
module.exports = randomListDec;
