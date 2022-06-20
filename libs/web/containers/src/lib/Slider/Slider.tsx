import { SchoolLogo } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface SliderProps {
  images: string[];
  title?: string;
}

export function Slider(props: SliderProps) {
  const { images, title } = props;
  return (
    <div>
      {title && <h1 className="text-main  font-bold py-5">{title}</h1>}
      <div className=" overflow-x-scroll flex  pl-5  ">
        {images.map((image, index) => (
          <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 overflow-y-hidden  bg-primary">
            <a href="#" className="space-y-4">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover shadow-sm hover:shadow-md "
                  src={image}
                  alt=""
                />
              </div>
              <div className="px-4 ">
                <div className="text-lg leading-6 font-medium space-y-1 flex justify-between flex-wrap">
                  <p className="font-bold text-main text-md ">Item 1</p>
                  <p className="font-bold text-main text-md pb-1 text-end ">
                    KSH. 34.098
                  </p>
                </div>
                {/* <div className="text-lg"> */}
                {/* <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    recusandae, consequatur corrupti vel quisquam id itaque nam
                  </p> */}
                {/* <p className="font-medium text-sm text-indigo-600 mt-2">
                    Read more<span className="text-indigo-600">&hellip;</span>
                  </p> */}
                {/* </div> */}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
