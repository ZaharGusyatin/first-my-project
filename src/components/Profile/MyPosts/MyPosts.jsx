import React from 'react'
import Post from '../Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.state.message.map(p => <Post message={p.message} id={p.id} src={p.src}/>)
    let newPostElement=React.createRef()

    let btnClick=()=>{


        //считывает с тексАреа
        props.addPost()
        // alert(text)
        //делает шторму на экране

    }


    let onPostChange=()=>{
        let text= newPostElement.current.value
        props.updateNewPostText(text)
    };
    return <div className={s.paddingTen}>
        <h3>My POSTS</h3>
        <div>
            <div><textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/></div>
            <div><button onClick={btnClick}>Add Post</button></div>
            <div className={s.marginTen}>
                {postsElements}
            </div>

        </div>

    </div>
}
export default MyPosts