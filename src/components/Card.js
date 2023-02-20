import React from "react";
import './Card.css';

const Card = ({ name, email, id, username }) => {
  return (
    <div className="card tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <>
        <h2>{name}</h2>
        <p>{email}</p>
        {/* <p>{username}</p> */}
      </>
    </div>
  );
};

export default Card;
