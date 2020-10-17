import React from 'react';

import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import BlogPost from "./BlogList"
import BlogList from "./BlogPost"

function App() {
    

  const Blog  = BlogPost.map(blog => <BlogList key={blog.id} title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />)



return (
    <div>
      <Header />
      <Navbar /> 
      <BlogList />  
      <Footer />

    </div>
)
}

export default App