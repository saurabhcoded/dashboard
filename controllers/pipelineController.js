const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Pipeline = mongoose.model('pipeline');



router.get('/create', (req, res) => {
    res.render("pipeline/addOrEdit", {
        viewTitle: "Creating Pipeline"
    });
});
router.post('/create', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var pipeline = new Pipeline();
    pipeline.pipeline = req.body.pipeline;
    pipeline.notes=req.body.notes;
    pipeline.type=req.body.type;
    pipeline.subtype=req.body.subtype;
    pipeline.method=req.body.method;
    pipeline.design=req.body.design;
    pipeline.save((err, doc) => {
        if (!err){
            console.log("error");
            res.redirect('/submit');
        }
        else {
            if (err) {
                console.log(err);
                res.render("pipeline/addOrEdit", {
                    viewTitle: "Insert Pipeline",
                    pipeline: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Pipeline.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/'); }
        else {
            if (err) {
                console.log(err);
                res.render("pipeline/addOrEdit", {
                    viewTitle: 'Update Pipeline',
                    pipeline: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}
router.get('/submit', (req, res) => {
    Pipeline.find((err, docs) => {
        if (!err) {
            res.render("pipeline/submit", {
                viewTitle:"Processing your Pipeline pls wait",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving pipeline list :' + err);
        }
    });
});

router.get('/', (req, res) => {
    Pipeline.find((err, docs) => {
        if (!err) {
            res.render("pipeline/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving pipeline list :' + err);
        }
    });
});


router.get('/:id', (req, res) => {
    Pipeline.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("pipeline/addOrEdit", {
                viewTitle: "Update Pipeline",
                pipeline: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Pipeline.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/');
        }
        else { console.log('Error in pipeline delete :' + err); }
    });
});

module.exports = router;