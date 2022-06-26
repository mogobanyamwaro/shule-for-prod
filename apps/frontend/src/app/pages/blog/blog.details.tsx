import React, { useEffect, useState } from 'react';
import { MinBlog, Navbar, Slider } from '@shule/web/containers';
import Logo from '../../../assets/Logo.png';
import { Button, Footer, Input, Media, Ratings } from '@shule/web/components';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getBlogAsync,
  getBlogsAsync,
  useAppDispatch,
  useAppSelector,
} from '@shule/web/redux';
function BlogDetails() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const blog = useAppSelector((state) => state.blog.blog);
  const blogs = useAppSelector((state) => state.blog.blogs);
  const loading = useAppSelector((state) => state.blog.loading);
  useEffect(() => {
    try {
      const url = location.pathname.split('/');
      const id = url[url.length - 1];

      dispatch(getBlogAsync(id));
      dispatch(getBlogsAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log('blog', blog);
  console.log('blogs', blogs);

  return (
    <div>
      <Navbar Logo={Logo} />
      <div className="px-5 pt-24">
        <h1 className="text-main text-2xl font-bold py-5 md:max-w-5xl md:mx-auto">
          {blog.title}
        </h1>
        <div className="md:max-w-5xl md:mx-auto">
          <img src={blog.image} className="w-full" alt="" />
        </div>
        <p className="text-xl py-5 md:max-w-5xl md:mx-auto">{blog.content}</p>

        <div className="md:my-10">
          <Slider
            items={[
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
            ]}
            title="Hot Deals"
          />
        </div>

        <div className="md:max-w-6xl">
          {blogs.map((blog) => {
            return (
              <>
                {' '}
                <MinBlog
                  key={blog.id}
                  description={blog.content}
                  image={blog.image}
                  title={blog.title}
                  onClick={function () {
                    navigate(`/blog-details/${blog.id}`);
                  }}
                />
                <div className="md:max-w-6xl"></div>
              </>
            );
          })}
        </div>
        <Slider
          items={[
            {
              image: 'https://picsum.photos/700',
              schoolType: 'School',
              onClick: () => navigate('/view-school-details/1234'),
            },
            {
              image: 'https://picsum.photos/700',
              schoolType: 'School',
              onClick: () => navigate('/view-school-details/1234'),
            },
            {
              image: 'https://picsum.photos/700',
              schoolType: 'School',
              onClick: () => navigate('/view-school-details/1234'),
            },
          ]}
          title="Featured Schools"
        />
        <div className="md:my-10 mb-7 md:mb-0"></div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetails;
