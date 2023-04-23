import React, { useState, useEffect } from 'react';
import SummaryCard from '../components/SummaryCard';
import { supabase } from '../client'

const ReadPosts = () => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('upvotes');
    // if sort popular, ascending=false, if sort newest, ascending=true
    const [orderBy, setOrderBy] = useState(false);
 
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Avatarposts')
        .select()
        .order(sortBy, { ascending: orderBy })
        setPosts(data);
    }

    const sortedPosts = [...posts].sort((a, b) => { // sorts based on vote/date and re renders feed 
        if (sortBy) {
          if(a[sortBy] == 0)
            return a[sortBy]
          else
            return a[sortBy] - b[sortBy]; // a needs to go before b
        } else {
          return b[sortBy] - a[sortBy]; // b needs to go before a
        }
      });

    const filteredPosts = sortedPosts.filter((post) => // looks through sorted posts to see if title exists
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="ReadPosts">
            
            <div className="function">
                <button className="orderTime" onClick={() => {
                    setSortBy('upvotes');
                    setOrderBy(!sortBy);
                }}>Newest</button>
                <button className="orderUp" onClick={() => {
                    setSortBy('created_at');
                    setOrderBy(!sortBy);
                }}>Popular</button>
                <input className="search" type="text" placeholder="Search by title" value={search} onChange={(e) => setSearch(e.target.value)} />
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