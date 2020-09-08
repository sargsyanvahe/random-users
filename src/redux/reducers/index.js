import { combineReducers } from "redux";
import { filter } from "./filterReducer";
import { users} from "./usersReducer";

export default combineReducers({
    filter,
    users
})