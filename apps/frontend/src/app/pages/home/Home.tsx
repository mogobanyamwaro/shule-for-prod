// eslint-disable-next-line @typescript-eslint/no-unused-vars

import home from '../../../assets/home.png';
import search from '../../../assets/search.png';
import Logo from '../../../assets/Logo.png';
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

function Home() {
  return (
    <div className=" font-glory ">
      <Navbar Logo={Logo} />
      <Hero backgroundImage="bg-Home" searchImage={search} />
      <SchoolLogos Logos={[home, home, home]} />
      <GoShuleIs
        image={shuleIs}
        buttonText="View Schools"
        description="GoShule, a place where you can choose the best school options based on kenyans countrywide"
        title="What is GoShule?"
      />
      <GoShuleIs
        image={BludderImage}
        buttonText="Shop Now"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ipsum morbi non pellentesque."
        title="Shop for all the latest stationery"
      />
      <Slider
        items={[
          {
            image: 'https://picsum.photos/700',
          },
          {
            image: 'https://picsum.photos/700',
          },
          {
            image: 'https://picsum.photos/700',
          },
        ]}
      />
      <MinBlog
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet purus sagittis urna enim. At amet, amet quis velit nec. Dolor, volutpat pellentesque fringilla nec ac. Vestibulum porttitor mi in ac. Tincidunt."
        image="https://picsum.photos/800"
        title="Blog Post Title"
      />
      <Footer />
    </div>
  );
}

export default Home;
