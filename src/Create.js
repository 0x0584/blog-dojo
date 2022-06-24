import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3030/blogs/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body, author })
        }).then(() => {
            console.log(body);
            navigate('/');
        });
    }

    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid-label"><label>Blog Title</label></div>
                <div className="grid-input">
                    <input
                        required
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="grid-label"><label>Blog Body</label></div>
                <div className="grid-input">
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>

                <div className="grid-label"><label>Author</label></div>
                <div className="grid-input">
                    <input
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className="grid-btn"><button>Add Blog</button></div>
            </form>
        </div>
    );
}

export default Create;