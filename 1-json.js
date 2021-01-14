const fs = require('fs')

// book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('bookJSON.json', bookJSON)
// const bookBuffer = fs.readFileSync('./bookJSON.json')
// const bookJSON = bookBuffer.toString()
// const book = JSON.parse(bookJSON)
// console.log(book)
// console.log(book.title)

const infoBuffer = fs.readFileSync('./1-json.json')
const infoJSON = infoBuffer.toString()
const info = JSON.parse(infoJSON)

console.log(info)
info.name = 'Saad'
info.age = 23
console.log(info)
const updatedInfo = JSON.stringify(info)
fs.writeFileSync('./1-json.json', updatedInfo)
