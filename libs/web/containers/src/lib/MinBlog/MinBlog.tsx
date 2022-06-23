import { Button } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface MinBlogProps {
  image: string;
  description: string;
  title: string;
  onClick?: () => void;
}

export function MinBlog(props: MinBlogProps) {
  const { image, description, title, onClick } = props;
  return (
    <div className="md:mt-16 md:mb-24">
      <h1 className="text-main text-2xl py-5 font-bold pl-4  ">{title}</h1>
      <div className="flex flex-col items-center md:flex-row ">
        <div className="max-w-sm px-5">
          <img src={image} alt="" />
        </div>
        <div>
          <p className="px-5 text-center py-4 md:px-0 md:text-left md:text-xl">
            {description.length > 200
              ? description.substring(0, 200) + '...'
              : description}
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-3"
              py="py-2"
              onClick={onClick}
              textColor="text-main"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinBlog;
