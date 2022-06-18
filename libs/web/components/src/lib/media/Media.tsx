import '../index.css';
/* eslint-disable-next-line */
export interface MediaProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export function Media(props: MediaProps) {
  const { alt, description, image, title } = props;
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 rounded-full flex justify-center items-center  bg-gray">
        {image && (
          <img src={image} alt={alt} className="h-16, w-16 rounded-full" />
        )}
      </div>
      <div className="flex-1 ml-4">
        <h1 className="text-main text-sm font-bold">{title}</h1>
        <p className="text-sm text-black">
          {description.length > 100
            ? description.substring(0, 100) + '...'
            : description}
        </p>
      </div>
    </div>
  );
}

export default Media;
