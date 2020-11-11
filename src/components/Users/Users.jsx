import React from 'react'
import s from "./Users.module.css";


const Users = (props) => {
    if (props.users.length===0){
    props.setUsers([
        {
            id: 1,
            followed: true,
            photoUrl:'https://ua-news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg',
            fullName: 'Zahar1',
            status: 'I Like It1',
            location: {city: 'Cherkassy1', country: 'Ukraine1'}
        },
        {
            id: 2,
            followed: false,
            photoUrl:'https://ua-news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg',
            fullName: 'Zahar2',
            status: 'I Like It2',
            location: {city: 'Cherkassy2', country: 'Ukraine2'}
        },
        {
            id: 3,
            followed: true,
            photoUrl:'https://ua-news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg',
            fullName: 'Zahar3',
            status: 'I Like It3',
            location: {city: 'Cherkassy3', country: 'Ukraine3'}
        },
        {
            id: 4,
            followed: false,
            photoUrl:'https://ua-news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg',
            fullName: 'Zahar4',
            status: 'I Like It4',
            location: {city: 'Cherkassy4', country: 'Ukraine4'}
        },
        {
            id: 5,
            followed: true,
            photoUrl:'https://ua-news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg',
            fullName: 'Zahar5',
            status: 'I Like It5',
            location: {city: 'Cherkassy5', country: 'Ukraine5'}
        },
        {
            id: 6,
            followed: false,
            photoUrl:'https://ua-news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg',
            fullName: 'Zahar6',
            status: 'I Like It6',
            location: {city: 'Cherkassy6', country: 'Ukraine6'}
        }
    ])}

    return <div>{
        props.users.map(u => <div key={u.id}>

            <span><dix><img src={u.photoUrl} className={s.userPhoto}/></dix>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>
                            Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>
                            Follow</button>}

                </div>
            </span>
            <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
         <span>
             <div>{u.location.city}</div>
             <div>{u.location.country}</div>
         </span>
        </span>


        </div>)
    }
    </div>


}
export default Users