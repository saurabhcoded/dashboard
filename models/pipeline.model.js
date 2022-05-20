const mongoose = require('mongoose');

var pipelineSchema = new mongoose.Schema({
    pipeline: {
        type: String,
    },
    notes:{
        type:String
    },
    type:{
        type:String
    },
    subtype:{
        type:String
    },
    method:{
        type:String
    },
    Design:{
        type:String
    }
});
mongoose.model('pipeline', pipelineSchema);