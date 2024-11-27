import React, { useContext } from 'react';
import { authContex } from './AuthProvider/AuthProvider';
import AppointmentCard from './AppointmentCard';

const MyAppointMent = () => {
    const{user}=useContext(authContex)
    const localData=localStorage.getItem('appointment');
    let foundData=[]
    if(localData){
        foundData=JSON.parse(localData)
    }

    const userData=foundData.filter(data=>data.email==user.email)
    console.log(userData)

    return (
        <div>
            <h2>my appointment ({userData.length})</h2>
            <div className='grid mt-12 grid-cols-3 gap-7'>
            {
                userData.map(item=><AppointmentCard key={item.email} item={item}></AppointmentCard>)
            }
            </div>
        </div>
    );
};

export default MyAppointMent;
