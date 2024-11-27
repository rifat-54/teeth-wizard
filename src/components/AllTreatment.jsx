import React from 'react';
import ServiceCard from './ServiceCard';
import { useLoaderData } from 'react-router-dom';

const AllTreatment = () => {
    const service=useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
             <div className='grid grid-cols-4 gap-5 mt-10'>
                {
                    service.map(item=><ServiceCard service={item} key={item.id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllTreatment;