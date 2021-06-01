const mongoose = require("mongoose")

const connect = () => {mongoose.connect("mongodb://localhost:27017/filmes", {
    useNewUrlParser: true,
    useUnifiedTopoLogy:true
}).then(console.log("MongoDB conectato"))
    .catch(err => console.err)
}

module.exports = {connect}