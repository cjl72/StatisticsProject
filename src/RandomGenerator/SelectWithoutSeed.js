function SelectWithoutSeed (data,num) {
    if (data.length === 0){
        throw 'Error: The array is empty';
    }
    let lst = [];
    for(i=0; i<num; i++){
        let x = math.floor(Math.random() * Math.floor(data.length-1));
        lst.push(x);
    }
    return lst;
}
module.exports = SelectWithoutSeed;