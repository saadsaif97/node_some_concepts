const http = require('http')

const url =
  'http://api.weatherstack.com/current?access_key=946d28d14f8d9684d86c0c7502cf694d&query=31.713,73.978'

let fetchedData = ''

const request = http.request(url, (response) => {
  response.on('data', (chunk) => {
    //  console.log(chunk) It is a buffer
    fetchedData = fetchedData + chunk.toString()
  })

  response.on('end', () => {
    console.log(fetchedData)
  })
})

request.end()
