/* eslint-disable-next-line */
export interface StarProps {
  rating: number;
  setRating: (rating: number) => void;
  hover: number;
  setHover: (hover: number) => void;
  onClick?: () => void;
}

export function Ratings(props: StarProps) {
  const { rating, setRating, hover, setHover } = props;

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || rating) ? 'text-primaryDark' : 'text-gray'
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="text-4xl">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default Ratings;
