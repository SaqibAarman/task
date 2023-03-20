import React, { useState } from 'react';
import './Accordion.css'
import { BsChatRight } from 'react-icons/bs';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../features/users/usersSlice';

const Accordion = () => {

    const [isOpen, setIsOpen] = useState(false);
    const users = useSelector(getAllUsers);

    return (
        <div className='accordion'>
            <div
                className="accordion-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>
                    <BsChatRight size={25} color='white' />
                </span>

                <h2>Chats</h2>
                <div className='accordion-indicator'>
                    {
                        isOpen ? <AiOutlineDown size={20} color='white' /> : <AiOutlineUp size={20} color='white' />
                    }
                </div>
            </div>

            {
                isOpen && (<div className="accordion-body">
                    {
                        users?.map((user) => (
                            <div className='list-data' key={user.id}>
                                <img src={user.profilepicture} alt="avatar" width='30' height="30" />
                                <span
                                >
                                    {user.name}
                                </span>

                                <span className='dot'></span>
                            </div>

                        ))
                    }

                </div>)
            }



        </div>
    )
}

export default Accordion