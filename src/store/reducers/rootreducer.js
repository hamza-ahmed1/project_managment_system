    import projectreducers from "./projectreducer";
    import authreducers from "./authreducers";
    import { combineReducers } from "redux";
    const rootreducers=combineReducers({
        auth:authreducers,
        project:projectreducers
    });
    export default rootreducers;