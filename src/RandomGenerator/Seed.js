const seedRandom = require('seedrandom');

function Seed(data, sd) {
    seedRandom(sd, {global: true});
    data.forEach(function(x) {
       if(x === sd){
           return x;
       }
    });
}
module.exports = Seed;