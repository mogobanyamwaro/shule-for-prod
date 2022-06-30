import Search from '../../../assets/search.png';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.svg';
import {
  SchoolNavbar,
  Slider,
  ViewSchoolContainer,
} from '@shule/web/containers';

import { Button, Footer } from '@shule/web/components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewSchools() {
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

          <h1 className="text-main text-xl font-semibold md:my-10">
            Browse through our collection of schools
          </h1>
          <Slider
            items={[
              {
                image: 'https://picsum.photos/700',
                schoolType: 'British System',
                onClick: () => navigate('/view-school-details/123344'),
              },
              {
                image: 'https://picsum.photos/700',
                schoolType: '8-4-4/CBC',
                onClick: () => navigate('/view-school-details/123344'),
              },
              {
                image: 'https://picsum.photos/700',
                schoolType: '8-4-4/CBC',
                onClick: () => navigate('/view-school-details/123344'),
              },
            ]}
          />
          <h1 className="text-main text-xl font-semibold py-3 md:my-5 md:max-w-5xl md:mx-auto">
            School of the Day...
          </h1>
          <div>
            <div className="flex justify-center">
              <div className="w-11/12 relative  ">
                <img
                  src="https://picsum.photos/700"
                  className="w-full"
                  alt=""
                />
                <div className="bg-black opacity-40 z-40 md:h-32 md:flex md:items-center absolute bottom-0">
                  <h1 className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Odio amet purus sagittis urna enim. At amet, amet quis velit
                    nec. Dolor, volutpat pellentesque fringilla nec ac.
                    Vestibulum porttitor mi in ac. Tincidunt.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-main text-sm font-semibold pb-3 md:my-10 md:max-w-5xl md:mx-auto">
            More Schools...
          </h2>
          <ViewSchoolContainer
            hover={hover}
            rating={rating}
            setHover={setHover}
            setRating={setRating}
            onClick={() => navigate('/view-school-details/123344')}
          />
          <div className="md:my-10"></div>
          <ViewSchoolContainer
            hover={hover}
            rating={rating}
            setHover={setHover}
            setRating={setRating}
            onClick={() => navigate('/view-school-details/123344')}
          />
          <div className="md:my-10"></div>
          <ViewSchoolContainer
            hover={hover}
            rating={rating}
            setHover={setHover}
            setRating={setRating}
            onClick={() => navigate('/view-school-details/123344')}
          />
          <div className="md:my-10"></div>
          <ViewSchoolContainer
            hover={hover}
            rating={rating}
            setHover={setHover}
            setRating={setRating}
            onClick={() => navigate('/view-school-details/123344')}
          />
          <div className="py-3 flex justify-center">
            {' '}
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-7"
              py="py-2"
              onClick={() => console.log(rating)}
              textColor="text-main"
            >
              More
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewSchools;
