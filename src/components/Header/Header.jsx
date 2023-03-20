import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsers, setCurrentUsers } from '../../features/users/usersSlice';
import './Header.css'


const Header = ({ data, name }) => {
    const [open, setOpen] = useState(false);

    const users = useSelector(getAllUsers);
    const dispatch = useDispatch()

    // To Display Only 2 users from users list
    const listUsers = users.filter((user) => user.id !== data.id);
    const listUser = listUsers.slice(0, 2)

    let menuRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {

        // To Handle / Close the menu by clicking on the div
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        // On Mouse Hover Add Listener
        document.addEventListener("mousedown", handler);

        return () => {
            // On Mouse Hover Remove Listener
            document.removeEventListener("mousedown", handler);
        }

    });

    const handleSignOut = () => {
        navigate('/')
    }

    const handleClick = (user) => {
        dispatch(setCurrentUsers(user))
    }

    return (
        <header className='header'>
            <div className='logo'>{name}</div>
            <div className='nav-list' ref={menuRef} onClick={() => { setOpen(!open) }}>
                <img src={data?.profilepicture} alt="avatar" width='35' height='35' className='profile' />
                <span>{data?.name}</span>
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'} `} >

                <div className='profile-data'>
                    <img src={data.profilepicture} alt='profile' width='100' height='100' />
                    <h3>{data.name}</h3>
                    <span>{data.email}</span>
                </div>

                {
                    listUser?.map((user) => (

                        <>
                            <Link onClick={() => handleClick(user)} state={user} className='dropdownItem'>
                                <img src={user.profilepicture} alt='profile' width='30' height='30' />
                                <span>{user.name}</span>
                            </Link>

                        </>
                    ))
                }
                <span className='sign'>
                    <button onClick={handleSignOut}>Sign out</button>
                </span>
            </div>

        </header>
    )
}

export default Header;
