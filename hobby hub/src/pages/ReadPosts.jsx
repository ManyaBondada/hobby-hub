import React, { useState, useEffect } from 'react';
import SummaryCard from '../components/SummaryCard';
import { supabase } from '../client'

const ReadPosts = () => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
 
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Avatarposts')
        .select()
        .order('upvotes', { ascending: false })
        setPosts(data);
    }

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="ReadPosts">
            <div className="search">
                <input type="text" placeholder="Search by title" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <br/>
            {
                filteredPosts && filteredPosts.length > 0 ?
                filteredPosts.map((post,index) => 
                   <SummaryCard id={post.id} created_at={Math.floor((Date.now() - Date.parse(post.created_at)) / (1000 * 60 * 60))} title={post.title} upvotes={post.upvotes} key={index}/>
                ) : <h2>No Posts Yet. Click to Add!</h2>
            }
        </div>  
    )
}

export default ReadPosts;