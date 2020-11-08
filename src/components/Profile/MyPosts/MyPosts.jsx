import React from 'react'
import Post from '../Post/Post';
import s from './MyPosts.module.css'


const MyPosts = (props) => {

    let postsElements = props.message.map(p => <Post message={p.message} id={p.id} src={p.src}/>)
    let newPostElement=React.createRef()

    let btnClick1=()=>{
        props.addPost()

        //считывает с тексАреа
        // props.dispatch(addPostActionCreator())
        // alert(text)
        //делает шторму на экране

    }


    let onPostChange=()=>{
        let text= newPostElement.current.value
        props.updateNewPostText(text)

        // let action = updateNewPostTextActionCreator(text);
        // props.dispatch(action)
    };
    return <div className={s.paddingTen}>
        <h3>My POSTS</h3>
        <div>
            <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
            <div><button onClick={btnClick1}>Add Post</button></div>
            <div className={s.marginTen}>
                {postsElements}
            </div>

        </div>

    </div>
}
export default MyPosts