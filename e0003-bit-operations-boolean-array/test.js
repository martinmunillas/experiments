console.time('bits')
for (let i = 0; i < 10000; i++) {
    const roles = 0b110101010
    const canEdit = (roles & 1 << 5) >> 5
    canEdit
}
console.timeEnd('bits')

console.time('boolean array')
for (let i = 0; i < 10000; i++) {
    const roles = [true, true, false, true, false, true, false, true, false]
    const canEdit = roles[3]
    canEdit
}
console.timeEnd('boolean array')