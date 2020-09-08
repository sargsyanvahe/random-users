import {
    CHANGE_NATION,
    CLOSE_INFO_MODAL,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    OPEN_INFO_MODAL
} from "../actions/usersActions";

const initialState = {
    users: [],
    loading: false,
    page: 1,
    openedModal: false,
    selectedUser: null
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true, page: state.page + 1 };
        case FETCH_USERS_SUCCESS:
            return { ...state, users: [...state.users, ...action.users], loading: false };
        case CHANGE_NATION:
            const idx = state.users.findIndex(user => user.email === action.mail);
            const newUsers = [...state.users];
            newUsers[idx].nat = action.nat;
            return { ...state, users: newUsers };
        case CLOSE_INFO_MODAL:
            return { ...state, openedModal: false, selectedUser: null };
        case OPEN_INFO_MODAL:
            return { ...state, openedModal: true, selectedUser: action.user };
        default:
            return state
    }
};