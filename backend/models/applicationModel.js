const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const applicationSchema = new mongoose.Schema({

    applicantName: {
            type: ObjectId,
            ref: "User",
            required: true
    },
    job: {
        type: ObjectId,
        ref: "Job",
        // required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Application", applicationSchema);