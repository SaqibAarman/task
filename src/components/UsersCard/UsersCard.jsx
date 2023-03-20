import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllUsers } from '../../features/users/usersSlice';
import './UsersCard.css';
import { setCurrentUsers } from '../../features/users/usersSlice';

const UsersCard = () => {
    const users = useSelector(getAllUsers);
    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(setCurrentUsers(item))
    }

    return (
        <div className='container'>
            <div className='main'>

                <div className='title'>
                    <h2>Select An Account</h2>
                </div>

                <hr style={{ color: 'GrayText' }} />

                <div className='user-list'>
                    <ul>
                        {
                            users?.map((item) => (
                                <li className='card' value={item} onClick={() => handleClick(item)}>
                                    <img src={item.profilepicture} width='35px' height='35px' alt='profile' />
                                    <NavLink to={`profile`} key={item.id} state={item} className='nav' >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UsersCard