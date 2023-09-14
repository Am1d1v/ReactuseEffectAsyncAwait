import { useEffect, useState } from "react";
import React from "react";
import Post from "./Post";

const URL_API = 'https://jsonplaceholder.typicode.com/posts';

function Posts(){

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
      async function PostsData(){
        try {
          const res = await fetch(URL_API)
          const posts = await res.json();
          setPosts(posts); 
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      }
      PostsData();
    }, [])



/*
    useEffect(() => {
        fetch(URL_API)
        .then(response => response.json())
        .then((posts) => {
            //console.log(posts)
            setPosts(posts)
        })
        .catch((error) => setError(alert(error.message)))
        .finally(() => setIsLoading(false))
    }, [])
    */

    //console.log(posts)

    if(error){
      return (
        <h1>Error: {error}</h1>
      )
    }

    return(
       <React.Fragment>
        {isLoading ? <h1>Loading...</h1> : posts.map((post) => {
           return <Post {...post} key={post.id}/>
         })}
         
       </React.Fragment>
    )
}

export default Posts;