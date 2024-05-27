import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import Loading from './components/Loading';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data);
      console.log(res.data);
    })

  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((data) => data.json())
  //     .then((data) => {
  //         setPosts(data);
  // });
  }, []);
  return (
    <div className="App">
    <Header/>
    <div className='container'>
    {
      posts ? 
      
        (
          posts.map((posts) => {
            return (
           <Post key={posts.id} {...posts}/>
            
            );
          }))
        
       : (<Loading/>)
    }
    </div>
     </div>
  );
}

export default App;
