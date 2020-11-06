import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
let reducers=combineReducers({//функция
    profilePage:profileReducer,
    //обьект профаил который получает данный с профаила!!!это все наш стеит 
    messagesPage:  dialogsReducer
});
let store = createStore(reducers)
//createStore

export default store