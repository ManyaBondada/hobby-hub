import React, { useState, useEffect } from 'react'
import './DetailedPost.css'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
 
const DetailedPost = () =>  {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPost();
      }, [id])

      const fetchPost = async () => {
        const { data} = await supabase
          .from('Avatarposts')
          .select("*")
          .eq('id', id)
          .single();
          setPost(data)
          console.log(post.title);
      }


  return (
      <div className="DetailedPost">

          <p className="title">{"Title: " + post.title}</p>
          <p className="descr">{"Description: " + post.descr}</p>
          <img className="image" alt="avatar" src={post.image} />
        
          {/* link edit post button */}
          {/* link delete post button */}
          {/* link go back to main post screen */}
      </div>
  );
};

export default DetailedPost;