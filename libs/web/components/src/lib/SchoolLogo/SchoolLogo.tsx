import '../index.css';
/* eslint-disable-next-line */
export interface SchoolLogoProps {
  Logo: string;
}

export function SchoolLogo(props: SchoolLogoProps) {
  const { Logo } = props;
  return (
    <div className="w-16 h-16 rounded-full bg-gray flex justify-center items-center">
      <img src={Logo} alt="" className="w-16 h-16 rounded-full" />
    </div>
  );
}

export default SchoolLogo;
