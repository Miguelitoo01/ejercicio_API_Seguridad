const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/biblioteca", {
useUnifiedTopology: true,
useNewUrlParser: true,
});

const librosSchema = new mongoose.Schema({
titulo: String,
autor: String
});

const Libro = mongoose.model('libros', librosSchema);

module.exports = Libro;