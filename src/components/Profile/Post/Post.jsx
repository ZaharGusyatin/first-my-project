import React from 'react'
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src={props.src} />
            {props.message} </div>
}
export default Post