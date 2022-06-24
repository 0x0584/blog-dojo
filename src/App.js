import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BlogDetails from './BlogDetails';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Home from "./Home";
import Create from './Create';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails /> } />
            <Route to="*"element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
