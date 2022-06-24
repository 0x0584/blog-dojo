import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {
                blogs.map(blog => (
                    <div key={blog.id} className="blog-detail">
                        <Link to={`/blogs/${blog.id}`}>
                            <h2> {blog.title} </h2>
                            <p> Written by: {blog.author} </p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;