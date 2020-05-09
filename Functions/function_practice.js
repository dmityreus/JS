const legDay = function(day) {
    if (day === 'Tuesday' || day === 'Thursday') {
        return true;
    } else {
        return false;
    }
}

console.log(legDay('Thursday'));