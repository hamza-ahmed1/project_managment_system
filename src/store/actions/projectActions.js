// Action code
export const createproject = (project)=>{
    return (dispatch,getState)=>{
        dispatch({type:'CREATE_PROJECT',project})
    }
};