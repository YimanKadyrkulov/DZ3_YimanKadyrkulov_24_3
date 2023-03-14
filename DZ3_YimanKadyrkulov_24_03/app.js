var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var tagCount = {};

for (const tag of tags) {
    if (tag in tagCount) {
        tagCount[tag]++;
    } else {
        tagCount[tag] = 1;
    }
}

var sortedTagCount = Object.fromEntries(
    Object.entries(tagCount).sort((a, b) => b[1] - a[1])
);

console.log(sortedTagCount);

var arr = ['h1', 'li', 'div', 'p', 'ol'];
console.log(arr)
