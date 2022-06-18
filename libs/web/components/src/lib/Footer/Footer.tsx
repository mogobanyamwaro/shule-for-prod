import '../index.css';
/* eslint-disable-next-line */

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="flex items-center h-24 bg-primaryDark justify-around ">
        <div>
          <h1 className="text-2xl">GoShule</h1>
          <p className="text-md">Caption here...</p>
        </div>

        <div>
          <h1>Follow us on Social Media</h1>
          <div className="flex justify-between text-2xl">
            <h1>F</h1>
            <h1>IG</h1>
            <h1>In</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
