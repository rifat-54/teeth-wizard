import React, { useContext } from 'react';
import './navber.css'
import { NavLink } from 'react-router-dom';
import { authContex } from './AuthProvider/AuthProvider';

const Navber = () => {
    const{user,handleLogOut}=useContext(authContex)
    return (
        <div className='bg-blue-500 text-white flex justify-between items-center px-6 py-6'>
            <div>
                <h2 className='text-3xl font-bold'>TEETH WIZARD</h2>
            </div>
            <div className='space-x-6 text-xl font-semibold'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/alltreatment'}>All Treatment</NavLink>
                <NavLink to={'/myappointment'}>My Appointments</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                
            </div>
            <div>
                {
                    user? 
                    <div>
                        <button className='btn' onClick={handleLogOut}>Log Out</button>
                    </div>
                    :

                <NavLink to={'/login'}> <button className='btn'>Login</button></NavLink>
                }
                
            </div>
        </div>
    );
};

export default Navber;