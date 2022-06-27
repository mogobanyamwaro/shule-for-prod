// eslint-disable-next-line @typescript-eslint/no-unused-vars

import home from '../../../assets/home.png';
import search from '../../../assets/search.png';
import Logo from '../../../assets/Logo.svg';
import shuleIs from '../../../assets/shuleIs.png';
import BludderImage from '../../../assets/bludders.png';
import {
  GoShuleIs,
  Hero,
  MinBlog,
  Navbar,
  SchoolLogos,
  Slider,
} from '@shule/web/containers';
import { Footer } from '@shule/web/components';
import { useNavigate } from 'react-router-dom';
import {
  getAllInstitutionsAsync,
  getBlogsAsync,
  useAppDispatch,
  useAppSelector,
} from '@shule/web/redux';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();

  const institutions = useAppSelector(
    (state) => state.institution.institutions
  );
  const loading = useAppSelector((state) => state.institution.loading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      dispatch(getAllInstitutionsAsync());
      dispatch(getBlogsAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  const blogs = useAppSelector((state) => state.blog.blogs);

  if (loading) return <div>Loading...</div>;
  console.log('here are blogs', blogs[0]);
  const newInstitutions = institutions
    .map((institution) => {
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
    })
    .filter((institution) => institution.isFeatured === true);
  return (
    <div className=" font-glory">
      <Navbar Logo={Logo} />
      <Hero backgroundImage="bg-Home" searchImage={search} />
      <SchoolLogos Logos={[home, home, home]} />
      <GoShuleIs
        image={shuleIs}
        buttonText="View Schools"
        onClick={() => navigate('/view-schools')}
        description="GoShule, a place where you can choose the best school options based on kenyans countrywide"
        title="What is GoShule?"
      />
      <div className="md:my-24 sm:hidden md:block"></div>
      <GoShuleIs
        image={BludderImage}
        isRerverse
        buttonText="Shop Now"
        onClick={() => navigate('/ecommerce-dashboard')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ipsum morbi non pellentesque."
        title="Shop for all the latest stationery"
      />

      {newInstitutions.length > 0 && (
        <Slider items={newInstitutions} title="Featured Schools" />
      )}
      {!loading && blogs && (
        <MinBlog
          description={blogs[0]?.content}
          image={blogs[0]?.image}
          title={blogs[0]?.title}
          onClick={function () {
            navigate(`/blog-details/${blogs[0]?.id}`);
          }}
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
