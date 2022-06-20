import { SchoolLogo } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface SliderProps {
  items: Items[];
  title?: string;
}
interface Items {
  image: string;
  product?: string;
  price?: string;
  schoolType?: string;
}

export function Slider(props: SliderProps) {
  const { items, title } = props;
  return (
    <div>
      {title && <h1 className="text-main  font-bold py-5">{title}</h1>}
      <div className=" overflow-x-scroll flex  pl-5  ">
        {items.map(
          (item: {
            image: string;
            product?: string;
            price?: string;
            schoolType?: string;
          }) => (
            <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 overflow-y-hidden  bg-primary relative">
              {item.schoolType && (
                <h1 className="text-white  text-md absolute bottom-10 right-10">
                  {item.schoolType}
                </h1>
              )}
              <a href="#" className="space-y-4">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover shadow-sm hover:shadow-md "
                    src={item.image}
                    alt=""
                  />
                </div>
                {item.product && (
                  <div className="px-4 ">
                    <div className="text-lg leading-6 font-medium space-y-1 flex justify-between flex-wrap">
                      <p className="font-bold text-main text-md ">
                        {item.product}
                      </p>
                      <p className="font-bold text-main text-md pb-1 text-end ">
                        KSH. {item.price}
                      </p>
                    </div>
                  </div>
                )}
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Slider;
