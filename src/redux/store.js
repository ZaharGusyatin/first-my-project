import sidebarReducer from "./sidebar_reducer";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";



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

    dispatch(action){//это обьект{type:'ADD-POST'}
        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.messagesPage=dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar=sidebarReducer(this._state.sidebar, action)

        this._state.callSubscriber(this._state)


    }


}









export default store