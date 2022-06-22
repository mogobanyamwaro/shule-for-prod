import React from 'react';
import Search from '../../../assets/search.png';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.png';
import {
  PhotoGallery,
  SchoolNavbar,
  Slider,
  ViewSchoolContainer,
} from '@shule/web/containers';
import { useState } from 'react';
import { Button, Footer, Input, Media, Ratings } from '@shule/web/components';
import { useNavigate } from 'react-router-dom';
export function ViewScholDetails() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5">
        <SchoolNavbar Logo={Logo} Search={Search} />
        <div>
          <img
            src={back}
            alt=""
            onClick={() => navigate(-1)}
            className="h-8 my-5 cursor-pointer"
          />
          <PhotoGallery />
          <h1 className="text-main py-4 font-semibold text-xl md:max-w-5xl md:mx-auto">
            About
          </h1>
          <p className="md:max-w-5xl md:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
            purus sagittis urna enim. At amet, amet quis velit nec. Dolor,
            volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in
            ac. Tincidunt.
          </p>
          <div className="md:max-w-5xl md:mx-auto">
            {' '}
            <h1 className="text-main py-4 font-semibold text-xl">
              Education System:
            </h1>
            <p className="text-green">8.4.4</p>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">Location</h1>
            <p className="text-green">Kahawa Wendani, Nairobi,Kenya</p>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">
              Performance Statistics in the last National Exam{' '}
            </h1>
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-5"
              py="py-2"
              textColor="text-main"
            >
              Download document
            </Button>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">
              Licensing and Certificatiion
            </h1>
            <p className="text-green">Kenya Curriculum license</p>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">Email</h1>
            <p className="text-green">school@gmail.com</p>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">Phone</h1>
            <p className="text-green">+254 789 789 789</p>
          </div>
          <div>
            <Slider
              title="Planning to enroll here? Here are few things you may need"
              items={[
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                  onClick: () => navigate('/product-details/1234'),
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                  onClick: () => navigate('/product-details/1234'),
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                  onClick: () => navigate('/product-details/1234'),
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                  onClick: () => navigate('/product-details/1234'),
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                  onClick: () => navigate('/product-details/1234'),
                },
              ]}
            />
          </div>

          <div className="md:max-w-5xl md:mx-auto">
            <h2 className="text-main py-4 font-semibold text-xl">
              Rating and comments:
            </h2>
            <div className="flex justify-between pb-4 md:max-w-md">
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
            <h1 className="text-main py-4 font-semibold text-xl">
              Add Comment
            </h1>
            <div className="md:max-w-md">
              <Input bgColor="bg-primary" py="py-8" type="textarea" />
            </div>
          </div>

          <div className="md:my-10">
            <h1 className="text-main py-4 font-semibold text-xl">
              Similar Schools
            </h1>
            <Slider
              items={[
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
                  onClick: () => navigate('/view-school-details/1234'),
                },
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
                  onClick: () => navigate('/view-school-details/1234'),
                },
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
                  onClick: () => navigate('/view-school-details/1234'),
                },
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
                  onClick: () => navigate('/view-school-details/1234'),
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewScholDetails;
