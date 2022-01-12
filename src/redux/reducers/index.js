import {combineReducers} from 'redux';

import {detatilReducer} from '../reducers/detailReducer';


const reducers= combineReducers({
    detatilReducer:detatilReducer}
    );

    export default reducers;