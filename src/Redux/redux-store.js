import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";

let redusers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    Sidebar: sidebarReducer,
    usersPage: usersReducer
});

let  store = legacy_createStore(redusers);

export default store;