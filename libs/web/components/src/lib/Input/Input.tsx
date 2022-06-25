import '../index.css';
/* eslint-disable-next-line */
export interface InputProps {
  bgColor: string;
  py: string;
  name?: string;
  value?: string;
  OnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
    | 'file'
    | 'range'
    | 'textarea';
}

export function Input(props: InputProps) {
  const { bgColor, py, OnChange, name, value } = props;
  return (
    <input
      name={name}
      value={value}
      onChange={OnChange}
      className={`${bgColor} appearance-none border-0 md:px-8
         rounded w-full ${py} px-4 text-main leading-tight focus:outline-none
         focus:${bgColor} focus:border-main`}
      id="inline-full-name"
      type={props.type ? props.type : 'text'}
    />
  );
}

export default Input;
