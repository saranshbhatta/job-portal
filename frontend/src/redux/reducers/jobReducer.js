import { JOB_LOAD_FAIL,
     JOB_LOAD_REQUEST,
      JOB_LOAD_RESET,
       JOB_LOAD_SUCCESS,
       JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_RESET,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_DELETE_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_CREATE_REQUEST,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_FAIL
     } from "../constants/jobconstant"




export const loadJobReducer = (state = {jobs: []},action ) =>{
    switch(action.type) {
        case JOB_LOAD_REQUEST:
            return {loading: true}

        case JOB_LOAD_SUCCESS:
            return {loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs}
        case JOB_LOAD_FAIL:
            return {loading: false, error:action.payload}
        case JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

// single job reducer
export const loadJobSingleReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_LOAD_SINGLE_REQUEST:
            return { loading: true }
        case JOB_LOAD_SINGLE_SUCCESS:
            return {

                loading: false,
                success: action.payload.success,
                singleJob: action.payload.job,

            }
        case JOB_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}



// delete a job reducer
export const deleteJobReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_DELETE_REQUEST:
            return { loading: true }
        case JOB_DELETE_SUCCESS:
            const updatedJobs = state.jobs.filter((job)=> job.id !== action.payload)
            return {...state,
                loading: false,
                success: action.payload.success,
                jobs: updatedJobs,

            }
        case JOB_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case JOB_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }
}



// create a job reducer
export const createJobReducer = (state = {}, action) => {
    switch (action.type) {
        case JOB_CREATE_REQUEST:
            return { loading: true }
        case JOB_CREATE_SUCCESS:
            return {
                loading: false,
                createJob: action.payload,
            }
        case JOB_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}