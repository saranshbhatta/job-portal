// const Job = require('../models/jobModels');
const User = require ('../models/userModel')
const ErrorResponse = require('../utils/errorResponse');
const Application = require('../models/applicationModel')

//Apply job
exports.applyJob = async (req, res, next) => {
    try {
        const apply = await Application.create({
            user: req.user.id,
            // job: req.job.id
        });
        res.status(201).json({
            success: true,
            apply
        })
    } catch (error) {
        next(error);
    }
}
