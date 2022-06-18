import '../index.css';
/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button className="bg-black hover:bg-green text-main font-bold py-2 px-4 rounded">
      Button
    </button>
  );
}

export default Button;
