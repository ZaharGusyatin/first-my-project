import React from 'react'
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg  " />
            {props.message} </div>
}
export default Post