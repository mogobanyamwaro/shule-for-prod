import { Input } from '@shule/web/components';
import '../index.css';
/* eslint-disable-next-line */
export interface HeroProps {
  backgroundImage: string;
  searchImage: string;
}

export function Hero(props: HeroProps) {
  const { backgroundImage, searchImage } = props;
  return (
    <div
      className={`h-96 ${backgroundImage} md:bg-HomeMd bg-center bg-cover pt-3 px-5`}
    >
      <div className="flex justify-center items-center h-96">
        <div className="">
          <h1 className="font-Elsie font-bold text-main text-2xl leading-7 drop-shadow-md md:pb-5 text-center md:text-4xl md:leading-10 ">
            Find the Best <br></br> School for your <br /> Child
          </h1>
          <h2 className="text-white drop-shadow-lg font-semibold md:text-black md:font-medium md:pb-5 text-xl text-center">
            GoShule, a place where you can choose the best school options based
            on kenyans countrywide
          </h2>
          <div className="flex justify-center">
            <div className="w-36 md:w-64">
              <Input bgColor="bg-primary" py="py-2" />
            </div>

            <div
              className="bg-primaryDark py-1 px-2 w-10 md:w-24 flex justify-center
           items-center cursor-pointer rounded-md mx-1"
            >
              <img src={searchImage} alt="" className="h-6 w-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
