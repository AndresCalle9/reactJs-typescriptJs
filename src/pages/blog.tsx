import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PostModel } from '../models/PostModel';

const Blog = () => {
  let { idBlog } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [blog, setBlog] = useState<PostModel>({
    id: 0,
    text: '',
    date: '',
  });

  useEffect(() => {
    setBlog({
      ...blog,
      id: parseInt(idBlog!),
      text: searchParams.get('text')!,
      date: searchParams.get('date')!,
    });
  }, []);
  return (
    <div>
      <h1>Blog {blog.id}</h1>
      <h5>{blog.text}</h5>
      <p>{blog.date}</p>
    </div>
  );
};

export default Blog;
