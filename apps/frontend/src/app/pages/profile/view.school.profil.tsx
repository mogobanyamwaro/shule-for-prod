import React from 'react';
import Search from '../../../assets/search.png';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.svg';
import { RatingEnumType } from '@shule/backend/enums';
import {
  PhotoGallery,
  SchoolNavbar,
  Slider,
  ViewSchoolContainer,
} from '@shule/web/containers';
import { useState, useEffect } from 'react';
import { Button, Footer, Input, Media, Ratings } from '@shule/web/components';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  createRating,
  createRatingAsync,
  getAllInstitutionsAsync,
  getInstitutionRatingsAsync,
  getOneInstitutionsAsync,
  useAppDispatch,
  useAppSelector,
} from '@shule/web/redux';
import { getToken } from '@shule/web/helpers';
export function ViewScholDetails() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [comment, setComment] = useState('');

  const institution = useAppSelector((state) => state.institution.institution);
  const institutions = useAppSelector(
    (state) => state.institution.institutions
  );
  const loading = useAppSelector((state) => state.institution.loading);
  const institutionRatings = useAppSelector((state) => state.rating.ratings);
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      const url = location.pathname.split('/');
      const id = url[url.length - 1];

      dispatch(getOneInstitutionsAsync(id));
      dispatch(getAllInstitutionsAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location]);

  useEffect(() => {
    try {
      const url = location.pathname.split('/');
      const id = url[url.length - 1];
      dispatch(getInstitutionRatingsAsync(id));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location]);

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

  if (loading)
    return (
      <>
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray rounded-full animate-spin"></div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-24 h-24 border-l-2 border-gray rounded-full animate-spin"></div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-40 h-40 border-t-4 border-b-4 border-green rounded-full animate-spin"></div>
        </div>
      </>
    );
  console.log(institutionRatings.ratings);

  const newInstitutions = institutions.map((institution) => {
    return {
      image: institution.schoolPhotos[0],
      schoolType: institution.educationType,
      id: institution.id,
      onClick: function () {
        navigate(`/view-school-details/${institution.id}`);
      },
      url: `/view-school-details/${institution.id}`,
    };
  });

  return (
    <div>
      <div className="px-5 pb-5">
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
          <p className="md:max-w-5xl md:mx-auto">{institution.about}</p>
          <div className="md:max-w-5xl md:mx-auto">
            {' '}
            <h1 className="text-main py-4 font-semibold text-xl">
              Education System:
            </h1>
            <p className="text-green">{institution.educationType}</p>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">Location</h1>
            <p className="text-green">{institution.location}</p>
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
            <p className="text-green">{institution.licenseAndCertification}</p>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">Email</h1>
            <p className="text-green">{institution.email}</p>
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">Phone</h1>
            <p className="text-green">{institution.phone}</p>
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
          </div>

          <div className="md:max-w-5xl md:mx-auto">
            {institutionRatings.ratings.map((rating) => {
              return (
                <div className="pb-4">
                  <Media
                    key={rating.id}
                    title={rating.user?.username}
                    alt="username"
                    image={rating.user?.profile?.avatar}
                    description={rating.comment}
                  />
                </div>
              );
            })}
          </div>

          <div className="md:max-w-5xl md:mx-auto">
            <h1 className="text-main py-4 font-semibold text-xl">
              Add Comment
            </h1>
            <div className="md:max-w-md">
              <Input
                name="comment"
                OnChange={(e) => setComment(e.target.value)}
                value={comment}
                bgColor="bg-primary"
                py="py-8"
                type="textarea"
              />
            </div>
            <div className="flex justify-between pb-4 md:max-w-md pt-3">
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
                onClick={() => handleSubmitComment()}
                textColor="text-main"
              >
                Rate
              </Button>
            </div>
          </div>

          <div className="md:my-10">
            <h1 className="text-main py-4 font-semibold text-xl">
              Similar Schools
            </h1>
            <Slider items={newInstitutions} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewScholDetails;
