import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/api/get-all-blogs")
      .then((response) => response.json())
      .then((res) => setBlogs(res));
  }, [blogs]);

  const handleDelete = (id) => {
    console.log("clicked", id);
    fetch(`http://localhost:3003/api/delete/${id}`, {
      method: "DELETE",
    });

    const newBlog = blogs.filter((b) => b._id !== id);
    setBlogs(newBlog);
  };
  return (
    <>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <Typography variant="h3">{blog.title}</Typography>
          <Typography variant="body">{blog.content}</Typography>
          <Button onClick={() => handleDelete(blog._id)}>Delete</Button>
        </div>
      ))}
    </>
  );
};

export default AllBlogs;
