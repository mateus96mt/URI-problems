String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

let n = 10;

let spaces = "";
let base = "";
for(let i=0;i<n;i++){
    spaces = spaces + " ";
    base = base + "*";
}

console.log(base)
for(let k=1;k<n-1;k++){
    let line = spaces.toString();
    line = line.replaceAt(k, '*')
    line = line.replaceAt(n-k-1, '*')
    console.log(line)
}
console.log(base)
