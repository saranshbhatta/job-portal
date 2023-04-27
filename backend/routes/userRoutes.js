const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require("../controllers/userController");
const router = express.Router();



//see all users
router.get('/allusers' ,isAuthenticated,isAdmin, allUsers)
//see one user /id
router.get('/user/:id' ,isAuthenticated,isAdmin, singleUser)
//edit user
router.put('/user/edit/:id' ,isAuthenticated,isAdmin, editUser)
//delete user
router.delete('/user/delete/:id' ,isAuthenticated,isAdmin, deleteUser)
// /api/user/jobhistory
router.post('/user/jobhistory', isAuthenticated, createUserJobsHistory);



module.exports = router
