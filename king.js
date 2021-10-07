function perfectFriend(names) {
    for (const name of names) {
        if (name.length == 5) {
            return name;
        }
    }
}
var friend = ['jim', 'king', 'Nosib', 'Adi', 'Alim'];
console.log(perfectFriend(friend));

