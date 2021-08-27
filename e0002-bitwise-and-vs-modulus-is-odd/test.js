console.time('bitwise and')
for (let i = 0; i < 1000000; i++) {
    !(i & 0b1)
}
console.timeEnd('bitwise and')

console.time('modulus')
for (let i = 0; i < 1000000; i++) {
    i % 2
}
console.timeEnd('modulus')