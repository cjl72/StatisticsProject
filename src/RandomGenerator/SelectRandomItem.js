function SelectRandomItem(data) {
    let l = data.length;
    let num = Math.floor(Math.random() * Math.floor(l-1))
    return data[num];
}
module.exports = SelectRandomItem;