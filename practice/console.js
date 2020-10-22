let num = 10000
num = 50000009
// console.log(Math.ceil(Math.log10(num + 1)))
// console.log('10' * '130')

let list = "AWS, Redux, Bootstrap, Ruby, Rails, JavaScript, React, PostgreSQL, SQL, CSS, HTML5, Material UI, Styled-Components, Pivotal, Photoshop, InDesign, Illustrator, Lightroom, LucidChart, Trello, WordPress, Google Analytics, Excel, SQLite"

list = Array.from(list.split(', ').sort())
let newlist = list.join(', ')

// console.log(newlist)

var isValid = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
      // "(": ")",
      // "{": "}",
      // "[": "]"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
      console.log(s[i])
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                arr.pop();
            }
            else return false;
        }
    }

    return arr.length === 0 ? true : false;
};
// console.log(isValid("({[[()]]})"))

function squareNum(num){
  
  return num * num
}

// console.log(squareNum(5))

// function sq_num(input){
//   let num = input
//   let squared = num * num
//   console.log(squared)
// }
// console.log(sq_num(6))


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("input number to square ", function saveInput(num) {
//   let squared;
//   squared = num * num

//   console.log(`${num} squared is ${squared}`);
//   rl.close();
// });

var stdin = '';
process.stdin.on('data', function (chunk) {
  stdin += chunk;
}).on('end', function() {
  let val = stdin.split('\n').on('line', function(line){
  //   var value = line.trim()|0;
    process.stdout.write(num * num);
  });
})


