export const SEARCH_VALUE = 'SEARCH_VALUE';
export const ADD_NATION = 'ADD_NATION';

export const setSearchValue = value => ({ type: SEARCH_VALUE, value });
export const addNationality = (nat,check) => ({ type: ADD_NATION, nat,check })