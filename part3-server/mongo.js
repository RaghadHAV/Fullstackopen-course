const mongoose = require('mongoose')

if (process.argv.length !=5) {
  console.log('Please provide all required arguments')
  process.exit(1)
}


const password = process.argv[2]

const url =
`mongodb+srv://fullstack:${password}@cluster0.ztfcl.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: Date,
})

//const Person = mongoose.model('Person', personSchema)

//  const person = new Person({
//    name: process.argv[3],
//    number: process.argv[4],
// })

// person.save().then(result => {
//   console.log(`added ${process.argv[3]} Number ${process.argv[4]} to the phonebook `)
//   //console.log(result.id);
//   mongoose.connection.close()
//  })
 Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})