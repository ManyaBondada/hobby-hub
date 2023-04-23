import React from 'react'
import './SummaryCard.css'
import { Link } from 'react-router-dom'


const SummaryCard = (props) =>  {

  return (
      <div className="SummaryCard">
          <Link to={`detail/${props.id}`}><img className="moreButton" alt="expand button" src={'https://th.bing.com/th/id/OIP.9BCCWxe9t-vL9cpIHTX7_AHaG1?pid=ImgDet&rs=1'} /></Link>
          <p className="title">{"Title: " + props.title}</p>
          <p className="descr">{"Description: " + props.descr}</p>
          <img className="image" alt="avatar" src={props.image} />
      </div>
  );
};

export default SummaryCard;