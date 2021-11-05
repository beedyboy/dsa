function hash(key, arrayLen) {
    let total = 0;
    for(let i=0; i < key.length; i++) {
        let char = key[i];
// alphabetical position of char
        let value = char.charCodeAt(0) - 96;
// % keeps it within arrayLen
        total = (total + value) % arrayLen;
    }

    return total;
}

