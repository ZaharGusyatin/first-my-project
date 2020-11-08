import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let store=props.store.getState().profilePage



    let btnClick1 = () => {
        props.store.dispatch(addPostActionCreator())


        //считывает с тексАреа

        // alert(text)
        //делает шторму на экране

    }


    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    };
    return <MyPosts updateNewPostText={onPostChange}
                    addPost={btnClick1}
                    message={store.message}
                    newPostText={store.newPostText}
    />
}
export default MyPostsContainer