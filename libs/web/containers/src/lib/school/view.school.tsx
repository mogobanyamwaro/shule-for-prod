import React, { useEffect, useState } from 'react';
import { Button, StarProps, Ratings } from '@shule/web/components';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { RatingEnumType } from '@shule/backend/enums';
import { createRatingAsync, useAppDispatch } from '@shule/web/redux';
import { getToken, useToken } from '@shule/web/helpers';

export function ViewSchoolContainer(props: StarProps) {
  const { rating, setRating, hover, setHover, onClick } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const handleSubmitComment = async () => {
    const token = getToken();
    if (!token) {
      navigate('/login');
    }
    const newRating = {
      comment,
      ratingValue: rating,
      ratingType: RatingEnumType.INSTITUTION_RATING,
      user: {
        id: '',
        profile: {
          avatar: '',
          firstName: '',
          lastName: '',
        },
        username: '',
      },
    };

    try {
      await dispatch(createRatingAsync(newRating));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:flex md:justify-between md:max-w-5xl md:mx-auto">
      <img
        src="https://picsum.photos/700"
        className="py-3 md:mr-3 md:max-w-md"
        alt=""
      />
      <div className="md:ml-10 md:mt-10">
        {' '}
        <h1 className="text-center md:text-start text-secondary font-semibold text-xl pb-5">
          School1 Academy
        </h1>
        <p className="text-xs ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
          purus sagittis urna enim. At amet, amet quis velit nec. Dolor,
          volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in ac.
          Tincidunt.
        </p>
        <div className="py-4">
          <h1 className="text-main font-semibold text-xl py-4">Rating</h1>
          <div className="flex justify-between md:justify-start">
            <div className="md:mr-10 ">
              <Ratings
                hover={hover}
                rating={rating}
                setHover={setHover}
                setRating={setRating}
              />
            </div>
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-7"
              py="py-2"
              onClick={() => handleSubmitComment()}
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
            onClick={onClick}
            textColor="text-main"
          >
            More Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewSchoolContainer;
