// return pattern --> for simple function
// callback pattern --> for async function

let geocode = (city, callback) => {
  setTimeout(() => {
    let data = {
      city: city,
      latitude: 0,
      longitude: 0,
    }

    callback(data)
  }, 2000)
}

// let data = geocode('Lahore', (data) => {
//   console.log(data)
// })

let my_sum = (num1, num2, callback) => {
  setTimeout(() => {
    sum = num1 + num2
    callback(sum)
  }, 2000)
}

my_sum(1, 4, (sum) => {
  console.log(sum)
})
