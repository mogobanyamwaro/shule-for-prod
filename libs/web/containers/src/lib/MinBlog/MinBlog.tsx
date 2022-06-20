import { Button } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface MinBlogProps {
  image: string;
  description: string;
  title: string;
}

export function MinBlog(props: MinBlogProps) {
  const { image, description, title } = props;
  return (
    <div className="">
      <h1 className="text-main text-2xl py-5 font-bold pl-4  ">{title}</h1>
      <div className="flex flex-col items-center">
        <div className="max-w-sm px-5">
          <img src={image} alt="" />
        </div>
        <p className="px-5 text-center py-4">
          {description.length > 200
            ? description.substring(0, 200) + '...'
            : description}
        </p>

        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-3"
          py="py-2"
          textColor="text-main"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

export default MinBlog;
