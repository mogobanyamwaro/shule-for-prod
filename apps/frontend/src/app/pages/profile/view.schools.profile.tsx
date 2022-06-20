import Search from '../../../assets/search.png';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.png';
import {
  SchoolNavbar,
  Slider,
  ViewSchoolContainer,
} from '@shule/web/containers';

import { Button, Footer } from '@shule/web/components';
import { useState } from 'react';

function ViewSchools() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <div className="px-5">
        <SchoolNavbar Logo={Logo} Search={Search} />
        <div>
          <img src={back} alt="" className="h-8 my-5" />

          <h1 className="text-main text-xl font-semibold">
            Browse through our collection of schools
          </h1>
          <Slider
            items={[
              {
                image: 'https://picsum.photos/700',
                schoolType: 'British System',
              },
              {
                image: 'https://picsum.photos/700',
                schoolType: '8-4-4/CBC',
              },
              {
                image: 'https://picsum.photos/700',
                schoolType: '8-4-4/CBC',
              },
            ]}
          />
          <h1 className="text-main text-xl font-semibold py-3">
            School of the Day...
          </h1>
          <ViewSchoolContainer
            hover={hover}
            rating={rating}
            setHover={setHover}
            setRating={setRating}
          />
          <h2 className="text-main text-sm font-semibold pb-3">
            More Schools...
          </h2>
          <ViewSchoolContainer
            hover={hover}
            rating={rating}
            setHover={setHover}
            setRating={setRating}
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
