export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const CHANGE_NATION = 'CHANGE_NATION';
export const OPEN_INFO_MODAL = 'OPEN_INFO_MODAL'
export const CLOSE_INFO_MODAL = 'CLOSE_INFO_MODAL'

export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, users });
export const changeNation = (mail, nat) => ({ type: CHANGE_NATION, mail, nat });
export const openInfoModal = user => ({ type: OPEN_INFO_MODAL, user });
export const closeInfoModal = ({ type: CLOSE_INFO_MODAL });

export const fetchUsers = (page) => dispatch => {
    dispatch({ type: FETCH_USERS_REQUEST, loading: true })
    fetch(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`)
        .then(res => res.json())
        .then(data => {
            dispatch(fetchUsersSuccess(data.results))
        })
        .catch((error) => {
            throw new Error(error)
        })
}