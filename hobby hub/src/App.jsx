import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import { Link } from 'react-router-dom'


const App = () => {
  

  return (
    <Router>
      <div className="App">

        <header className="header">
          <h3>The Air Nation welcomes you</h3>
          <Link to="/new"><button>Create Post</button></Link>
        </header>
      
        <Routes>
          <Route exact path="/" element={<ReadPosts/>} />
          <Route exact path="/new" element={<CreatePost/>}/>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
