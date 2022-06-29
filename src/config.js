const mongoose = require('mongoose');

module.exports = ()=> {
    return mongoose.connect('mongodb+srv://madhan:mohan@cluster0.sx8p74t.mongodb.net/vibes?retryWrites=true&w=majority')
}