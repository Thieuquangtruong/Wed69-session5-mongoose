const mongoose = require('mongoose')
// Connection URL
const url = "mongodb://127.0.0.1:27017/restaurant";

const connectToDb = async() => {
  try{
    const connect = await mongoose.connect(url)
    console.log('database connect successfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectToDb