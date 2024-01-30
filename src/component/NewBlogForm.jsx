import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

const NewBlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [draftBlog, setDraftBlog] = useState({
    title: " ",
    content: "",
    author: "",
  });

  const handleSubmit = () => {
    setDraftBlog({ title: title, content: content, author: author });
    fetch("http://localhost:3003/api/create-blog", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(draftBlog),
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px', alignItems: 'center' }}>
        <Typography variant="h3" gutterBottom>
            Them Blogs
      </Typography>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Content"
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Author"
        variant="outlined"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit Blog
      </Button>
    </Box>
  );
};

export default NewBlogForm;
