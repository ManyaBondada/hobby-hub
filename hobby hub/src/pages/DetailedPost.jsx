import React, { useState, useEffect } from 'react'
import './DetailedPost.css'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'
 
const DetailedPost = () =>  {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [count, setCount] = useState();

    useEffect(() => {
        fetchPost();
      }, [id])

      const fetchPost = async () => {
        const {data} = await supabase
          .from('Avatarposts')
          .select("*")
          .eq('id', id)
          .single();
          setPost(data)
          setCount(data.upvotes)
      }

  // update upvote count
  const updateUpCount = async (event) => {
    event.preventDefault();
    // Update in Supabase
    await supabase
      .from('Avatarposts')
      .update({ upvotes: count + 1})
      .eq('id', id)
      setCount(count + 1);
  }

  return (
      <div className="DetailedPost">

          {/* post content */}
          <div className="topContent">
            <Link to={`edit/${id}`}><img className="editButton" alt="edit button" src={'https://th.bing.com/th/id/OIP.YwxRLeYYAks_ZHMia4iC9AAAAA?pid=ImgDet&rs=1'} /></Link>
            { post.created_at == 1
              ? (<p className="timeStamp"> 1 hour ago</p> )
              : (<p className="timeStamp"> Created {Math.floor((Date.now() - Date.parse(post.created_at)) / (1000 * 60 * 60))} hours ago</p> )}         
          </div>
          
          <p className="title2">{post.title}</p>
          <p className="descr2">{post.descr}</p>
          <img className="image" alt="avatar" src={post.image} />
        
          {/* upvotes div */}
          <div className="up">
            <button onClick={updateUpCount} className="upVoteButton">
              <img className="upvoteImage" src={'https://th.bing.com/th/id/R.a494164dc62e24085eccb407b85b338d?rik=wgX3uKLfvQo3Cg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2fg7k%2f9iRg7koXT.png&ehk=IZLVLiQFwkr3vr0uklGH4YaV4Hhj9f37c%2fK0cZYKpNM%3d&risl=&pid=ImgRaw&r=0'}/>
            </button>
            {count == 1 
              ? (<p className="upvoteCount2">{count} upvote</p>)
              : (<p className="upvoteCount2">{count} upvotes</p>)}
          </div>

          {/* comments div */}
          <div className="comments">
            <div className="writeComments">
              <form>
                    <label for="comments"></label> <br />
                    <textarea placeholder="Leave a comment" id="comments" name="comments" rows="1" cols="50"/>
                    <br/>
                </form>
            </div>
          </div>
      
      </div>
  );
};

export default DetailedPost;