import {ActionTypes} from '../constants/action-type'
export const setCurrentDay=(curentDay)=>{

    return {
        type:ActionTypes.CURRENT_DAY,
        payload:curentDay,
    }

}