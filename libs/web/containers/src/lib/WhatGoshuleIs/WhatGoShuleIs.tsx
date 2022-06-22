import { Button } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface GoShuleProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  isRerverse?: boolean;
  onClick?: () => void;
}

export function GoShuleIs(props: GoShuleProps) {
  const { image, buttonText, description, title, isRerverse, onClick } = props;
  return (
    <div
      className={`py-4 md:flex md:justify-between md:max-w-5xl md:my-10 md:mx-auto ${
        isRerverse && 'md:flex-row-reverse'
      }`}
    >
      <h1 className="text-main text-2xl font-bold text-center md:hidden pb-3">
        {title}
      </h1>
      <div className="flex justify-center items-center md:w-96 ">
        <img src={image} alt="" className="max-w-full  md:w-96 h-auto" />
      </div>

      <div
        className={`flex flex-col items-center font-medium px-2 pt-3 md:items-start ${
          !isRerverse && 'md:mr-16'
        }`}
      >
        <h1 className="text-main text-2xl font-bold text-center sm:hidden md:block pb-3">
          {title}
        </h1>
        <p className="pb-5 px-10 text-center md:px-0 md:text-xl md:text-left">
          {description}
        </p>

        <Button
          bgColor="bg-primaryDark "
          bgColorHover="bg-primaryDark"
          px="px-4"
          py="py-2"
          textColor="text-main"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default GoShuleIs;
