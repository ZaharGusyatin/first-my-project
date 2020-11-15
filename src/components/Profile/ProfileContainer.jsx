import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {
    componentDidMount(){
        debugger
    let userId=this.props.match.params.userId
        if (!userId){
            userId=2
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId).then(response => {
            //отправляет на сервак
            this.props.setUserProfile(response.data)
        })
    }
    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
        />

    }
}
let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
})

 let WithUtlDataContainerComponent= withRouter(ProfileContainer)
//получить данный из урла
export default connect(mapStateToProps, {setUserProfile})(WithUtlDataContainerComponent)