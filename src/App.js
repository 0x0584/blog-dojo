import './App.css';
import { Router } from 'react-router';
import BlogList from './BlogList';

function App() {
  return (
      <div className="App">      
        <p>Blogs</p>
        <BlogList />
      </div>
  );
}

export default App;
