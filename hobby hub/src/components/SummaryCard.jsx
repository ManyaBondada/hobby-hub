import React, {useState} from 'react'
import './SummaryCard.css'
import { Link } from 'react-router-dom'
import { supabase } from '../client'


const SummaryCard = (props) =>  {

  return (
      <div className="SummaryCard">
          <Link to={`detail/${props.id}`}><img className="moreButton" alt="expand button" src={'https://th.bing.com/th/id/OIP.9BCCWxe9t-vL9cpIHTX7_AHaG1?pid=ImgDet&rs=1'} /></Link>
          <p className="timeStamp"> Created {props.created_at} hours ago</p>
          <p className="title">{props.title}</p>
          <p className="upvoteCount">{props.upvotes} upvotes</p>          
      </div>
  );
};

export default SummaryCard;