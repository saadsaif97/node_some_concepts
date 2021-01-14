/**
 * Node low level apis require more work to be done
 * Therefore you are supposed to use the npm libraries in node ecosystem
 */
const http = require('http')

const url =
  'http://api.weatherstack.com/current?access_key=946d28d14f8d9684d86c0c7502cf694d&query=31.713,73.978'

let fetchedData = ''

// we can can have the different parts of the response through this low level builtin api
const request = http.request(url, (response) => {
  // fetching the body of the response
  response.on('data', (chunk) => {
    //  console.log(chunk) It is a buffer
    fetchedData = fetchedData + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(fetchedData)
    console.log(body)
  })
})

request.end()
