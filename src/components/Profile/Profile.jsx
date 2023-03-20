import React from 'react';
import './Profile.css'
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Accordion from '../Accordion/Accordion';
import { useSelector } from 'react-redux';

const Profile = () => {

    const state = useSelector(state => state.users.currentUser);

    return (
        <>
            <SideBar />
            <Header data={state} name="Profile" />
            <div className='profile-left'>

                <div className='name'>
                    <img src={state.profilepicture} alt="profile" height='235px' width='235px' className='profile' />
                    <h2>{state.name}</h2>

                    <p>
                        Username : <span>{state.username}</span>
                    </p>

                    <p>
                        Email : <span>{state.email}</span>
                    </p>
                    <p>
                        Phone : <span>{state.phone}</span>
                    </p>
                    <p>
                        website : <span>{state.website}</span>
                    </p>

                </div>

                <hr style={{ color: '#CCCCCC' }} />



                <div className='company'>

                    <h2>Company</h2>
                    <p>
                        Name : <span>{state.company.name}</span>
                    </p>

                    <p>
                        catchPhrase : <span>{state.company.catchPhrase}</span>
                    </p>
                    <p>
                        bs : <span>{state.company.bs}</span>
                    </p>
                </div>

            </div>

            <div className="vl"></div>


            <div className='profile-right'>
                <div className='location'>
                    <h2>Address  :  </h2>

                    <p>
                        Street  :  <span>{state.address.street}</span>
                    </p>

                    <p>
                        Suite  :  <span>{state.address.suite}</span>
                    </p>

                    <p>
                        City  :  <span>{state.address.city}</span>
                    </p>

                    <p>
                        ZipCode  :  <span>{state.address.zipcode}</span>
                    </p>

                    {/*  Google Map Copied Code  */}
                    <iframe src=
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                        width="400"
                        height="300"
                        frameborder="0"
                        style={{ border: "0", padding: '2rem', width: '90%', height: '300px', borderRadius: '10px' }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0">
                    </iframe>

                    <div className='direction'>
                        <p>
                            Lat : <span>{state.address.geo.lat}</span>
                            &emsp; &emsp;
                            Long : <span>{state.address.geo.lng}</span>
                        </p>
                    </div>

                </div>

                <div className='chat'>
                    <Accordion />
                </div>

            </div>

        </>
    )
}

export default Profile;
