import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'

const ReadPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Avatar Posts')
        .select()
        .order('created_at', { ascending: true })

        setPosts(data);
      }
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} tile={post.title} descr={post.descr} image={post.image} key={index}/>
                ) : <h2>No Posts Yet. Click to Add!</h2>
            }
        </div>  
    )
}

export default ReadPosts;