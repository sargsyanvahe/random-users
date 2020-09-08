import { SEARCH_VALUE } from "../actions";
import { ADD_NATION } from "../actions/filterActions";

const initialState = {
    searchValue: '',
    nations: []
};

export const filter = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VALUE:
            return { ...state, searchValue: action.value };
        case ADD_NATION:
            if (action.check) {
                return { ...state, nations: [...state.nations, action.nat] }
            }
            return { ...state, nations: state.nations.filter(item => item !== action.nat) }
        default:
            return state
    }
}