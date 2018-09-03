var mongoose = require('mongoose');

var url = process.env.DMS_MONGODB_URL || "mongodb://mongo:27017/mydms"


mongoose.connect(url, {
    useNewUrlParser: true
}, () => {
    console.log("DMS MongoDB connected at:-" + url);
})


module.exports = {
    mongoose
} 