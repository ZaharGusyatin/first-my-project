import React from 'react'
import Post from '../Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.state.message.map(p => <Post message={p.message} id={p.id} src={p.src}/>)
    let newPostElement=React.createRef()

    let btnClick=()=>{

        let text= newPostElement.current.value
        //считывает с тексАреа
        props.addPost(text)
        // alert(text)
        //делает шторму на экране
        newPostElement.current.value=''
    }


    return <div className={s.paddingTen}>
        <h3>My POSTS</h3>
        <div>
            <div><textarea ref={newPostElement}/></div>
            <div><button onClick={btnClick}>Add Post</button></div>
            <div className={s.marginTen}>
                {postsElements}
            </div>

        </div>

    </div>
}
export default MyPosts