import React from 'react'
import Post from '../Post/Post';
import s from './MyPosts.module.css'

const MyPosts=()=>{
    return <div className={s.paddingTen}>
        <h3>My POSTS</h3>
        <div>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={s.marginTen}>
                <Post message='hello'/>
                <Post message='hello12'/>
                <Post message='hello3'/>
                <Post message='hello4'/>
            </div>

        </div>

    </div>
}
export default MyPosts