import '../index.css';
/* eslint-disable-next-line */
export interface ButtonProps {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
  px: string;
  py: string;
  bgColorHover: string;
}

export function Button(props: ButtonProps) {
  const { bgColor, bgColorHover, textColor, children, px, py } = props;
  return (
    <button
      className={`${bgColor} hover:${bgColorHover} ${textColor} font-bold ${py} ${px}  rounded`}
    >
      {children}
    </button>
  );
}

export default Button;
