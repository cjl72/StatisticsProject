function SelectWithSeed (data,num,sd) {
    if (data.length === 0){
        throw 'Error: The array is empty';
    }
    let lst = [];
    for(i=0; i<num; i++,sd){
        let x = math.floor(Math.random() * Math.floor(data.length-1));
        lst.push(x);
    }
    return lst;
}
module.exports = SelectWithSeed;