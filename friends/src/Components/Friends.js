import React from 'react';
import { NavLink } from 'react-router-dom';
import './Friends.css';

function Friends (props){
    return(
        <div className = 'friend-list-wrapper'>
        <div className='friend-link'>
            <NavLink to ='/friend-form'>Add Friend</NavLink>
        </div>

        {props.friends.map(friend =>
        <div className='friend-card' key={friend.id} >
        <h1>{friend.name}, {friend.age}</h1>
        <p>{friend.email}</p>
        </div>)}
        </div>
    )
}

export default Friends;