
import Footer from '../components/Footer'
import Header from '../components/Header'
import Card from '../components/Card'
import "../css/blog.css";



export default function Blog(){
  return(
    <>
<<<<<<< HEAD
    <Header/>
    <Card/>
    <Footer/>
=======
    {/* <Header /> */}
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
>>>>>>> 3ae8556de77f259f69d61057f1074cf6c55567a4
    </>
  )
}

