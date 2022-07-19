function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
let cant = process.argv[2] ?? 100000000
console.log(cant)
let result = [];

console.log(getRandomInt(1000))
for (let i = 0; i < cant; i++) {
    const r = getRandomInt(1000)
    if (result[r] > 0)
        result[r] += 1
    else
        result[r] = 1

}

process.send(JSON.stringify(result.slice(1)))