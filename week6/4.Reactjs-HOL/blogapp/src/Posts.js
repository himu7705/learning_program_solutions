import React from 'react';
import Post from './Post'; 

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }
  loadPosts=async() => {
    try {   
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.setState({ posts: data });
        } catch (error) {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      }
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
        if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
componentDidCatch(error, info) {
     alert("An error occurred while rendering the component.");
    console.error("componentDidCatch:", error, info);
    this.setState({ hasError: true });
}
}

export default Posts;