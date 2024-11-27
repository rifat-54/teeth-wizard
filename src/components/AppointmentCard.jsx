import React from "react";

const AppointmentCard = ({ item }) => {
  return (
    <div className="card bg-base-100  shadow-xl">
      
        
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.treatment}</h2>
        <p>{item.date}</p>
        
      </div>
    </div>
  );
};

export default AppointmentCard;
