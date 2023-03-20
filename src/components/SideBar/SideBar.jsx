import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.css'

const SideBar = () => {

    const menuItem = [
        {
            path: `/profile`,
            name: "Profile",

        },
        {
            path: "/post",
            name: "Post",

        },
        {
            path: "/gallery",
            name: "Gallery",
        },
        {
            path: "/todo",
            name: "ToDo",
        }
    ];

    return (
        <div className="container">
            <div className='sidebar'>

                <div className='sidebar-list'>
                    <ul className='item'>
                        {
                            menuItem.map((item) => (
                                <Link to={item.path} key={item.name}
                                    id={window.location.pathname === item.path ? "active" : ''}
                                    className='list'>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SideBar;