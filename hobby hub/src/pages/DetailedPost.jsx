import React, { useState, useEffect } from 'react'
import './DetailedPost.css'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'
 
const DetailedPost = () =>  {
    const { id } = useParams();
    const [post, setPost] = useState({});

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
      }


  return (
      <div className="DetailedPost">

          <Link to={`edit/${id}`}><img className="editButton" alt="edit button" src={'https://th.bing.com/th/id/OIP.YwxRLeYYAks_ZHMia4iC9AAAAA?pid=ImgDet&rs=1'} /></Link>
          <p className="title2">{post.title}</p>
          <p className="descr2">{post.descr}</p>
          <img className="image" alt="avatar" src={post.image} />
        

          <div className="comments">
            <div className="writeComments">
              <form>
                    <label for="comments"></label> <br />
                    <textarea placeholder="Leave a comment" id="comments" name="comments" rows="1" cols="50"/>
                    <br/>
                </form>
            </div>
            {/* add user comments here */}
          </div>


          
          {/* link edit post button */}
          {/* link delete post button */}
          {/* link go back to main post screen */}
      </div>
  );
};

export default DetailedPost;