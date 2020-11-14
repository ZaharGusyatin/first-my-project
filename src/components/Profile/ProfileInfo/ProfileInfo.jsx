import React from 'react'
import s from './ProfileInfo.module.css';
import Spinner from "../../common/Spinner/Spinner";

const ProfileInfo = (props) => {
    if (!props.profile)//значит выражение что его нет(0 или нулл)
    {
        return <Spinner/>
    }
    return <div>
        <img className={s.styleImg}
            src='https://static8.depositphotos.com/1020618/933/i/450/depositphotos_9332752-stock-photo-fire-alphabet-letter-s.jpg'>
        </img>
        <div>
            <img src={props.profile.photos.large}/>
            ava</div>
    </div>


}
export default ProfileInfo