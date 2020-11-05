const ADD_POST = 'addPost';
const ADD_POST_DIALOGS = 'addPostDialogs';
const UPDATE_NEW_POST_TEXT = 'updateNewPostText';
const UPDATE_NEW_POST_TEXT_DIALOGS = 'updateNewPostTextDialogs';

let store={
    _state : {
        profilePage:{message: [
                {id: 1, message: 'hello1', src:'https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg'},
                {id: 2, message: 'hello12', src:'https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg'},
                {id: 3, message: 'hello13', src:'https://klike.net/uploads/posts/2019-05/1556777145_1.jpg'},
                {id: 4, message: 'hello14', src:'https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg'},
                {id: 5, message: 'hello15', src:'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg'},
                {id: 6, message: 'hello16', src:'https://bipbap.ru/wp-content/uploads/2017/08/LEpwl8j7fQ.jpg'},

            ],
            newPostText:''},

        messagesPage:{ dialogs: [
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
            newPostTextDialogs:''},
            sidebar:{}






    },
    callSubscriber(){
        console.log('state have changed')
    },
    getState(){

      return this._state
    },
    subscribe(observer){
        this._state.callSubscriber=(observer)
        //если ее не не обьявить как переменная, тогда она ищет, вверху где есть эта переменная и находит консоле лог, после этого переименовуется на
        //обсервер а обсервер указываете функция сабскрайб когда ее вызывают, ее вызывают в индексеДЖ

    },
    _addPost(){

        let newPost = {
            id: 7,
            message: this._state.profilePage.newPostText,
            src:'data:image/jpeg;base64,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'
        }
        this._state.profilePage.message.push(newPost)
        this._state.profilePage.newPostText=''
        this._state.callSubscriber(this._state)
    },
    _updateNewPostText(postMessage){
        this._state.profilePage.newPostText=postMessage
        this._state.callSubscriber(this._state)
    },
    _addPostDialogs(){
        let newPost = {
            id: 6,
            message: this._state.messagesPage.newPostTextDialogs,
        }
        this._state.messagesPage.messages.push(newPost)
        this._state.messagesPage.newPostTextDialogs=''
        this._state.callSubscriber(this._state)
    },
    _updateNewPostTextDialogs(postMessageDialogs){
        this._state.messagesPage.newPostTextDialogs=postMessageDialogs
        this._state.callSubscriber(this._state)
    },
    dispatch(action){//это обьект{type:'ADD-POST'}
        if (action.type === ADD_POST){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                src:'data:image/jpeg;base64,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'
            }
            this._state.profilePage.message.push(newPost)
            this._state.profilePage.newPostText=''
            this._state.callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText=action.textString
            this._state.callSubscriber(this._state)
        }else if (action.type === ADD_POST_DIALOGS){
            let newPost = {
                id: 6,
                message: this._state.messagesPage.newPostTextDialogs,
            }
            this._state.messagesPage.messages.push(newPost)
            this._state.messagesPage.newPostTextDialogs=''
            this._state.callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_POST_TEXT_DIALOGS){
            this._state.messagesPage.newPostTextDialogs=action.textStringDialogs
            this._state.callSubscriber(this._state)
        }


    }


}
export let addPostActionCreator=()=>({type: ADD_POST})
export let updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT, textString:text})
export let addPostActionCreatorDialogs=()=> ({type: ADD_POST_DIALOGS})
export let updateNewPostTextActionCreatorDialogs=(text)=>({type: UPDATE_NEW_POST_TEXT_DIALOGS, textStringDialogs:text})







export default store