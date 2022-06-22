import { SchoolLogo } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface SchoolLogoProps {
  Logos: string[];
}

export function SchoolLogos(props: SchoolLogoProps) {
  const { Logos } = props;
  return (
    <div>
      <div className="flex px-2 justify-between items-center md:max-w-md md:mx-auto md:my-6">
        {Logos.map((logo, index) => (
          <SchoolLogo Logo={logo} key={index} />
        ))}
      </div>
      <div>
        <p className="text-center text-xs font-semibold py-5 md:text-xl">
          Trusted by 1000+ parents and 500+ schools
        </p>
        <p className="  bg-gray  px-2 md:max-w-md md:mx-auto">
          <hr className="text-gray text-4xl  " />
        </p>
      </div>
    </div>
  );
}

export default SchoolLogos;
