import Search from '../../../assets/search.png';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.svg';
import {
  SchoolNavbar,
  Slider,
  ViewSchoolContainer,
} from '@shule/web/containers';

import { Button, Footer } from '@shule/web/components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllInstitutionsAsync,
  useAppDispatch,
  useAppSelector,
} from '@shule/web/redux';

function ViewSchools() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();

  const institutions = useAppSelector(
    (state) => state.institution.institutions
  );
  const loading = useAppSelector((state) => state.institution.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(getAllInstitutionsAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

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
  const newInstitutions = institutions.map((institution) => {
    return {
      image: institution.schoolPhotos[0],
      schoolType: institution.educationType,
      isFeatured: institution.isFeatured,
      id: institution.id,
      onClick: function () {
        navigate(`/view-school-details/${institution.id}`);
      },
      url: `/view-school-details/${institution.id}`,
    };
  });
  console.log(institutions);

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
          {newInstitutions.length > 0 && <Slider items={newInstitutions} />}
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
          {institutions.map((institution) => {
            return (
              <>
                {' '}
                <ViewSchoolContainer
                  hover={hover}
                  key={institution.id}
                  about={institution.about}
                  image={institution.schoolPhotos[0]}
                  schoolName={institution.name}
                  rating={rating}
                  setHover={setHover}
                  setRating={setRating}
                  onClick={function () {
                    navigate(`/view-school-details/${institution.id}`);
                  }}
                />
                <div className="md:my-10"></div>
              </>
            );
          })}

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
