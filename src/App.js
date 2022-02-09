import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import Header from './components/Header'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      let fetchData = async () => {
          let response = await fetch('https://jsonplaceholder.typicode.com/posts');
          let data = await response.json();
          setPosts(data);
      }
      fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
    <Routes>
      <Route exact path='/' element={<Home posts={posts}/>}/>
      <Route path='/post/:id' element={<Post />}/>
    </Routes>
      </header>
    </div>
  );
}

export default App;
