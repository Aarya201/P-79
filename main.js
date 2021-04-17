function sm() {
 array = [];
var item1 =  "Veggie Paradise";
var item2 =  "Peppy Paneer";
array.push(item1);
array.push(item2);
array.sort();
document.getElementById('ans').innerHTML=array;
}
function add_item() {
    var newitem = document.getElementById('add_item').value;
    array.push(newitem);
    array.sort();
    var item = [];
    document.getElementById('ans2').innerHTML=item;
}