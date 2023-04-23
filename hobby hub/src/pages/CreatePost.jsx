import React from 'react';
import {useState} from 'react';
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {

    const [post, setPost] = useState({title: "", descr: "", image: ""});

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

    const createPost = async (event) => {
        
        event.preventDefault(); 

        await supabase
            .from('Avatarposts')
            .insert({title: post.title, descr: post.descr, image: post.image})
            //.select();

            window.location = "/";   
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label for="descr">Description</label><br />
                <input type="text" id="descr" name="descr" value={post.descr} onChange={handleChange}/><br/>
                <br/>

                <label for="image">Image URL</label><br />
                <input type="text" id="image" name="image" value={post.image} onChange={handleChange}/><br/>
                <br/>

                <input type="submit" value="Submit" onClick={createPost}/>
                <br/>

            </form>
        </div>

    )

}

export default CreatePost