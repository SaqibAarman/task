import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

const Post = () => {

    const currentUser = useSelector(state => state.users.currentUser);

    return (
        <>
            <SideBar />
            <Header name="Post" data={currentUser} />
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '100%', height: '100vh'
            }}>
                <p style={{
                    textAlign: 'center', fontSize: '36px',
                    fontWeight: 'bolder', color: 'gray'
                }}> Comming Soon</p>

            </div>
        </>
    )
}

export default Post