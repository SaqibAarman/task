import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Background from '../Background';
import UsersCard from '../UsersCard/UsersCard';
import './Home.css'
import axios from 'axios';
import { addUsers } from '../../features/users/usersSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserDetails = async () => {
            const response = await axios.get("https://panorbit.in/api/users.json")
                .catch((err) => {
                    console.log(err);
                });
            dispatch(addUsers(response.data.users))
        }

        fetchUserDetails();
    }, [dispatch])

    return (
        <div className='wrapper'>
            <div style={{
                position: 'absolute',
                top: '0%',
            }}>
                <Background />
            </div>
            <UsersCard />
        </div>
    )
}

export default Home