import '../index.css';
/* eslint-disable-next-line */
export interface InputProps {
  bgColor: string;
  py: string;
}

export function Input(props: InputProps) {
  const { bgColor, py } = props;
  return (
    <input
      className={`${bgColor} appearance-none border-0
         rounded w-full ${py} px-4 text-main leading-tight focus:outline-none
         focus:${bgColor} focus:border-main`}
      id="inline-full-name"
      type="text"
    />
  );
}

export default Input;
