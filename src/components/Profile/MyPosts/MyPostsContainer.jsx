import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    let btnClick1 = () => {
        props.dispatch(addPostActionCreator())


        //считывает с тексАреа

        // alert(text)
        //делает шторму на экране

    }


    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    };
    return <MyPosts updateNewPostText={onPostChange}
                    addPost={btnClick1}
                    state={props.state.message}
                    newPostText={props.state.newPostText}
    />
}
export default MyPostsContainer