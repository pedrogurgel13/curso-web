const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nuns) {
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nuns[x]}`)
}

for (y in nuns) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nuns[y]}`)
}