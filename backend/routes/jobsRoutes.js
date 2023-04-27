const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require('../controllers/jobsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const applicationController = require('../controllers/applicationController')



//jobs routes

// /api/job/create
router.post('/admin/job/create', isAuthenticated, isAdmin, createJob);
// /api/job/id
router.get('/job/:id', singleJob);
// /api/job/update/job_id
router.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);
// /api/jobs/show
router.get('/jobs/show', showJobs);
//delete job
router.delete('/job/delete/:id' ,isAuthenticated,isAdmin, deleteJob)


//apply job
// router.post('/job/apply',applicationController)



module.exports = router;