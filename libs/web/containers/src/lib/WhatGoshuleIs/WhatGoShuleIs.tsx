import { Button } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface GoShuleProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export function GoShuleIs(props: GoShuleProps) {
  const { image, buttonText, description, title } = props;
  return (
    <div className="py-4">
      <h1 className="text-main text-2xl font-bold text-center pb-3">{title}</h1>
      <div className="flex justify-center items-center">
        <img src={image} alt="" className="max-w-full h-auto" />
      </div>

      <div className="flex flex-col items-center font-medium px-2 pt-3">
        <p className="pb-5 px-10 text-center">{description}</p>

        <Button
          bgColor="bg-primaryDark "
          bgColorHover="bg-primaryDark"
          px="px-4"
          py="py-2"
          textColor="text-main"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default GoShuleIs;
