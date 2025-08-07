import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

import { books } from './data/books';
import { blogs } from './data/blogs';
import { courses } from './data/courses';

import './index.css';

function App() {
  return (
    <div className="main-container">
      <CourseDetails courses={courses} />
      <BookDetails books={books} />
      <BlogDetails blogs={blogs} />
    </div>
  );
}

export default App;
