import './index.css';
/* eslint-disable-next-line */
export interface WebComponentsProps {}

export function WebComponents(props: WebComponentsProps) {
  return (
    <div className={`text-primaryDark text-6xl `}>
      <h1 className="text-primary bg-main text-6xl w-full font-bold">
        Welcome to WebComponents!
      </h1>
    </div>
  );
}

export default WebComponents;
