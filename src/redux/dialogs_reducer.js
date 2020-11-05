const ADD_POST_DIALOGS = 'addPostDialogs';
const UPDATE_NEW_POST_TEXT_DIALOGS = 'updateNewPostTextDialogs';

const dialogs_reducer = (state, action) => {


    if (action.type === ADD_POST_DIALOGS) {
        let newPost = {
            id: 6,
            message:state.newPostTextDialogs,
        }
       state.messages.push(newPost)
       state.newPostTextDialogs = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT_DIALOGS) {
       state.newPostTextDialogs = action.textStringDialogs
    }


    return state
}
export default dialogs_reducer