import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import FeedBack from './FeedBack';

const Home = () => {
    const service=useLoaderData()
    // console.log(service)
    const{serviceData,feedData}=service;
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-4 gap-5 mt-10'>
                {
                    serviceData.slice(0,4).map(item=><ServiceCard service={item} key={item.id}></ServiceCard>)
                }
            </div>
            <button className='btn btn-primary mx-auto block my-8'><Link to={'/alltreatment'}>Show More</Link></button>
            <h2 className='text-3xl font-bold text-center mt-24 mb-10'>Patient Feedback</h2>
            <div className='grid grid-cols-3 gap-8'>
                {
                    feedData.map(feed=><FeedBack key={feed.id} feed={feed}></FeedBack>)
                }
            </div>
        </div>
    );
};

export default Home;