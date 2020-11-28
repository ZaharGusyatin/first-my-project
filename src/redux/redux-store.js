import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'
let reducers=combineReducers({//функция
    profilePage:profileReducer,
    //обьект профаил который получает данный с профаила!!!это все наш стеит
    messagesPage:  dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
//createStore
window.store = store

export default store