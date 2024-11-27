import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const{image,cost,description,treatment,id}=service;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
        className="h-[200px] w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge w-16 badge-secondary">$ {cost}</div>
        </h2>
        <p title={description}>{description.slice(0,100)}. . .</p>
        <div className="card-actions justify-center mt-5">
          <Link to={`/details/${id}`} className="btn btn-primary">CheckOut More</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
