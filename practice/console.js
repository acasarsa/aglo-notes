let num = 10000
num = 50000009
console.log(Math.ceil(Math.log10(num + 1)))
console.log('10' * '130')

let list = "AWS, Redux, Bootstrap, Ruby, Rails, JavaScript, React, PostgreSQL, SQL, CSS, HTML5, Material UI, Styled-Components, Pivotal, Photoshop, InDesign, Illustrator, Lightroom, LucidChart, Trello, WordPress, Google Analytics, Excel, SQLite"

list = Array.from(list.split(', ').sort())
let newlist = list.join(', ')

console.log(newlist)