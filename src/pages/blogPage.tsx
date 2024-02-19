import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import { PostModel } from '../models/PostModel';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = ({}: BlogPageProps) => {
  const initBlogs: PostModel[] = [
    {
      id: 1,
      text: 'Botstrap is Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.',
      date: '14 Octubre 2023',
    },
    {
      id: 2,
      text: 'React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.',
      date: '14 Octubre 2023',
    },
    {
      id: 3,
      text: 'React Router enables "client side routing" In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.',
      date: '14 Octubre 2023',
    },
  ];

  const [listBlogs, setListBlogs] = useState<PostModel[]>(initBlogs);

  return (
    <>
      <h3>Blog Page</h3>
      <br />
      <div className='list-group'>
        {listBlogs.map((blog) => (
          <Link
            to={
              '/blogPage/' +
              blog.id +
              '?text=' +
              encodeURIComponent(blog.text) +
              '&date=' +
              encodeURIComponent(blog.date)
            }
            className='list-group-item list-group-item-action '
            aria-current='true'
          >
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>
                <img
                  src={logo}
                  width='30'
                  height='24'
                  className='d-inline-block'
                />
                &nbsp; Andrés Calle
              </h5>
              <small>📍 Medellín</small>
            </div>
            <p className='mb-1'>{blog.text}</p>
            <small>{blog.date}</small>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
