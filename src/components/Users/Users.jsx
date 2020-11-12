import React from 'react'
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../../src/assets/images/default-user-image.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            //отправляет на сервак
            debugger
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged=(pages)=>{
this.props.setCurrentPage(pages)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}&count=${this.props.pageSize}`).then(response => {
            //отправляет на сервак
            debugger
            this.props.setUsers(response.data.items)

        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={this.props.currentPage === p && s.clicked}
                         onClick={()=> { this.onPageChanged(p)  }}>{p}</span>
                    })
                }
            </div>
            {this.props.users.map(u => <div key={u.id}>
                <span><dix><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={s.userPhoto}/></dix>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>
                            Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>
                            Follow</button>}

                </div>
            </span>
                <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
         <span>
             <div>{'u.location.city'}</div>
             <div>{'u.location.country'}</div>
         </span>
        </span>


            </div>)
            }
        </div>
    }


}

export default Users