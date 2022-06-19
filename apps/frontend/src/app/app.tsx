// eslint-disable-next-line @typescript-eslint/no-unused-vars

import home from '../assets/home.png';
import search from '../assets/search.png';
import Logo from '../assets/Logo.png';
import shuleIs from '../assets/shuleIs.png';
import { GoShuleIs, Hero, Navbar, SchoolLogos } from '@shule/web/containers';
export function App() {
  return (
    <div className=" font-glory ">
      <Navbar Logo={Logo} />
      <Hero backgroundImage="bg-Home" searchImage={search} />
      <SchoolLogos Logos={[home, home, home]} />
      <GoShuleIs image={shuleIs} />
    </div>
  );
}

export default App;
