const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admindash2:%23Saurabh17@cluster0.u0twx.mongodb.net/pipelineDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
require('./pipeline.model');