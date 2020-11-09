const ADD_POST_DIALOGS = 'addPostDialogs';
const UPDATE_NEW_POST_TEXT_DIALOGS = 'updateNewPostTextDialogs';
let initialState={
    dialogs: [
        {id: 1, name: 'Zahar1',src:'https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg'},
        {id: 2, name: 'Zahar2', src:'https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg'},
        {id: 3, name: 'Zahar3', src:'https://klike.net/uploads/posts/2019-05/1556777145_1.jpg'},
        {id: 4, name: 'Zahar4', src:'https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg'},
        {id: 5, name: 'Zahar5', src:'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg'},
        {id: 6, name: 'Zahar6', src:'https://bipbap.ru/wp-content/uploads/2017/08/LEpwl8j7fQ.jpg'}
    ],
    messages: [
        {id: 1, message: 'Hello1'},
        {id: 2, message: 'Hello2'},
        {id: 3, message: 'Hello3'},
        {id: 4, message: 'Hello4'},
        {id: 5, message: 'Hello5'}
    ],
    newPostTextDialogs:''}
const dialogsReducer = (state=initialState, action) => {


    switch (action.type) {
        case ADD_POST_DIALOGS: {
            let newPost = {
                id: 6,
                message: state.newPostTextDialogs,
            }
            return  {...state,
                messages:[...state.messages, newPost],
                newPostTextDialogs:''

            }

        }
        case UPDATE_NEW_POST_TEXT_DIALOGS: {
         return  {
             ...state,
             newPostTextDialogs: action.textStringDialogs
         }

    }
        default:
            return state
    }


}
export let addPostActionCreatorDialogs=()=> ({type: ADD_POST_DIALOGS})
export let updateNewPostTextActionCreatorDialogs=(text)=>({type: UPDATE_NEW_POST_TEXT_DIALOGS, textStringDialogs:text})
export default dialogsReducer