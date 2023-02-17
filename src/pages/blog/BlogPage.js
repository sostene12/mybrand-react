import React,{useState,useEffect} from 'react';
import "./BlogPage.css";

import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [allBlogs,setAllBlogs] = useState([])

  const getAllBlogs = async () =>{
    try {
      const res = await axios.get("https://faithful-onesies-dog.cyclic.app/api/blog/all");
      setAllBlogs(res.data.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getAllBlogs();
  },[]);

  return (
    <section id="blog-section" className="blog-section">
    <div className="blog">
      <h2>My Blog</h2>
      <div className="cards-section">
        {allBlogs?.map(blog => (
           <div className="card" key={blog._id}>
           <img src={blog.image} alt="blog img" />
           <div className="explanation">{blog.title}</div>
           <h4><Link to={`/blog/${blog._id}`}>Read More</Link></h4>
         </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default BlogPage