import React, { useState, useEffect } from 'react';
import SummaryCard from '../components/SummaryCard';
import { supabase } from '../client'

const ReadPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Avatarposts')
        .select()
        .order('created_at', { ascending: true })
        setPosts(data);
      }
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <SummaryCard id={post.id} created_at={Math.floor((Date.now() - Date.parse(post.created_at)) / (1000 * 60 * 60))} title={post.title} key={index}/>
                ) : <h2>No Posts Yet. Click to Add!</h2>
            }
        </div>  
    )
}

export default ReadPosts;