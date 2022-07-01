import '../index.css';
/* eslint-disable-next-line */
export interface ButtonProps {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
  px: string;
  py: string;
  bgColorHover: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  loading?: boolean;
  width?: string;
  height?: string;
  textSize?: string;
}

export function Button(props: ButtonProps) {
  const {
    bgColor,
    bgColorHover,
    textColor,
    children,
    loading,
    px,
    py,
    height,
    width,
    textSize,
  } = props;
  return (
    <button
      onClick={props.onClick}
      disabled={loading}
      className={`${bgColor} hover:${bgColorHover} ${textColor} font-bold ${py} ${px}  rounded md:${width} md:${textSize} md:${height}`}
    >
      {children}
    </button>
  );
}

export default Button;
