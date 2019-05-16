import React from 'react';
import { NavLink } from 'react-router-dom';

function Friends (props){
    return(
        <div className = 'friend-list-wrapper'>
        <div>
            <Navlink to ='/friend-form'>Add Friend</Navlink>
        </div>

        {props.friends.map(friend =>
        <div className='friend-card' key={friend.id} >
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        </div>)}
        </div>
    )
}

export default Friends;