import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          {/* <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link> */}
          <p className="title">{"Title: " + props.title}</p>
          <p className="descr">{"Description: " + props.descr}</p>
          <img className="image" alt="avatar" src={props.image} />
      </div>
  );
};

export default Card;