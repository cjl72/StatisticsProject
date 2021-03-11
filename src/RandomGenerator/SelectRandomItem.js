
function SelectRandomItem(data) {
    if (data.length === 0){
        throw 'Error: The array is empty';
    }

    let l = data.length;
    let num = Math.floor(Math.random() * Math.floor(l-1))
    return data[num];
}
module.exports = SelectRandomItem;