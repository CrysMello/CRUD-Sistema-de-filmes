const mongoose = require("mongoose")

const filmeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    duracao: {
        type: String,
        required: Number
    },
    descricao: {
        type: String,
        require: true
    },
    ano:{
        type: Number,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    }

})

module.exports = mongoose.model("filme", filmeSchema)