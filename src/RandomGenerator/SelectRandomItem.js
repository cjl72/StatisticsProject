function SelectRandomItem(data) {
    let l = data.length;
    let num = (Math.floor(Math.random() * (Math.floor(l-1) - Math.ceil(0)) + Math.ceil(0)));
    return data.get(num);
}
module.exports = SelectRandomItem;