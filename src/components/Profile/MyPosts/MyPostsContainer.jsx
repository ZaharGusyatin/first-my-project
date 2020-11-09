import React from 'react'
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";


let mapStateToProps=(state)=>{
    return{
            profilePage: state.profilePage

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:()=>{dispatch(addPostActionCreator())},
        updateNewPostText:(text)=>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        }

    }
}
const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer