// eslint-disable-next-line @typescript-eslint/no-unused-vars

import home from '../assets/home.png';
import search from '../assets/search.png';
import Logo from '../assets/Logo.png';
import shuleIs from '../assets/shuleIs.png';
import BludderImage from '../assets/bludders.png';
import {
  GoShuleIs,
  Hero,
  Navbar,
  SchoolLogos,
  Slider,
} from '@shule/web/containers';
export function App() {
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
        images={[
          'https://picsum.photos/800',
          'https://picsum.photos/800',
          'https://picsum.photos/800',
        ]}
      />
    </div>
  );
}

export default App;
