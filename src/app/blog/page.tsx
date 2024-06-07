'use client';
import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import axios from 'axios';
// import Footer from '../components/Footer'
// import Header from '../components/Header'
import "../css/blog.css";

const Paginated = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://webangon.com/abr/wp-json/wp/v2/utsposts');
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching:', error);
      }
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  return (
    <>
    <Header />
    <div className='blog-wrapper'>
      <div className='inner ab-noverflow'>
      <h1 className='text-primary mb-3'>Latest Must Reads</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </div>
    </div>
    <Footer/> 
    </>
  );
};

export default Paginated;
