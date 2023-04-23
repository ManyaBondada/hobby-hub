import React from 'react'
import './SummaryCard.css'
import { Link } from 'react-router-dom'


const SummaryCard = (props) =>  {

  return (
      <div className="SummaryCard">
          <Link to={`detail/${props.id}`}><img className="moreButton" alt="expand button" src={'https://th.bing.com/th/id/OIP.9BCCWxe9t-vL9cpIHTX7_AHaG1?pid=ImgDet&rs=1'} /></Link>
          <p className="timeStamp">Created {props.created_at} hours ago</p>
          <p className="title">{props.title}</p>
          <img className="upvote" src={'https://th.bing.com/th/id/R.a494164dc62e24085eccb407b85b338d?rik=wgX3uKLfvQo3Cg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2fg7k%2f9iRg7koXT.png&ehk=IZLVLiQFwkr3vr0uklGH4YaV4Hhj9f37c%2fK0cZYKpNM%3d&risl=&pid=ImgRaw&r=0'}/>
      </div>
  );
};

export default SummaryCard;