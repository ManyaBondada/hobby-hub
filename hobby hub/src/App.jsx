import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import DetailedPost from './pages/DetailedPost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'


const App = () => {
  

  return (
    <Router>
      <div className="App">

        <header className="header">
          <h4>The Air Nation welcomes you</h4>
          <Link to="/"><button>Home</button></Link>
          <Link to="/new"><button>Create Post</button></Link>
        </header>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<ReadPosts/>}/>
            <Route exact path="/new" element={<CreatePost/>}/>
            <Route exact path ="/detail/:id" element={<DetailedPost/>}/>
            <Route exact path="/detail/:id/edit/:id" element={<EditPost/>}/>
          </Routes>
          </div>
        
        
      </div>
    </Router>
  )
}

export default App
