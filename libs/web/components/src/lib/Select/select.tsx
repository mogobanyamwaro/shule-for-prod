import '../index.css';
/* eslint-disable-next-line */
export interface SelectProps {
  name: string;
  options: string[];
}

export function Select(props: SelectProps) {
  const { name, options } = props;
  return (
    <select
      name={name}
      id={name}
      className=" px-16 py-1.5 text-sm font-bold text-black 
       bg-white bg-clip-padding bg-no-repeat 
       shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-black focus:bg-white focus:border-white focus:outline-none"
      aria-label="Default select example
      m-0"
    >
      <option value="" className="text-sm">
        Select Skill
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="text-sm">
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
