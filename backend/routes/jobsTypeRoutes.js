const express = require('express');
const router = express.Router();
const { createJobType, allJobsType } = require('../controllers/jobsTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');



//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated,isAdmin, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobsType)


module.exports = router;