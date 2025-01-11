const mongoose = require('mongoose');



function connectToDb() {
mongoose.connect(process.env.DB_CONNECT, { useNewUrlPerser: true  
}).catch(err => console.log(err));

}

module.exports = connectToDb;
