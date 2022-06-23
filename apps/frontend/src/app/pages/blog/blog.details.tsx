import React, { useState } from 'react';
import { MinBlog, Navbar, Slider } from '@shule/web/containers';
import Logo from '../../../assets/Logo.png';
import { Button, Footer, Input, Media, Ratings } from '@shule/web/components';
import { useNavigate } from 'react-router-dom';
function BlogDetails() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar Logo={Logo} />
      <div className="px-5 pt-24">
        <h1 className="text-main text-2xl font-bold py-5 md:max-w-5xl md:mx-auto">
          Blog Title 1
        </h1>
        <div className="md:max-w-5xl md:mx-auto">
          <img src="https://picsum.photos/800" className="w-full" alt="" />
        </div>
        <p className="text-xl py-5 md:max-w-5xl md:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
          purus sagittis urna enim. At amet, amet quis velit nec. Dolor,
          volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in ac.
          Tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Odio amet purus sagittis urna enim. At amet, amet quis velit nec.
          Dolor, volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi
          in ac. Tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Odio amet purus sagittis urna enim. At amet, amet quis velit
          nec. Dolor, volutpat pellentesque fringilla nec ac. Vestibulum
          porttitor mi in ac. Tincidunt.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet
          quis velit nec. Dolor, volutpat pellentesque fringilla nec ac.
          Vestibulum porttitor mi in ac. Tincidunt.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Odio amet purus sagittis urna enim. At
          amet, amet quis velit nec. Dolor, volutpat pellentesque fringilla nec
          ac. Vestibulum porttitor mi in ac. Tincidunt.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim.
          At amet, amet quis velit nec. Dolor, volutpat pellentesque fringilla
          nec ac. Vestibulum porttitor mi in ac. Tincidunt.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim.
          At amet, amet quis velit nec. Dolor, volutpat pellentesque fringilla
          nec ac. Vestibulum porttitor mi in ac. Tincidunt.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim.
          At amet, amet quis velit nec. Dolor, volutpat pellentesque fringilla
          nec ac. Vestibulum porttitor mi in ac. Tincidunt.{' '}
        </p>
        <div className="md:max-w-5xl md:mx-auto">
          <h2 className="text-main py-4 font-semibold text-xl">
            Rating and comments:
          </h2>
          <div className="flex justify-between pb-4">
            {' '}
            <Ratings
              hover={hover}
              rating={rating}
              setHover={setHover}
              setRating={setRating}
            />
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-7"
              py="py-2"
              onClick={() => console.log(rating)}
              textColor="text-main"
            >
              Rate
            </Button>
          </div>
        </div>

        <div className="md:max-w-5xl md:mx-auto">
          <div className="pb-4">
            <Media
              title="Username 1"
              alt="username"
              image="https://picsum.photos/800"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet quis velit "
            />
          </div>
          <div className="pb-4">
            <Media
              title="Username 1"
              alt="username"
              image="https://picsum.photos/800"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet quis velit "
            />
          </div>
          <div className="pb-4">
            <Media
              title="Username 1"
              alt="username"
              image="https://picsum.photos/800"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet quis velit "
            />
          </div>
          <div className="pb-4">
            <Media
              title="Username 1"
              alt="username"
              image="https://picsum.photos/800"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet quis velit "
            />
          </div>
        </div>

        <div className="md:max-w-5xl md:mx-auto">
          <h1 className="text-main py-4 font-semibold text-xl">Add Comment</h1>
          <div className="md:max-w-md pb-10">
            <Input bgColor="bg-primary" py="py-8" type="textarea" />
          </div>
        </div>
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
          {' '}
          <MinBlog
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet quis velit nec. Dolor, volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in ac. Tincidunt."
            image="https://picsum.photos/800"
            title="Blog Post Title"
            onClick={() => navigate('/blog-details/1234')}
          />
        </div>
        <div className="md:max-w-6xl">
          {' '}
          <MinBlog
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet quis velit nec. Dolor, volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in ac. Tincidunt."
            image="https://picsum.photos/800"
            title="Blog Post Title"
            onClick={() => navigate('/blog-details/1234')}
          />
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
