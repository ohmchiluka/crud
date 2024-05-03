const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://ohm_chiluka:12July2003@cluster0.pptldqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}