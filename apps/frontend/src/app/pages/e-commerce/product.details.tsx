import React, { useState } from 'react';
import Search from '../../../assets/search.png';
import Logo from '../../../assets/Logo.png';
import back from '../../../assets/back.png';
import cart from '../../../assets/cart.png';
import {
  Button,
  CommerceMedia,
  Footer,
  Input,
  Media,
  Ratings,
  Select,
} from '@shule/web/components';
import { Carousel, SchoolNavbar, Slider } from '@shule/web/containers';
import { useNavigate } from 'react-router-dom';
function ProductDetails() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      {' '}
      <div className="px-5 pb-10 md:px-0">
        <div className="px-5">
          {' '}
          <SchoolNavbar Logo={Logo} Search={Search} cart={cart} />
        </div>
        <div className="">
          <Slider
            items={[
              {
                image: 'https://picsum.photos/800',
              },
              {
                image: 'https://picsum.photos/800',
              },
              {
                image: 'https://picsum.photos/800',
              },
              {
                image: 'https://picsum.photos/800',
              },
              {
                image: 'https://picsum.photos/800',
              },
            ]}
            title="Item 1"
          />
        </div>
        <div className="flex mt-4 items-center justify-between md:max-w-5xl md:mx-auto">
          <h1 className="text-mainDark font-bold text-xl">KSH. 20.02</h1>
          <div>
            <div className="flex items-center justify-between ">
              <p className="bg-primary font-bold text-2xl px-2 cursor-pointer">
                -
              </p>
              <p className="font-bold px-2 text-2xl">2</p>
              <p className="bg-primary font-bold text-2xl px-2 cursor-pointer">
                +
              </p>
              <div className="ml-5">
                <Button
                  bgColor="bg-primaryDark"
                  bgColorHover="bg-primaryDark"
                  px="px-5"
                  py="py-2"
                  textColor="text-main"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:max-w-5xl md:mx-auto">
          <h1 className="font-bold text-main text-xl py-3">Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
            purus sagittis urna enim. At amet, amet quis velit nec. Dolor,
            volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in
            ac. Tincidunt.
          </p>
        </div>

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
          <div className="md:max-w-md">
            <Input bgColor="bg-primary" py="py-8" type="textarea" />
          </div>
        </div>
        <div className="my-8 md:max-w-5xl md:mx-auto">
          <h1 className="text-main py-4 font-semibold text-xl">
            Where should we deliver?
          </h1>
        </div>
        <div className="pb-10  md:max-w-5xl md:mx-auto">
          <p className="text-md font-semibold font-Montserrat mb-4">
            Select city/Town
          </p>
          <Select
            name="country"
            options={['Afghanistan', 'Albania', 'Algeria', 'Andorra']}
            firstOption="Select city/Town"
          />
        </div>
        <div>
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
            title="Similar Products"
          />
        </div>
        <div>
          <Slider
            items={[
              {
                image: 'https://picsum.photos/800',
                schoolType: 'School 2',
                onClick: () => navigate('/view-school-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'School 2',
                onClick: () => navigate('/view-school-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'School 2',
                onClick: () => navigate('/view-school-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'School 2',
                onClick: () => navigate('/view-school-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'School 2',
                onClick: () => navigate('/view-school-details/1234'),
              },
            ]}
            title="Browse schools"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
