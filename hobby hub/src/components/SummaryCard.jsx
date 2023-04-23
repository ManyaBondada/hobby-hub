import React from 'react'
import './SummaryCard.css'
import { Link } from 'react-router-dom'


const SummaryCard = (props) =>  {

  return (
      <div className="SummaryCard">
          {/* <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link> */}
          <p className="title">{"Title: " + props.title}</p>
          <p className="descr">{"Description: " + props.descr}</p>
          <img className="image" alt="avatar" src={props.image} />
      </div>
  );
};

export default SummaryCard;