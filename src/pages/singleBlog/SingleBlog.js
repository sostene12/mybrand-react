import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

import "./SingleBlog.css";

const SingleBlog = () => {
  const { blogId } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  const [allBlogs,setAllBlogs] = useState([])

  const getAllBlogs = async () =>{
    try {
      const res = await axios.get("https://faithful-onesies-dog.cyclic.app/api/blog/all");
      setAllBlogs(res.data.data.filter(blog => blog._id !== singleBlog._id));
    } catch (error) {
      
    }
  }
  const getSingleBlog = async () => {
    try {
      const res = await axios.get(
        `https://faithful-onesies-dog.cyclic.app/api/blog/${blogId}`
      );
      setSingleBlog(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleBlog();
    getAllBlogs();
  }, []);
  console.log(singleBlog)
  return (
    <div className="container">
      <div className="blog">
        <div className="blog-header-content">
          <div className="back-button">
            <Link to="/">
              <i className="fa-solid fa-circle-arrow-left"></i>
            </Link>
          </div>
          <div className="login-btn">
            <a href="accounts.html">Login</a>
          </div>
        </div>

        <div className="blog-detail">
          <div className="blog-detail">
            <h2>{singleBlog?.title}</h2>
            <img src={singleBlog?.image} />
            <div className="tags">
              <div className="author">Ng sostene</div>
              <div className="date">December 12 2022</div>
            </div>
            <h4>Introduction</h4>
            <div className="description">{singleBlog?.description?.replaceAll(/(<([^>]+)>)/ig, '')}</div>
            <div className="icons">
              <span>{singleBlog?.likes}</span>
              <i className="fa-solid fa-thumbs-up"></i>
            </div>
          </div>
        </div>

        <form action="" className="comment-form">
          <label>Leave Comment</label>
          <textarea cols="30" rows="5" id="comment" name="comment" ></textarea>
          <span className="commentError"></span>
          <button>Comment</button>
        </form>

        <div className="comments-title">Comments</div>
        <div className="users-comments">
          {singleBlog?.comments?.map(comment => (
            
            <div className="all-comments" key={comment._id}>
            <div className="comment-header">
              <span>{comment.name}</span>
              <span>{comment.date}</span>
            </div>
            <span>{comment.comment}</span>
          </div>
          ))}
        </div>
      </div>
      <div className="other-blogs">
        <h2>OTHER BLOGS</h2>
        <div className="">
          {allBlogs?.map(blog => (
            <div className="related-stories">
            <div className="image">
              <img src={blog.image} alt="blog image" />
            </div>
            <div className="small-intro">
              <div>{blog.title.slice(0,20)}</div>
              <div>
                {blog.description?.slice(0,30)}
              </div>
              <div>Read More</div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
