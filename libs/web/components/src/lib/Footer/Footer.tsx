import '../index.css';
/* eslint-disable-next-line */
import FacebookLogo from '../assets/fb.png';
import InstagramLogo from '../assets/instagram.png';

interface IFooterProps {
  logo: string;
}

export function Footer(props: IFooterProps) {
  return (
    <div className="static bottom-0 left-0 w-full ">
      <div className="flex items-center  bg-primary md:h-36 md:justify-around flex-col md:flex-row">
        <div className="my-2 md:my-0">
          <img src={props.logo} className="h-24" alt="" />
        </div>

        <div className="my-3 md:my-0">
          <h1 className="mb-2 ">
            <span className="font-bold">Phone:</span> 0712345678
          </h1>
          <h1>
            <span className="font-bold">Email:</span> Goshule@gmail.com
          </h1>
        </div>

        <div className="mb-4 md:mb-0">
          <h1 className="mb-2">Follow us on Social Media</h1>
          <div className="flex justify-between text-2xl">
            <h1
              className="cursor-pointer"
              onClick={() => window.open('https://www.facebook.com/goshule')}
            >
              <img src={FacebookLogo} className="h-10" alt="" />
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/go_shule/')}
            >
              <img src={InstagramLogo} className="h-10" alt="" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
