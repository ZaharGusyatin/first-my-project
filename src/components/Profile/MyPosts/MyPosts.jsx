import React from 'react'
import Post from '../Post/Post';
import s from './MyPosts.module.css'

let message=[
    {id:1,message:'hello1'},
    {id:2,message:'hello12'},
    {id:3,message:'hello13'},
    {id:4,message:'hello14'},
    {id:5,message:'hello15'},
    {id:6,message:'hello16'},
]
let postsElements=message.map(p=><Post message={p.message} id={p.id} />)


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
                {postsElements}
            </div>

        </div>

    </div>
}
export default MyPosts