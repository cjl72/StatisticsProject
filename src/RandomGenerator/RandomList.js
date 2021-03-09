function random_list(list)
{
    return list[Math.floor(Math.random()*list.length)];
}
var items = [254, 45, 212, 365, 2543];
console.log(random_list(items));