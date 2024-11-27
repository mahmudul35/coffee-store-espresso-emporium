import React from "react";

const CoffeCard = ({ coffees }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffees;
  return (
    <div className="card card-side bg-base-100 shadow-xl ">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-xl font-bold">Name :{name}</h2>
          <p>Chef :{chef}</p>
          <p>Supplier: {supplier}</p>
          <p>Category: {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
