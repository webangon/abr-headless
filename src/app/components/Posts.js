import React from 'react';
import Link from "next/link";

const Posts = ({ posts, loading }) => {
  if (loading) {
  
  }

  return (
    <>
      <div className='post-wrap ab-noverflow'>
        {posts.map((post, index) => (
          <div key={index} className='list-group-item'>
            <div className='inner'>
              
              <div className='thumbwrap' dangerouslySetInnerHTML={{__html:post.thumb}}></div>
              <div className='excerpt-wrap'>
                <h3><Link href={`blog/${post.slug}`}>{post.name}</Link></h3>
                <span className='post-date'>{post.date}</span>
                <p className='post-excerpt'>{post.excerpt}</p>
                <Link className='btn-more' href={`blog/${post.slug}`}>READ MORE</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
