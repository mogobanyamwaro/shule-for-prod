import { SchoolLogo } from '@shule/web/components';
import '../index.css';

/* eslint-disable-next-line */
export interface SliderProps {
  images: string[];
}

export function Slider(props: SliderProps) {
  const { images } = props;
  return (
    <div>
      <h1 className="text-main px-5 font-bold py-5">Featured schools </h1>
      <div className="h-52 overflow-x-scroll max-w-md flex pl-5  ">
        {images.map((image, index) => (
          <img src={image} key={index} className="h-full w-full pr-5" alt="" />
        ))}
      </div>
    </div>
  );
}

export default Slider;
