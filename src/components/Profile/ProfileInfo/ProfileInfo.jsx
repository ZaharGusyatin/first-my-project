import React from 'react'
import Spinner from "../../common/Spinner/Spinner";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile)//значит выражение что его нет(0 или нулл)
    {
        return <Spinner/>
    }
    return <ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}

    />


}
export default ProfileInfo