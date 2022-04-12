var input = require('fs').readFileSync('entrada', 'utf8');
var lines = input.split('\n');

const approvalPercentage = 0.75;

let nCases = lines[0]

lines.splice(0, 1)
for(let i=0;i<nCases;i++){
    let names = lines[1].split(" ")
    let frequencies = lines[2].split(" ")
    let unAprovedNames = ""
    names.forEach((name, index)=>{
        let P = frequencies[index].split('P').length-1;
        let A = frequencies[index].split('A').length-1;
        if(!(P/(P+A)>=approvalPercentage)){
            unAprovedNames = unAprovedNames + name.replace('\r', '') + " "
        }
    })

    lines.splice(0, 3)
    console.log(unAprovedNames.slice(0, unAprovedNames.length-1))
}
