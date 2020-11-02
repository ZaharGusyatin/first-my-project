import React from 'react'
import Post from '../Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.message.map(p => <Post message={p.message} id={p.id} src={p.src}/>)


    return <div className={s.paddingTen}>
        <h3>My POSTS</h3>
        <div>
            <div><textarea/></div>
            <div><button>Add Post</button></div>
            <div className={s.marginTen}>
                {postsElements}
            </div>

        </div>

    </div>
}
export default MyPosts