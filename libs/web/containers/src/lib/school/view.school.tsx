import React from 'react';
import { Button, StarProps, Ratings } from '@shule/web/components';

export function ViewSchoolContainer(props: StarProps) {
  const { rating, setRating, hover, setHover } = props;
  return (
    <div>
      <img src="https://picsum.photos/700" className="py-3" alt="" />
      <h1 className="text-center text-secondary font-semibold text-xl pb-5">
        School1 Academy
      </h1>

      <p className="text-xs ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus
        sagittis urna enim. At amet, amet quis velit nec. Dolor, volutpat
        pellentesque fringilla nec ac. Vestibulum porttitor mi in ac. Tincidunt.
      </p>

      <div className="py-4">
        <h1 className="text-main font-semibold text-xl py-4">Rating</h1>
        <div className="flex justify-between">
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
      <div className="py-4">
        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-7"
          py="py-2"
          onClick={() => console.log(rating)}
          textColor="text-main"
        >
          Details
        </Button>
      </div>
    </div>
  );
}

export default ViewSchoolContainer;
