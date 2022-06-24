import { useParams } from "react-router";
import useFetch from "./useFetch";

var BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch("http://localhost:3030/blogs/" + id);

    return (
        <div className="blog-detail">
            { isPending && <div>Loading...</div> }
            { error && <div> {error} </div> }
            { blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>Written by: {blog.author}</p>
                    <div> {blog.body} </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
