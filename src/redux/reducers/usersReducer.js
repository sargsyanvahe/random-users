import { CHANGE_NATION, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../actions/usersActions";

const initialState = {
    users: [],
    loading: false,
    page: 1,
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true, page: state.page + 1 };
        case FETCH_USERS_SUCCESS:
            return { ...state, users: [...state.users, ...action.users], loading: false };
        case CHANGE_NATION:
            const idx = state.users.findIndex(user => user.email === action.mail);
            const newUsers = [...state.users]
            newUsers[idx].nat = action.nat;
            return { ...state ,users: newUsers};
        default:
            return state
    }
};