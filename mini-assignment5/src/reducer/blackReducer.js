import { combineReducers } from "redux";


export default function blackReducer(state = {array:[false, false, false, false], cnt: 0}, action) {
    if (action.type === 'CHANGE COLOR') {
        let newState = [...state.array];
        let newCnt = state.cnt;
        if (state.array[action.index]) {
            newState[action.index] = false;
            newCnt--;
        } else {
            newState[action.index] = true;
            newCnt++;
        }
        
        return {array: newState, cnt: newCnt};
    }

    return state;
}
