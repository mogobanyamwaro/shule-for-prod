import React from 'react';
import Search from '../../../assets/search.png';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.png';
import { PhotoGallery, SchoolNavbar, Slider } from '@shule/web/containers';
import { useState } from 'react';
import { Button, Footer, Input, Media, Ratings } from '@shule/web/components';
export function EditSchoolProfile() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <div className="px-5">
        <SchoolNavbar Logo={Logo} Search={Search} />
        <div>
          <h1 className="text-main text-xl font-semibold py-4">Welcome</h1>
          <p className="text-main text-2xl font-bold text-center pb-4">
            School 1 Academy
          </p>
          <h1 className="text-main text-xl font-semibold py-4">
            Page Engagement
          </h1>
          <div className="flex justify-between pb-5">
            <div
              className="bg-primaryDark h-24 w-1/3 mr-1 flex flex-col
             justify-around items-center text-xl font-glory"
            >
              <p className="text-main">300</p>
              <p>Page Views</p>
            </div>
            <div
              className="bg-primaryDark mr-1 h-24 w-1/3 flex 
            flex-col justify-around items-center text-xl font-glory"
            >
              <p className="text-main">4.5</p>
              <p>Star Rating</p>
            </div>
            <div
              className="bg-primaryDark h-24 w-1/3 flex 
            flex-col justify-around items-center text-xl font-glory"
            >
              <p className="text-main">10</p>
              <p> Views per Day</p>
            </div>
          </div>
          <PhotoGallery />
          <div className="pt-5">
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-5"
              py="py-2"
              textColor="text-main"
            >
              Add Photos
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-main py-4 font-semibold text-xl">About</h1>
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-5"
              py="py-2"
              textColor="text-main"
            >
              Edit
            </Button>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
            purus sagittis urna enim. At amet, amet quis velit nec. Dolor,
            volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in
            ac. Tincidunt.
          </p>
          <div>
            {' '}
            <div className="flex justify-between items-center">
              <h1 className="text-main py-4 font-semibold text-xl">
                Education System:
              </h1>
              <Button
                bgColor="bg-primaryDark"
                bgColorHover="bg-primaryDark"
                px="px-5"
                py="py-2"
                textColor="text-main"
              >
                Edit
              </Button>
            </div>
            <p className="text-green">8.4.4</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-main py-4 font-semibold text-xl">
                Location:
              </h1>
              <Button
                bgColor="bg-primaryDark"
                bgColorHover="bg-primaryDark"
                px="px-5"
                py="py-2"
                textColor="text-main"
              >
                Edit
              </Button>
            </div>
            <p className="text-green">Kahawa Wendani, Nairobi,Kenya</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
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
                Edit
              </Button>
            </div>
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
            <div className="flex justify-between items-center">
              <h1 className="text-main py-4 font-semibold text-xl">
                Licensing and Certificatiion
              </h1>
              <Button
                bgColor="bg-primaryDark"
                bgColorHover="bg-primaryDark"
                px="px-5"
                py="py-2"
                textColor="text-main"
              >
                Edit
              </Button>
            </div>
            <p className="text-green">Kenya Curriculum license</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-main py-4 font-semibold text-xl">Email</h1>
              <Button
                bgColor="bg-primaryDark"
                bgColorHover="bg-primaryDark"
                px="px-5"
                py="py-2"
                textColor="text-main"
              >
                Edit
              </Button>
            </div>
            <p className="text-green">school@gmail.com</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-main py-4 font-semibold text-xl">Phone</h1>
              <Button
                bgColor="bg-primaryDark"
                bgColorHover="bg-primaryDark"
                px="px-5"
                py="py-2"
                textColor="text-main"
              >
                Edit
              </Button>
            </div>
            <p className="text-green">+254 789 789 789</p>
          </div>
          <div>
            <Slider
              title="Here are few things you may need for your school:"
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditSchoolProfile;
