import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogHome from './pages/BlogHome';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import { blogPosts } from './data/blogPosts/index';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<BlogHome />} />
          {blogPosts.map((post) => (
            <Route 
              key={post.slug}
              path={`/blog/${post.slug}`} 
              element={<BlogPost post={post} />} 
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;