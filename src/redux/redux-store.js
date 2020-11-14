import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";
let reducers=combineReducers({//функция
    profilePage:profileReducer,
    //обьект профаил который получает данный с профаила!!!это все наш стеит
    messagesPage:  dialogsReducer,
    usersPage:usersReducer
});
let store = createStore(reducers)
//createStore
window.store = store

export default store