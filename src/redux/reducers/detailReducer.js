
import {ActionTypes} from '../constants/action-type';

const initialState= {
    detail:[
        {day:"monday"}
    ]
}
export const detatilReducer=(state=initialState, {type, payload})=>{

    switch(type){
        case ActionTypes.CURRENT_DAY:
            return{
                ...state, detail:payload
            }
            break;
            default :
            return state;
    }
}