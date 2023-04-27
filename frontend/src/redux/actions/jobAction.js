import { JOB_LOAD_REQUEST,
    JOB_LOAD_SUCCESS,
    JOB_LOAD_FAIL,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_DELETE_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_CREATE_REQUEST,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_FAIL
 } from "../constants/jobconstant"
import axios from 'axios'
import { toast } from "react-toastify";




export const jobLoadAction = (pageNumber, keyword = '')=>async(dispatch)=>{
    dispatch({type:JOB_LOAD_REQUEST});
    try {
        const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}

// delete job action
export const deleteJobAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_DELETE_REQUEST });
    try {
        const { data } = await axios.delete(`/api/job/delete/${id}`);
        dispatch({
            type: JOB_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_DELETE_FAIL,
            // payload: error.response.data.error
        });
    }
}


// create a job action
export const createJobAction = (job) => async (dispatch) => {
    dispatch({ type: JOB_CREATE_REQUEST });
    try {
        const { data } = await axios.post("/api/admin/job/create", job);

        dispatch({
            type: JOB_CREATE_SUCCESS,
            payload: data
        });
        toast.success("Job Created Successfully!");
    } catch (error) {
        dispatch({
            type: JOB_CREATE_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


