import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

const EditPost = () => {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const {data} = await supabase
            .from('Avatarposts')
            .select("*")
            .eq('id', id)
            .single();
        setPost(data)
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Avatarposts')
        .update(post)
        .eq('id', id);
    
        window.location = `/detail/${id}`;
    }

    const deletePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Avatarposts')
        .delete()
        .eq('id', id); 
    
        window.location = `/`;
    }

    return (
        <div>
            <form>
            <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label for="descr">Description</label><br />
                <textarea id="descr" name="descr" rows="5" cols="50" value={post.descr} onChange={handleChange}/><br/>
                <br/>

                <label for="image">Image URL</label><br />
                <input type="text" id="image" name="image" value={post.image} onChange={handleChange}/><br/>
                <br/>

                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost