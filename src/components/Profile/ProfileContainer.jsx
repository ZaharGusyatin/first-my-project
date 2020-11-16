import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {UsersAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount(){

    let userId=this.props.match.params.userId
        if (!userId){
            userId=2
        }
        this.props.getUserProfile(userId)

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
export default connect(mapStateToProps, {getUserProfile})(WithUtlDataContainerComponent)