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
export function ViewScholDetails() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <div className="px-5">
        <SchoolNavbar Logo={Logo} Search={Search} />
        <div>
          <img src={back} alt="" className="h-8 my-5" />
          <PhotoGallery />
          <h1 className="text-main py-4 font-semibold text-xl">About</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
            purus sagittis urna enim. At amet, amet quis velit nec. Dolor,
            volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in
            ac. Tincidunt.
          </p>
          <div>
            {' '}
            <h1 className="text-main py-4 font-semibold text-xl">
              Education System:
            </h1>
            <p className="text-green">8.4.4</p>
          </div>
          <div>
            <h1 className="text-main py-4 font-semibold text-xl">Location</h1>
            <p className="text-green">Kahawa Wendani, Nairobi,Kenya</p>
          </div>
          <div>
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
          <div>
            <h1 className="text-main py-4 font-semibold text-xl">
              Licensing and Certificatiion
            </h1>
            <p className="text-green">Kenya Curriculum license</p>
          </div>
          <div>
            <h1 className="text-main py-4 font-semibold text-xl">Email</h1>
            <p className="text-green">school@gmail.com</p>
          </div>
          <div>
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
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                },
                {
                  image: 'https://picsum.photos/800',
                  product: 'School Logo',
                  price: '1000',
                },
              ]}
            />
          </div>
          <div>
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
          <div>
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
          <div>
            <h1 className="text-main py-4 font-semibold text-xl">
              Add Comment
            </h1>
            <Input bgColor="bg-primary" py="py-8" type="textarea" />
          </div>
          <div>
            <h1 className="text-main py-4 font-semibold text-xl">
              Similar Schools
            </h1>
            <Slider
              items={[
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
                },
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
                },
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
                },
                {
                  image: 'https://picsum.photos/800',
                  schoolType: 'Primary',
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
