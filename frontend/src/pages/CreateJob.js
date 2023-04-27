import { Avatar, Box } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
// import { userSignUpAction } from '../redux/actions/userAction'
import { createJobAction } from '../redux/actions/jobAction';
import { useNavigate } from 'react-router-dom'

const validationSchema = yup.object({
    title: yup
        .string('Enter the title of the Job')
        .min(3, 'Job title should be of minimum 3 characters length')
        .required('Job Title is required'),
    description: yup
        .string('Enter description of the job')
        .min(3, 'description should be of minimum 3 characters length')
        .required('description is required'),
    salary: yup
        .number('Enter the salary for the job')
        .required('salary is required'),
    location: yup
        .string('Enter the location of the job')
        .min(8, 'location should be of minimum 8 characters length')
        .required('location is required'),
});

const CreateJobBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, userInfo } = useSelector(state => state.signIn);


    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(createJobAction(values));
            actions.resetForm();
            navigate('/admin/dashboard')
        }

    })

    return (
        <>
            <Navbar />
            <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockOpenIcon />
                        </Avatar>
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="title"
                            label="Job Title"
                            name='title'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Job Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="description"
                            label="Description"
                            name='description'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Job Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="salary"
                            label="Job salary"
                            name='salary'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Job salary"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />

                        <Button fullWidth variant="contained" type='submit' >Create Job</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default CreateJobBtn