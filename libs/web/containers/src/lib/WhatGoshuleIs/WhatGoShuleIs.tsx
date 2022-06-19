import { Button } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface GoShuleProps {
  image: string;
}

export function GoShuleIs(props: GoShuleProps) {
  const { image } = props;
  return (
    <div className="py-4">
      <h1 className="text-main text-2xl font-bold text-center">
        What is GoShule?
      </h1>
      <div className="flex justify-center items-center">
        <img src={image} alt="" className="max-w-full h-auto" />
      </div>

      <div className="flex flex-col items-center font-medium px- mb-10">
        <p>
          GoShule, a place where you can choose the best school options based on
          kenyans countrywide
        </p>

        <Button
          bgColor="bg-primaryDark "
          bgColorHover="bg-primaryDark"
          px="px-4"
          py="py-2"
          textColor="text-main"
        >
          View Schools
        </Button>
      </div>
    </div>
  );
}

export default GoShuleIs;
