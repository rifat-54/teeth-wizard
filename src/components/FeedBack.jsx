import React from "react";

const FeedBack = ({ feed }) => {
  const { name, image, review } = feed;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <div className="flex gap-8 justify-between items-center">
          <img className="w-12 h-12 rounded-full" src={image} alt="" />
          <h2 className="card-title">{name}</h2>
          <p className="text-right">{new Date().toLocaleDateString()}</p>
        </div>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          <button className="btn ml-8 btn-primary">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
